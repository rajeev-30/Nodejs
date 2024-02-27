const queryString = require('querystring');

// const queryString = 'foo=bar&baz=qux';
const parsedQuery = queryString.parse(queryString);

console.log(parsedQuery);