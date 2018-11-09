const request = require('request');

function sortDate(a, b) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  if (dateA > dateB) return -1;
  else return 1;
}

request('https://nodejs.org/download/release/index.json', {
  json: true
}, function (error, response, body) {
  if (error) {
    console.error(error);
    return
  }
  body.sort(sortDate);
  const {version, date} = body[0];
  console.log(`The latest release of node is ${version}.\n`
    + `It was released on ${date}.`);
});
