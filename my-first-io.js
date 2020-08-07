const fs = require("fs")
var data = fs.readFileSync(process.argv[2]);
const str = data.toString().split('\n');
console.log(str.length -1);

