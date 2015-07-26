var http = require('http'),
	fs = require('fs'),
	async = require('async'),
	path = require('path'),
	exec = require('child_process').exec,
	child,
	
	currentDir = process.cwd(),
	antFileName = "apache_ant_1.9.6.zip",
	filePath = currentDir + path.sep + antFileName;
	command = 'Unzipper.exe ' + filePath;

module.exports = {
	getWindowsPath: function () { 
		return process.env.PATH;
	},
	downloadAnt: function () { 		
		
		function doABunchOfThings(fnCallback) {
			async.series([
				// download ANT
				function(callback) {
					var file = fs.createWriteStream(antFileName),
						url = 'http://apache.cbox.biz//ant/binaries/apache-ant-1.9.6-bin.zip',
						request;
					
					console.log('please wait...');
					//attempt to download ant zip
					http.get(url, function(response) {
						response.pipe(file);
					
						response.on('end', function () {
							// if done downloading ... move to next task
							callback();
						});
					}).on('error', function(e) {
						console.log("Error while downloading apache_ant_1.9.6.zip file: " + e.message);
					});
				},
				// unzip downloaded ANT
				function(callback) {

					exec(command, function (error, stdout, stderr) {
						if (error == null) {
						  console.log('Error while trying to execute command:  ' + command);
						  console.log('Exception: ' + error);
						}
						
						//successfully unziped ANT
						callback();
					});
				},
				//delete zip
				function (callback) {
					fs.unlinkSync(filePath);
					callback();
				}
			], function(err, results) {
				fnCallback();
			});
		}
		  
		doABunchOfThings(function() {
		  console.log('DONE!!!');
		});
	},
	unzipAnt: function () {
		
	}
};