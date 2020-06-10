import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

export default class Favorites extends Component {
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
          <Card
            key={book}
            src={book.image}
            title={book.title}
            author={book.authors[0]}
            description={book.description}
          />
        ))}
      </div>
    );
  }
}
