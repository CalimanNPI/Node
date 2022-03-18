module.exports = (app) => {
  app.listen(app.get("port"), () => {
    console.log("Server on por:", app.get("port"));
  });
};
