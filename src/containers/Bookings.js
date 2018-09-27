import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";

// import FakeBookings from '../data/fakeBookings.json';
// import allBookings from "../data/fakeBookings.json";
export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = { bookingsToDisplay: [], isLoading: true };

    this.updateBookingsToDisplay = this.updateBookingsToDisplay.bind(this);
    this.updateBookingsToDisplay2 = this.updateBookingsToDisplay2.bind(this);
  }
  //`http://localhost:3000/api/reservations/`
  //`https://mire-hub.glitch.me/`
  componentDidMount() {
    console.log("beforeFetch");
    fetch(`http://localhost:3000/api/reservations/`, {
      // mode: "no-cors",
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
      .then(res => {
        console.log("before res.json");
        console.log("res");
        console.log(res);
        console.log("res.body");
        console.log(res.body);
        return res.json();
      })
      .then(data => {
        console.log("data");
        console.log(data);
        if (data) {
          this.setState({ isLoading: false, bookingsToDisplay: data });
        } else console.log("data was undifiend");
      })
      .catch(error => console.log(error));
  }

  updateBookingsToDisplay = input => {
    this.setState({
      bookingsToDisplay: this.state.bookingsToDisplay.filter(
        x => x.id === parseInt(input, 10)
      )
    });
  };

  updateBookingsToDisplay2 = input => {
    this.setState({
      bookingsToDisplay: this.state.allBookings.filter(
        x => x.firstName + " " + x.surname === input
      )
    });
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search
            onSearchClicked={this.updateBookingsToDisplay}
            onSearchClickedByName={this.updateBookingsToDisplay2}
          />
          {/* <Results results={this.state.results} /> */}
          <Results results={this.state.bookingsToDisplay} />
        </div>
      </div>
    );
  }
}
