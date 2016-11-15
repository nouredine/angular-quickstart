var path = require('path');
var _root = path.resolve(__dirname, '../');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}
exports.root = root;



// var path = require("path");
// var paths = path.resolve(__dirname, './');

// function root(args) {
// 	//ici on récupère l'argument de root fn, The arguments object is not an Array. It is similar to an Array
// 	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//	//http://stackoverflow.com/questions/30067005/how-to-spread-arguments-if-the-input-is-an-array-of-arrays-in-javascript
//   args = Array.prototype.slice.call(arguments, 0);
//   target = path.join.apply(null, [paths].concat(args));
//   return target
// }





