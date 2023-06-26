const fs = require('fs');
const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`;
const day = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`;

const version = `${year}.${month}.${now.getTime()}`;

const data = fs.readFileSync('package.json', 'utf8');
const packageJson = JSON.parse(data);
packageJson.version = version;
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));