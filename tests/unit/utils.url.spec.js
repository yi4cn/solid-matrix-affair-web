import { UrlBuilder } from '@/utils/url';
import { expect } from 'chai';

describe('utils.url', () => {
    describe('UrlBuilder', () => {
        it('[host] ', () => {
            const url = 'www.my-size.com';
            const ub = new UrlBuilder().host(url);
            expect(ub.toString()).to.equal(url);

            const ub2 = new UrlBuilder(url)
            expect(ub2.host()).to.equal('www.my-size.com');
            expect(ub2.toString()).to.equal(url);
        })
        it('[host]:[port]', () => {
            const url = 'www.my-size.com:9000';
            const ub = new UrlBuilder();
            ub.host('www.my-size.com').port('9000');
            expect(ub.toString()).to.equal(url);

            const ub2 = new UrlBuilder(url)
            expect(ub2.host()).to.equal('www.my-size.com');
            expect(ub2.port()).to.equal('9000');
            expect(ub2.toString()).to.equal(url);
        })
        it('[username]@[host]', () => {
            const url = 'jiyi@www.my-size.com';

            const ub = new UrlBuilder().host('www.my-size.com').username('jiyi');
            expect(ub.toString()).to.equal(url);

            const ub2 = new UrlBuilder(url)
            expect(ub2.host()).to.equal('www.my-size.com');
            expect(ub2.username()).to.equal('jiyi');
            expect(ub2.toString()).to.equal(url);
        })
        it('[username]:[password]@[host]', () => {
            const host = 'www.my-size.com';
            const username = 'jiyi';
            const password = 'xdq';
            const url = username + ':' + password + '@' + host;

            const ub = new UrlBuilder().host(host).username(username).password(password);
            expect(ub.toString()).to.equal(url);

            const ub2 = new UrlBuilder(url);
            expect(ub2.host()).to.equal(host);
            expect(ub2.username()).to.equal(username);
            expect(ub2.password()).to.equal(password);
            expect(ub2.toString()).to.equal(url);
        })
        it('[username]:[password]@[host]:[port]', () => {
            const host = 'www.my-size.com';
            const username = 'jiyi';
            const password = 'xdq';
            const port = '9000';
            const url = username + ':' + password + '@' + host + ':' + port;

            const ub = new UrlBuilder().host(host).username(username).password(password).port(port);
            expect(ub.toString()).to.equal(url);

            const ub2 = new UrlBuilder(url);
            expect(ub2.host()).to.equal(host);
            expect(ub2.username()).to.equal(username);
            expect(ub2.password()).to.equal(password);
            expect(ub2.port()).to.equal(port);
            expect(ub2.toString()).to.equal(url);
        })
        it('[protocal]://[host]', () => {
            const protocol = 'https';
            const host = 'www.my-size.com';
            const url = protocol + '://' + host;

            const ub = new UrlBuilder().protocol(protocol).host(host);
            expect(ub.toString()).to.equal(url);

            const ub2 = new UrlBuilder(url);
            expect(ub2.host()).to.equal(host);
            expect(ub2.protocol()).to.equal(protocol);
            expect(ub2.toString()).to.equal(url);
        })
        it('[protocal]://[host]#[fragment]', () => {
            const protocol = 'https';
            const host = 'www.my-size.com';
            const fragment = 'state';
            const url = protocol + '://' + host + '#' + fragment;

            const ub = new UrlBuilder().protocol(protocol).host(host).fragment(fragment);
            expect(ub.toString()).to.equal(url);

            const ub2 = new UrlBuilder(url);
            expect(ub2.host()).to.equal(host);
            expect(ub2.protocol()).to.equal(protocol);
            expect(ub2.fragment()).to.equal(fragment);
            expect(ub2.toString()).to.equal(url);
        })

        it('[protocal]://[host][path]#[fragment]', () => {
            const protocol = 'https';
            const host = 'www.my-size.com';
            const path = '/path/';
            const fragment = 'state';
            const url = protocol + '://' + host + path + '#' + fragment;

            const ub = new UrlBuilder().protocol(protocol).host(host).path(path).fragment(fragment);
            expect(ub.toString()).to.equal(url);

            const ub2 = new UrlBuilder(url);
            expect(ub2.protocol()).to.equal(protocol);
            expect(ub2.host()).to.equal(host);
            expect(ub2.path()).to.equal(path);
            expect(ub2.fragment()).to.equal(fragment);
            expect(ub2.toString()).to.equal(url);
        })

        it('[protocal]://[username]:[password]@[host]:[port][path]#[fragment]', () => {
            const protocol = 'https';
            const username = 'jiyi';
            const password = 'xdq';
            const host = 'www.my-size.com';
            const port = '9000';
            const path = '/path/';
            const fragment = 'state';
            const url = protocol + '://' + username + ':' + password + '@' + host + ":" + port + path + '#' + fragment;

            const ub = new UrlBuilder()
                .protocol(protocol).username(username).password(password)
                .host(host).port(port).path(path).fragment(fragment)
            expect(ub.toString()).to.equal(url);

            const ub2 = new UrlBuilder(url);
            expect(ub2.protocol()).to.equal(protocol);
            expect(ub2.username()).to.equal(username);
            expect(ub2.password()).to.equal(password);
            expect(ub2.host()).to.equal(host);
            expect(ub2.port()).to.equal(port);
            expect(ub2.path()).to.equal(path);
            expect(ub2.fragment()).to.equal(fragment);
            expect(ub2.toString()).to.equal(url);
        })

        it('[protocol]://[host][path]?[query] TEST#1', () => {
            const baseUrl = "https://www.my-site.com";
            const url = "https://www.my-site.com?a=1&b=1";

            const ub = new UrlBuilder(baseUrl).query({ a: "1", b: "1" });
            expect(ub.toString()).to.equal(url);

            const ub2 = new UrlBuilder(url);
            expect(ub2.query()).to.deep.equal({ a: "1", b: "1" });
            expect(ub2.toString()).to.equal(url);

        })

        it('[protocol]://[host][path]?[query] TEST#2', () => {
            const baseUrl = "https://www.my-site.com";
            const url = "https://www.my-site.com?url1=https%3A%2F%2Fwww.my-site.com+&url2=https%3A%2F%2Fwww.your-site.com";

            const ub = new UrlBuilder(baseUrl).query({ url1: "https://www.my-site.com ", url2: "https://www.your-site.com" });
            expect(ub.toString()).to.equal(url);

            const ub2 = new UrlBuilder(url);
            expect(ub2.query()).to.deep.equal({ url1: "https://www.my-site.com ", url2: "https://www.your-site.com" });
            expect(ub2.toString()).to.equal(url);
        })
    })
});
