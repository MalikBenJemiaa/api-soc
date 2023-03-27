const db = require("mysql2");
// const datee = require("../config/date_conf");
const connection = db.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
  password: "12345",
});
exports.leave_from_the_gym = (a) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM `mydb`.`client_present` WHERE (`client_id_client` = ?);",
      [a],
      (err, result, filds) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};
