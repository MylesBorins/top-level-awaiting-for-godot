const fetch = require('node-fetch');

function sortDate(a, b) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  if (dateA > dateB) return -1;
  else return 1;
}

const response = await fetch('https://nodejs.org/download/release/index.json');
const json = await response.json();
json.sort(sortDate);
const {version, date} = json[0];
console.log(`The latest release of node is ${version}.\n`
  + `It was released on ${date}.`);
