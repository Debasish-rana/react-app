//import render from "dom-serializer";

import Useclass from "./ClassUser";
import React from "react";
//import FnUser from "./Fnuser";
import { UserContext } from "../util/UserContext";
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
        <h1 className="text-center text-4xl p-4 m-4">This is about page</h1>
       <div className="flex flex-row justify-center mb-4">
        LoggedIn User 
        <UserContext.Consumer>
          {({logedInUser})=><h1 className="font-bold">:  { logedInUser}</h1>}
        </UserContext.Consumer>
       </div>
        <Useclass />
        {/* <FnUser /> */}
      </div>
    );
  }
}

export default About;
