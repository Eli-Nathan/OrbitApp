import { paramsAsQueryString } from './paramsAsQueryString';

describe('paramsAsQueryString', () => {
    it('returns empty string without params', () => {
        expect(paramsAsQueryString()).toBe('');
        expect(paramsAsQueryString(undefined)).toBe('');
    });
    it('returns key value pairs', () => {
        const params = {
            string: 'string',
            number: 1,
            bool: true,
            stringArray: ['a', 'b', 'c'],
            numberArray: [1, 2, 3],
        };
        const expected =
            'string=string&number=1&bool=true&stringArray=a,b,c&numberArray=1,2,3';
        expect(paramsAsQueryString(params)).toBe(expected);
    });
});
