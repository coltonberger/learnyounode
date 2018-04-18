// great resource for walk through on how to complete
//https://github.com/leochilds/learnyounode-walkthrough

//1.
//console.log(process.argv);

//2.

// let result = 0;
// for(let i = 2; i < process.argv.length; i++){
//   result += Number(process.argv[i]);
// }
// console.log(result);

//3.
// const fs = require('fs')
// let lines = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1
// console.log(lines);

//4.
// const fs = require('fs')
// fs.readFile(process.argv[2], (err, data) => {
//  let lines = data.toString().split('\n').length - 1
//  console.log(lines);
// });

//5.
// const fs = require('fs')
// const path = require('path');
//
// fs.readdir(process.argv[2], function (err, list) {
//   for (let i = 0; i < list.length; i++) {
//     if (path.extname(list[i]) === '.' + process.argv[3]) {
//       console.log(list[i]);
//     }
//   }
// })

// 6.
// const fs = require('fs')
// const path = require('path');
//
// module.exports = function (dir, filterStr, callback) {
//
//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)
//
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//
//     callback(null, list)
//   })
// }

//7.
// const http = require('http')
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })

//8.
const http = require('http');
let bl = require('bl');
http.get(process.argv[2], function (response) {
  response.pipe(bl(function(err, data) {
    if (err)
      return console.log(err)
      data = data.toString()
      console.log(data.length)
      console.log(data)
  }))
})
