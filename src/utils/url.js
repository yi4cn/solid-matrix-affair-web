export const HASH_RE = /#/g // %23
export const AMPERSAND_RE = /&/g // %26
export const SLASH_RE = /\//g // %2F
export const EQUAL_RE = /=/g // %3D
export const IM_RE = /\?/g // %3F
export const PLUS_RE = /\+/g // %2B

export const ENC_BRACKET_OPEN_RE = /%5B/g // [
export const ENC_BRACKET_CLOSE_RE = /%5D/g // ]
export const ENC_CARET_RE = /%5E/g // ^
export const ENC_BACKTICK_RE = /%60/g // `
export const ENC_CURLY_OPEN_RE = /%7B/g // {
export const ENC_PIPE_RE = /%7C/g // |
export const ENC_CURLY_CLOSE_RE = /%7D/g // }
export const ENC_SPACE_RE = /%20/g // }

export function commonEncode(text) {
    return encodeURIComponent('' + text)
        .replace(ENC_PIPE_RE, '|')
        .replace(ENC_BRACKET_OPEN_RE, '[')
        .replace(ENC_BRACKET_CLOSE_RE, ']')
}

export function encodeHash(text) {
    return commonEncode(text)
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^')
}

export function encodeQueryValue(text) {
    return (
        commonEncode(text)
            .replace(PLUS_RE, '%2B')
            .replace(ENC_SPACE_RE, '+')
            .replace(HASH_RE, '%23')
            .replace(AMPERSAND_RE, '%26')
            .replace(ENC_BACKTICK_RE, '`')
            .replace(ENC_CURLY_OPEN_RE, '{')
            .replace(ENC_CURLY_CLOSE_RE, '}')
            .replace(ENC_CARET_RE, '^')
    )
}

export function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, '%3D')
}

export function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F')
}

export function encodeParam(text) {
    return text == null ? '' : encodePath(text).replace(SLASH_RE, '%2F')
}

export function stringifyQuery(query) {
    let search = ''
    for (let key in query) {
        const value = query[key]
        key = encodeQueryKey(key)
        if (value == null) {
            // only null adds the value
            if (value !== undefined) {
                search += (search.length ? '&' : '') + key
            }
            continue
        }
        // keep null values
        const values = Array.isArray(value)
            ? value.map(v => v && encodeQueryValue(v))
            : [value && encodeQueryValue(value)]

        values.forEach(value => {
            // skip undefined values in arrays as if they were not present
            // smaller code than using filter
            if (value !== undefined) {
                // only append & with non-empty search
                search += (search.length ? '&' : '') + key
                if (value != null) search += '=' + value
            }
        })
    }

    return search
}

export function parseQuery(search) {
    const query = {}
    // avoid creating an object with an empty key and empty value
    // because of split('&')
    if (search === '' || search === '?') return query
    const hasLeadingIM = search[0] === '?'
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&')
    for (let i = 0; i < searchParams.length; ++i) {
        // pre decode the + into space
        const searchParam = searchParams[i].replace(PLUS_RE, ' ')
        // allow the = character
        const eqPos = searchParam.indexOf('=')
        const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos))
        const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1))

        if (key in query) {
            // an extra variable for ts types
            let currentValue = query[key]
            if (!Array.isArray(currentValue)) {
                currentValue = query[key] = [currentValue]
            }
            currentValue.push(value)
        } else {
            query[key] = value
        }
    }
    return query
}

export function normalizeQuery(query) {
    const normalizedQuery = {}

    for (const key in query) {
        const value = query[key]
        if (value !== undefined) {
            normalizedQuery[key] = Array.isArray(value)
                ? value.map(v => (v == null ? null : '' + v))
                : value == null
                    ? value
                    : '' + value
        }
    }

    return normalizedQuery
}

export function decode(text) {
    try {
        return decodeURIComponent('' + text)
    } catch (err) {
        return '' + text
    }

}


export function parseUrl(url) {
    const ub = new UrlBuilder();

    let balance = url;

    // fragment
    balance = (url => {
        const arr = url.split('#');
        ub.fragment(arr.length > 1 ? decode(arr[1]) : '');
        return arr[0];
    })(balance);

    // query
    balance = (url => {
        const arr = url.split('?');
        ub.query(arr.length > 1 ? parseQuery(arr[1]) : {});
        return arr[0];
    })(balance);

    // protocol
    balance = (url => {
        const arr = url.split('://');
        if (arr.length > 1) {
            ub.protocol(arr[0]);
            return arr[1];
        } else
            return arr[0];
    })(balance);

    // path
    balance = (url => {
        const arr = url.split('/');
        ub.path(arr.length > 1 ? "/" + arr.slice(1).join('/') : '');
        return arr[0];
    })(balance);

    // login
    balance = (url => {
        const arr = url.split('@');
        if (arr.length > 1) {
            const [username, password] = arr[0].split(':');
            ub.username(username);
            ub.password(password || '');
            return arr[1];
        } else {
            return arr[0];
        }
    })(balance);

    // port

    balance = (url => {
        const arr = url.split(':');
        ub.port(arr.length > 1 ? arr[1] : '');
        return arr[0];
    })(balance);

    ub.host(balance);

    return ub;
}

// [protocol]://[username]:[password]@[host]:[port][path]?[query]#[fragment]
export class UrlBuilder {
    constructor(baseUrl) {
        let url = {};
        if (baseUrl !== undefined) {
            url = parseUrl(baseUrl.toString());
        }

        this._protocol = url._protocol || '';
        this._username = url._username || '';
        this._password = url._password || '';
        this._host = url._host || '';
        this._port = url._port || '';
        this._path = url._path || '';
        this._query = url._query || {};
        this._fragment = url._fragment || '';

        Object.apply()
    }
    protocol(value) {
        if (value === undefined) return this._protocol

        this._protocol = value || '';
        return this;
    }
    username(value) {
        if (value === undefined) return this._username

        this._username = value || '';
        return this;
    }
    password(value) {
        if (value === undefined) return this._password

        this._password = value || '';
        return this;
    }
    host(value) {
        if (value === undefined) return this._host

        this._host = value || '';
        return this;
    }
    port(value) {
        if (value === undefined) return this._port

        this._port = value || '';
        return this;
    }
    path(value) {
        if (value === undefined) return this._path

        this._path = value || '';
        return this;
    }
    query(obj) {
        if (obj === undefined) return this._query

        this._query = normalizeQuery(obj || {});
        return this;
    }
    fragment(value) {
        if (value === undefined) return this._fragment

        this._fragment = value || '';
        return this;
    }

    ToProtocol() {
        return this._protocol ? this._protocol + "://" : "";
    }

    ToLogin() {
        let url = "";
        if (this._username) {
            url += this._username
            if (this._password) url += ":" + this._password;
            url += '@';
        }
        return url;
    }

    ToHost() {
        return this._host;
    }

    ToPort() {
        return this._port ? ":" + this._port : "";
    }

    ToPath() {
        return this._path;
    }

    ToQuery() {
        const queryString = stringifyQuery(this._query);
        return queryString && queryString.length > 0 ? "?" + queryString : "";
    }

    ToFragment() {
        return this._fragment ? "#" + encodeHash(this._fragment) : '';
    }

    ToOrigin() {
        return this.ToProtocol() + this.ToHost() + this.ToPort();
    }

    toHref() {
        return "" + this.ToProtocol() + this.ToLogin() + this.ToHost() + this.ToPort() + this.ToPath() + this.ToQuery();
    }

    toString() {
        return this.toHref() + this.ToFragment();
    }
}
