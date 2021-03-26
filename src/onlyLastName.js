export const rokket = (contacts) => {
    const contactsLastName = [];

    contacts.map(element => {
        contactsLastName.push(element.lastName);
    });

    return contactsLastName;
}