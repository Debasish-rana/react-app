//import render from "dom-serializer";
import Useclass from "./ClassUser";
import React from "react";
import FnUser from "./Fnuser";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("Parent constructor");
  }

   componentDidMount() {
    //console.log("Parent didMount");
    
  }

  render() {
    //console.log("parent render");
    return (
      <div>
        <h1>This is about page</h1>
        <h3> </h3>
        <Useclass
          name={"Debasish Rana(class-Based)"}
          location={"Plalashchabri, sripur"}
        />
         <FnUser />
      </div>
    );
  }
}

export default About;
