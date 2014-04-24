/*
=======================
Basic tools
=======================
*/
var fs = require('fs');

module.exports = {
  createFolder: function (dir) {
	if(!fs.existsSync(dir) && !(dir === 'undefined')){
		fs.mkdirSync(dir);
	}
  }
};