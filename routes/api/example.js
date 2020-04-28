const Example = require("../../models/example.model");

module.exports = function (app) {
  app.get("/api/getExamples", function (req, res) {
    Example.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(console.error);
  });

  app.post("/api/addExample", (req, res) => {
    const name = req.body.name;
    const description = req.body.description;

    const newExample = new Example({
      name,
      description,
    });

    newExample
      .save()
      .then((response) => res.json(response))
      .catch(console.error);
  });

  app.delete("/api/deleteExample/:id", (req, res) => {
    Example.deleteOne({ _id: req.params.id })
      .then(() => res.json("Example deleted."))
      .catch(console.error);
  });
};
