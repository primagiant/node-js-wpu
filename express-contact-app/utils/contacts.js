const fs = require('fs');

// membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file contacts.json
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadContact = () => {
    const fileBuffer = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
}

const findContact = (name) => {
    const contacts = loadContact();
    const contact = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    return contact;
}

module.exports = { loadContact, findContact };