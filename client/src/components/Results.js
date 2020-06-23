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
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            onClick={this.props.onClick}
            unsaved
          />
        ))}
      </MDBContainer>
    );
  }
}
