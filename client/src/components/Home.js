import React, { Component } from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
} from "mdbreact";
import axios from "axios";

import Loading from "./Loading";
import Results from "./Results";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      input: "",
      loading: false,
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

  searchBook = (e) => {
    if (e.key === "Enter") {
      let url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${e.target.value}`;
      this.setState({ loading: true });

      axios
        .get(url)
        .then((books) => {
          this.setState({ loading: false, books: books.data.items });
        })
        .catch(console.error);
    }
  };

  render() {
    return (
      <div>
        <MDBContainer>
          {this.state.loading ? <Loading /> : null}
          <MDBRow>
            <MDBCol>
              <MDBJumbotron style={{ padding: 0, margin: 0 }}>
                <MDBCol
                  className="text-white text-center py-5 px-4 my-5"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <MDBCol style={{ padding: "100px 0 80px" }}>
                    <MDBCardTitle
                      className="h1-responsive pt-3 mb-2"
                      style={{ fontWeight: "bold" }}
                    >
                      Find your next favorite book.
                    </MDBCardTitle>
                    <p
                      className="mb-3"
                      style={{
                        fontSize: "22px",
                        maxWidth: "700px",
                        margin: "auto",
                      }}
                    >
                      Need help finding about your next reading adventure?
                      Search for a book title and get the information you need.
                    </p>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search by Title"
                      aria-label="Search"
                      name="input"
                      value={this.state.input}
                      onChange={this.onInputChange}
                      onKeyPress={this.searchBook}
                      style={{
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
        {/* {this.state.books.forEach((book) => {
          console.log(book.volumeInfo.authors);
        })} */}
        <Results books={this.state.books} />
      </div>
    );
  }
}
