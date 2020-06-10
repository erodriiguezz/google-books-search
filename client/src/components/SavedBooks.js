import React, { Component } from "react";
import axios from "axios";

export default class SavedBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/getBooks")
      .then((books) => this.setState({ books: books.data }))
      .catch(console.error);
  }

  render() {
    return (
      <div>
        {this.state.books.map((book) => (
          <h1 key={book}>{book.title}</h1>
        ))}
      </div>
    );
  }
}
