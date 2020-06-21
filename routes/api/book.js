const Book = require("../../models/book.model");

module.exports = function (app) {
  app.get("/api/getBooks", function (req, res) {
    Book.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(console.error);
  });

  app.get("/api/getBook/:id", function (req, res) {
    Book.findOne({ _id: req.params.id })
      .then((data) => {
        res.json(data);
      })
      .catch(console.error);
  });

  app.post("/api/addBook", (req, res) => {
    const title = req.body.title;
    const authors = req.body.authors;
    const description = req.body.description;
    const link = req.body.link;

    const newBook = new Book({
      title,
      authors,
      description,
      link,
    });

    newBook
      .save()
      .then((response) => res.json(response))
      .catch(console.error);
  });

  app.delete("/api/deleteBook/:id", (req, res) => {
    Book.deleteOne({ _id: req.params.id })
      .then(() => res.json("Book deleted."))
      .catch(console.error);
  });
};
