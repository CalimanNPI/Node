const connection = require("../db");

module.exports = {
  index: (req, res, next) => {
    connection.execute("SELECT * FROM employee", (err, result, fields) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(result);
      }
    });
  },
  show: (req, res, next) => {
    const { id } = req.params;
    connection.execute(
      "SELECT * FROM employee WHERE id=?",
      [id],
      (err, result, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json(result);
        }
      }
    );
  },
  create: (req, res, next) => {
    const { name, salary } = req.body;
    connection.execute(
      "INSERT INTO employee (name, salary) VALUES (?,?)",
      [name, salary],
      (err, result, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({ message: "employee created" });
        }
      }
    );
  },
  update: (req, res, next) => {
    const { name, salary } = req.body;
    const { id } = req.params;
    connection.execute(
      "UPDATE employee SET name=?, salary=? WHERE id=?",
      [name, salary, id],
      (err, result, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({ message: "employee updated" });
        }
      }
    );
  },
  deleteEmployee: (req, res, next) => {
    const { id } = req.params;
    connection.execute(
      "DELETE FROM employee WHERE id=?",
      [id],
      (err, result, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({ message: "employee deleted" });
        }
      }
    );
  },
  updateProcedure: (req, res, next) => {
    const { name, salary } = req.body;
    const { id } = req.params;
    const query = `
      SET @id = ?;
      SET @name = ?;
      SET @salary = ?;
      CALL employeeAddOrEdit(@id, @name, @salary);
    `;
    connection.execute(
      "CALL employeeAddOrEdit(?,?,?)",
      [id, name, salary],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "Employee Updated" });
        } else {
          console.log(err);
        }
      }
    );
  },
};
