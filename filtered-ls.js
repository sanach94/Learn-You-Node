// var fs = require('fs');
// var path = require('path');
// var dirPath = process.argv[2];  //directory path
// var fileType = '.'+process.argv[3]; //file extension
// var files = [];
// fs.readdir(dirPath, function(err,list){
//     if(err) throw err;
//     for(var i=0; i<list.length; i++)
//     {
//         if(path.extname(list[i])===fileType)
//         {
//             console.log(list[i]); //print the file
//             files.push(list[i]); //store the file name into the array files
//         }
//     }
// });


const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
