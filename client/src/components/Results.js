import React, { Component } from "react";
import { MDBContainer, MDBCardTitle } from "mdbreact";

import Card from "./Card";

export default class Results extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCardTitle className="mb-4">Search Results:</MDBCardTitle>
        {this.props.books.map((book) => (
          <Card
            key={book.id}
            src={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
          />
        ))}
      </MDBContainer>
    );
  }
}
