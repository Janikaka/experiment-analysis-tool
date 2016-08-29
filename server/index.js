var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var async = require("async");
var fs = require("fs");


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lokki",
  database: "experiment"
});

function createDatabase() {
  con.query('DROP TABLE IF EXISTS Dataitem;');
  con.query('DROP TABLE IF EXISTS User;');
  con.query('DROP TABLE IF EXISTS Experimentgroup;');
  con.query('CREATE TABLE Experimentgroup (id INT NOT NULL PRIMARY KEY, name VARCHAR(40));');
  con.query('CREATE TABLE User (id INT NOT NULL PRIMARY KEY, username VARCHAR(40), experimentgroup INT, ' + 
  			'FOREIGN KEY (experimentgroup) REFERENCES Experimentgroup(id));');
  con.query('CREATE TABLE Dataitem (id INT NOT NULL PRIMARY KEY, user INT, experimentgroup INT, startDatetime TEXT, endDatetime TEXT, value INT, `key` TEXT, FOREIGN KEY (user) REFERENCES User(id));');

};

con.connect(function(err) {
	if(!err) {
		console.log("Database is connected \n");
		createDatabase();
	} else {
		console.log("Error connecting database \n");
	}
});
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());

var server = app.listen(8081, function () {
 	var host = server.address().address
  	var port = server.address().port
  	console.log("http://127.0.0.1:8081");
});
var print = function(data) {
	console.log(data);
}

app.post('/file', function(req, res) {
	var json = JSON.parse(req.body["body"]);
	var filename = json["filename"];
	var result = json["result"];
	var nestedLevel = json["nestedLevel"];
	fs.writeFile(__dirname + "/files/" + filename + ".json", JSON.stringify(result, null, '\t'), function(err) {
		if(err) {
			console.log(err);
		}
		print("File " + filename + " is ready.");
	})
	if(nestedLevel == 1 || nestedLevel == 2) {
		fs.readFile(__dirname + "/files/level1.R", 'utf8', function(err, data) {
			if(err) {
				console.log(err);
			}
			var newFile = "filename <- '" + filename + "'\n";
			newFile += data;
			fs.writeFile(__dirname + "/files/" + filename + ".R", newFile, function(err) {
				if(err) {
					console.log(err);
				}
				print("R file is ready");
				res.sendStatus(200);
			});
		});
	}
});

app.post('/', function(req, res) {
	createDatabase();
	var result = JSON.parse(req.body["body"]);
	addResultToDB(result);

	res.send({"data": "OK"});
});

app.get('/', function(req, response) {
	var level = req.get('nestedLevel');
	if(level == 1) {
		async.waterfall([getAllDataitems], function(err, res) {
			if(err) {
				console.log(err);
			}
			var result = [];
			for(var i = 0; i < res.length; i++) {
				var key = res[i].key;
				var value = res[i].value;
				var experimentgroup = res[i].experimentgroup;
				result.push({"key": key, "value": value, "experimentgroup": experimentgroup});
			}
			response.send({"data": {"dataitems": result}});
		});
	} else if(level == 2) {
		async.waterfall([getAllDataitems], function(err, res) {
			if(err) {
				console.log(err);
			}
			response.send({"data": {"dataitems": res}});
		});
	} else if(level == 3) {
		async.waterfall([getUsers], function(err, users) {
			if(err) {
				console.log(err);
			}
			async.map(users, function(user, callback) {
				con.query('SELECT * FROM Dataitem WHERE user = ' + user.id + ';', function (err, dataitems) {
					if(err) {
						console.log(err);
					}
					for(var i = 0; i < dataitems.length; i++) {
						delete dataitems[i].experimentgroup;
						delete dataitems[i].user;
					}
					user.dataitems = dataitems;
					callback(null, user);
				});
			}, function(err, result) {
				if(err) {
					console.log(err);
				}
				response.send({"data": {"users": result}});
			});
		});
	} else if(level == 4) {
		async.waterfall([getExperimentgroups], function(err, experimentgroups) {
			if(err) {
				console.log(err);
			}
			async.map(experimentgroups, function(experimentgroup, callback) {
				experimentgroup.dataitems = [];
				con.query('SELECT * FROM Dataitem WHERE experimentgroup = ' + experimentgroup.id + ';', function(err, dataitems) {
					if(err) {
						console.log(err);
					}
					for(var i = 0; i < dataitems.length; i++) {
						delete dataitems[i].experimentgroup;
						experimentgroup.dataitems.push(dataitems[i]);
					}
					callback(null, experimentgroup);
				})
			}, function(err, experimentgroups) {
				if(err) {
					console.log(err);
				}
				response.send({"data": {"experimentgroups": experimentgroups}});
			})
		});
	}
})

