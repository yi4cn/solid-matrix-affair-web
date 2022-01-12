import { parseQuery, stringifyQuery } from '@/utils/url';
import { expect } from 'chai';

describe('utils.url', () => {
    describe('parseQuery', () => {
        it('normal case works', () => {
            const urlString = "a=a&b=b";
            const query = parseQuery(urlString);
            const urlString2 = stringifyQuery(query);
            expect(urlString2).to.be.equal(urlString);
        })
    })
});
