var databaseUrl = "localhost/banking"; // "username:password@example.com/mydb"
var collections = ["users", "accounts"];
var mongojs = require("mongojs");
db = mongojs(databaseUrl, collections);
console.log(`Connected to MongoDB ${databaseUrl} successfully`);
module.exports = db;