import { rokket } from '../../src/uniqueNumbers';

describe('Compare arrays', () => {

    test('The array must be the same.', () => {

        const array_one = [1, 2, 5];
        const array_two = [2, 1, 6];

        const intersection = array_one.filter( 
            element => array_two.includes(element)
        );

        expect(rokket(array_one, array_two)).toEqual(intersection);

    });
});