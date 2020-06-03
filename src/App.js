import React, { Component } from "react";
import ContactCard from "./ContactCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <ContactCard
          name="Victor"
          mobile="2125555555"
          work="8002222222"
          email="victor@gmail.com"
        />
        <ContactCard
          name="Linda"
          mobile="7185555555"
          work="7182222222"
          email="linda@gmail.com"
        />
        <ContactCard
          name="Jessica"
          mobile="3475555555"
          work="5552222222"
          email="jess@gmail.com"
        />
      </>
    );
  }
}

export default App;