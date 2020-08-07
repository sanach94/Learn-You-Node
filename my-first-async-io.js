const fs = require("fs")
var data = fs.readFile(process.argv[2], function (err, data) {
    if (err) {
       return console.error(err);
    }
    const str = data.toString().split('\n');
    console.log(str.length -1);
 });


