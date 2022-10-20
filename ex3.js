const fs = require('fs');
let route = fs.readFileSync(process.argv[2]);
const str = route.toString().split('\n').length -1;
console.log(str);


