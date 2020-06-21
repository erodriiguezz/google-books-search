import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Card = (props) => {
  let authors;

  if (props.authors) {
    authors = props.authors.map((author) => {
      return (
        <MDBCardText key={author} style={{ margin: 0, fontWeight: "bold" }}>
          {author}
        </MDBCardText>
      );
    });
  } else {
    authors = "Unknown";
  }

  return (
    <MDBCard style={{ marginBottom: "50px" }}>
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <div style={{ marginBottom: "10px" }}>{authors}</div>
        <MDBCardText>{props.description}</MDBCardText>
        <MDBBtn style={{ margin: 0 }} color="warning" href="#">
          Save
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;
