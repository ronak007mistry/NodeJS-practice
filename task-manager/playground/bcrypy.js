const bcrypt = require('bcrypt');

const myFunction = async() => {
    const password = 'Zerocool123';
    const hashedPassword = await bcrypt.hash(password, 8);
    console.log(password);
    console.log(hashedPassword);

    const ismatch = await bcrypt.compare('zerocool123', hashedPassword);
    console.log(ismatch);
}

myFunction();