function getUsers(callback) {
	con.query('SELECT * FROM User;', function(err, result) {
		if(err) {
			console.log(err);
		}
		callback(null, result);
	})
}

function getExperimentgroups(callback) {
	con.query('SELECT * FROM Experimentgroup;', function(err, result) {
		if(err) {
			console.log(err);
		}
		callback(null, result);
	})
}


function getExperimentgroupIDs(callback) {
	con.query('SELECT id FROM Experimentgroup;', function (err, result) {
		if(err) {
			console.log(err);
		}
		callback(null, result);
	});
}

function addResultToDB(result) {
	for(var i = 0; i < result.experimentgroups.length; i++) {
		var experimentgroup = result.experimentgroups[i]
		addExperimentgroupToDB(experimentgroup);
		var users = experimentgroup.users;
		for(var j = 0; j < users.length; j++) {
			var user = users[j];
			addUserToDB(user, experimentgroup);
			var dataitems = user.dataitems;
			for(var k = 0; k < dataitems.length; k++) {
				addDataitemToDB(dataitems[k], experimentgroup.id);
			}
		}
	}
}



function addExperimentgroupToDB(experimentgroup) {
	con.query('INSERT INTO Experimentgroup (id, name) VALUES (' + 
		experimentgroup.id + ', "' + experimentgroup.name + '");', function (err, result) {
			if(err) {
				console.log(err);
			}
	});
}

function addUserToDB(user, experimentgroup) {
	con.query('INSERT INTO User (id, username, experimentgroup) VALUES (' + 
		user.id + ', "' + user.username + '", ' + experimentgroup.id + ');', function (err, result) {
			if(err) {
				console.log(err);
			}
	});
}

function addDataitemToDB(dataitem, experimentgroupId) {
	con.query('INSERT INTO Dataitem (id, user, experimentgroup, `key`, value, startDatetime, endDatetime) VALUES (' + 
		dataitem.id + ', ' + dataitem.user_id + ', ' + experimentgroupId + ', "' + dataitem.key + '", ' + dataitem.value + ', "' +
		dataitem.startDatetime + '", "' + dataitem.endDatetime + '");', function (err, result) {
			if(err) {
				console.log(err);
			}
	});
}

function getDataitemIDsForExperimentgroup(id, callback) {
	con.query('SELECT * FROM Dataitem WHERE experimentgroup = id;', function (err, result) {
		if(err) {
			console.log(err);
		}
		callback(null, result);
	});
}

function getAllDataitems(callback) {
	con.query('SELECT * FROM Dataitem;', function (err, result) {
		if(err) {
			console.log(err);
		}
		callback(null, result);
	});
}

function getDataitemById(id, callback) {
	con.query('SELECT * FROM Dataitem WHERE id = ' + id + ';', function(err, result) {
		if(err) {
			console.log(err);
		}
		callback(null, result);
	});
}

function getUserById(id, callback) {
	con.query('SELECT * FROM User WHERE id = ' + id + ';', function(err, result) {
		if(err) {
			console.log(err);
		}
		callback(null, result);
	});
}