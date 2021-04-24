const fs = require('fs');

// const book = {
//     title: 'Think and grow rich',
//     author: 'Napoleon Hill'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'Ronak';
user.age = 22;

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);




// console.log(data.author);

// console.log(dataBuffer.toString());