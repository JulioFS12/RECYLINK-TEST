import { rokket } from '../../src/longestString';

describe('Longest String', () => {
    
    test('Must returning the longest string from array', () => {

        const list = ['best', 'company', 'ever'];
        let element = '';

        list.length <= 0
            ? element = 'empty'
            : element = 'company';

        expect(rokket(list)).toBe(element);

    });

});