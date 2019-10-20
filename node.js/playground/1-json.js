const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = 'Joro';
data.age = '18';

const userJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', userJSON);
