var mysql = require("../node_modules/mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lokki",
    database: "experiment"
});
exports.launchDB = function () {
    console.log("DB launched");
};
//# sourceMappingURL=db.js.map