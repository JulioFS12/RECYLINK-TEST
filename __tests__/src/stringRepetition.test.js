import { rokket } from '../../src/stringRepetition';

describe('String repetition', () => {
    
    test('Strings must be equal', () => {
        const string = 'hola';
        const number = 5;

        expect(rokket(string,number)).toBe(string.repeat(number))
    })
});