import { rokket } from '../../src/onlyLastName';

describe('Compare arrays', () => { 

    test('Must be the same array', () => {

        const contacts = [
            { firstName: 'Juanito', lastName: 'Rokket' },
            { firstName: 'James', lastName: 'Bond' },
            { firstName: 'Harry', lastName: 'Potter' }
        ]

        const contactsLastName = [];

        contacts.map(element => {
            contactsLastName.push(element.lastName);
        });

        expect(rokket(contacts)).toEqual(contactsLastName);

    });
});