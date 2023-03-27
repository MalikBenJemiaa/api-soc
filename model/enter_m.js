const db = require("mysql2");
const datee = require("../config/date_conf");
const connection = db.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
  password: "12345",
});

// simple query
exports.insert_the_enter_time = (a) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO `mydb`.`client_present` (`time_enter`, `client_id_client`) VALUES (?,?);",
      [datee.formatDate(new Date()), a],
      (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};
exports.test_exist = (a) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM mydb.client where mydb.client.id_client=?;",
      [a],
      (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          if (results.length == 0) {
            reject("the client is not exist");
          } else {
            resolve(true);
          }
        }
      }
    );
  });
};

// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
