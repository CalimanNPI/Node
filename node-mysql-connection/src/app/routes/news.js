const dbConnection = require("../../config/dbConnection");

module.exports = (app) => {
  const connection = dbConnection();
  app.get("/", (req, res) => {
    connection.query("SELECT * FROM news", (err, result) => {
      console.log(result);
      res.render("news/index", {
        news: result,
      });
    });
  });

  app.get("/news", (req, res) => {
    connection.query("SELECT * FROM news", (err, result) => {
      res.render("news/news", {
        news: result,
      });
    });
  });

  app.post("/news", (req, res) => {
    const { title, news } = req.body;
    connection.query(
      "INSERT INTO news SET ? ",
      {
        title,
        news,
      },
      (err, result) => {
        //callback
        res.redirect("/news");
      }
    );
  });

  app.post("/news/delete", (req, res) => {
    const { news } = req.body;
    console.log(news);
    connection.query(
      "DELETE FROM news WHERE id_news=" + news,
      (err, result) => {
        res.redirect("/news");
      }
    );
  });
};
