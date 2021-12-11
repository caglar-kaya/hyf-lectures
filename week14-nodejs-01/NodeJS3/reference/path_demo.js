const path = require('path');

console.log(__filename);
// /Users/hackyourfuture/Desktop/hyf-lectures/
// week14-nodejs-01/NodeJS3/reference/path_demo.js

console.log(path.basename(__filename)); // path_demo.js

console.log(path.dirname(__filename));
// /Users/hackyourfuture/Desktop/hyf-lectures/
// week14-nodejs-01/NodeJS3/reference

console.log(path.extname(__filename)); // .js

console.log(path.parse(__filename));
// {
//   root: '/',
//   dir: '/Users/hackyourfuture/Desktop/hyf-lectures/week14-nodejs-01/NodeJS3/reference',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo'
// }

console.log(path.parse(__filename).base); // path_demo.js

console.log(path.join(__dirname, 'test', 'hello.html'));
// /Users/hackyourfuture/Desktop/hyf-lectures/week14-nodejs-01/NodeJS3
// /reference/test/hello.html
