module.exports = (app) => {
  app.get("/", (req, res) => {
    res.json({ task: "add sd" });
  });
};
