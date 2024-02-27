const url = require('url');
const urlString = 'http://www.company.com:81/a/b/c.html?user=Alice&year=2008#p2';
const parsedUrl = url.parse(urlString, true);
// const parsedUrl = url.parse(urlString, false);

// console.log(parsedUrl);
// console.log(parsedUrl.pathname);
console.log(parsedUrl.query.user);
// console.log(parsedUrl.path);
// console.log(parsedUrl.host);
