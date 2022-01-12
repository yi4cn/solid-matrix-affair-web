/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)

const HASH_RE = /#/g // %23
const AMPERSAND_RE = /&/g // %26
const SLASH_RE = /\//g // %2F
const EQUAL_RE = /=/g // %3D
const IM_RE = /\?/g // %3F
const PLUS_RE = /\+/g // %2B
/**
 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
 * seems to be less flexible than not doing so and I can't find out the legacy
 * systems requiring this for regular requests like text/html. In the standard,
 * the encoding of the plus character is only mentioned for
 * application/x-www-form-urlencoded
 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
 * leave the plus character as is in queries. To be more flexible, we allow the
 * plus character on the query but it can also be manually encoded by the user.
 *
 * Resources:
 * - https://url.spec.whatwg.org/#urlencoded-parsing
 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
 */

const ENC_BRACKET_OPEN_RE = /%5B/g // [
const ENC_BRACKET_CLOSE_RE = /%5D/g // ]
const ENC_CARET_RE = /%5E/g // ^
const ENC_BACKTICK_RE = /%60/g // `
const ENC_CURLY_OPEN_RE = /%7B/g // {
const ENC_PIPE_RE = /%7C/g // |
const ENC_CURLY_CLOSE_RE = /%7D/g // }
const ENC_SPACE_RE = /%20/g // }

/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */
function commonEncode(text) {
    return encodeURI('' + text)
        .replace(ENC_PIPE_RE, '|')
        .replace(ENC_BRACKET_OPEN_RE, '[')
        .replace(ENC_BRACKET_CLOSE_RE, ']')
}

/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
export function encodeHash(text) {
    return commonEncode(text)
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^')
}

/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
export function encodeQueryValue(text) {
    return (
        commonEncode(text)
            // Encode the space as +, encode the + to differentiate it from the space
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

/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */
export function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, '%3D')
}

/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
export function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F')
}

/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
 * string instead.
 *
 * @param text - string to encode
 * @returns encoded string
 */
export function encodeParam(text) {
    return text == null ? '' : encodePath(text).replace(SLASH_RE, '%2F')
}

/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */
export function decode(text) {
    try {
        return decodeURIComponent('' + text)
    } catch (err) {
        return '' + text
    }

}

/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams
 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */
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

/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */
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