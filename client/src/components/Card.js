import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const Card = (props) => {
  return (
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={props.src} waves />
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>{props.author}</MDBCardText>
          <MDBCardText>{props.description}</MDBCardText>
          <MDBBtn href="#">Save</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Card;
