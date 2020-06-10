import React, { Component } from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
} from "mdbreact";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      input: "",
    };
  }

  componentDidMount() {
    this.setState({ books: [] });
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron style={{ padding: 0, margin: 0 }}>
              <MDBCol
                className="text-white text-center py-5 px-4 my-5"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80)`,
                }}
              >
                <MDBCol className="py-5">
                  <MDBCardTitle
                    className="h1-responsive pt-3 mb-2 font-bold"
                    style={{ fontWeight: "bold" }}
                  >
                    Find your next favorite book.
                  </MDBCardTitle>
                  <p
                    className="mx-5 mb-3"
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    Don't know what to read next? Let's find you a good book.
                    Search for recommended books and see what catches your eye,
                    learn and see what people have to say about them.
                  </p>
                  <input
                    placeholder="Search"
                    name="input"
                    value={this.state.input}
                    onChange={this.onInputChange}
                    style={{
                      fontSize: "20px",
                      maxWidth: "500px",
                      margin: "20px auto",
                    }}
                  />
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
