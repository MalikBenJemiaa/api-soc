const app = require("express");
const db1 = require("./model/enter_m");
const db2 = require("./model/leave_m");
const ser = app();
ser.get(
  "/enter/:id",
  (req, res, next) => {
    db1
      .test_exist(req.params.id)
      .then(() => {
        next();
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ status: err });
      });
  },
  (req, res) => {
    db1
      .insert_the_enter_time(req.params.id)
      .then((resultat) => {
        console.log(resultat);
      })
      .catch((err) => {
        console.log(err);
      });
    res.status(200).json({ msg: "hello world" });
  }
);
ser.get("/leave/:id", (req, res) => {
  db2
    .leave_from_the_gym(req.params.id)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(200).json({ msg: "operation affected" });
});
ser.get("", (req, res) => {
  //   console.log(formatDate(new Date()));
  res.status(200).json({ msg: "hello world" });
});
ser.listen(3000, () => {
  console.log("server run in port number 3000");
});
