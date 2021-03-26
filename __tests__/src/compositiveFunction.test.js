import { rokket } from '../../src/compositiveFunction';

describe('Compositive function', () => {

    test('Must return a multiplication result', () => {

        const param1 = 2, param2 = 5, param3 = 3;
        const result = param1 * param2 * param3;
        console.log(result);
        expect(rokket(param1)(param2)(param3)).toEqual(result)
        
    });

});