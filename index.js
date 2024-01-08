const contacts = require("./contacts");

async function get() {
    const array = await contacts.removeContact("ar3v_vb7UBrAClzC2DCCs");

console.log(array);
}

get();

const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts()
      return console.log(allContacts);

    case 'get':
      const contactById = await contacts.getContactById(id)
      return console.log(contactById);

    case 'add':
          const addedContact = await contacts.addContact(name, email, phone);
      return console.log(addedContact);
   

    case 'remove':
          const removedContact = await contacts.removeContact(id);
            return console.log(removedContact);
;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);