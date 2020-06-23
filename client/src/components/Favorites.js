import React, { Component } from "react";
import axios from "axios";
import { MDBContainer, MDBCardTitle } from "mdbreact";

import Card from "./Card";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.getSavedBooks();
  }

  componentDidUpdate() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    axios
      .get("/api/getBooks")
      .then((books) => this.setState({ books: books.data }))
      .catch(console.error);
  };

  render() {
    return (
      <MDBContainer style={{ marginTop: "60px", padding: "0 10%" }}>
        <MDBCardTitle className="mb-4">Saved Books:</MDBCardTitle>

        {this.state.books.map((book) => (
          <Card
            key={book.title}
            title={book.title}
            authors={book.authors}
            description={book.description}
          />
        ))}
      </MDBContainer>
    );
  }
}
