import React from "react";

class Useclass extends React.Component {
  constructor(props) {
    super(props);
    //console.log("props");
    this.state = {
      useInfo:{
        //name:"Dummy",
        //location:"default",
        //avatar_url:"image.com"

      }
    };

     console.log("child constructor")
  }

  async componentDidMount() {
    console.log("child didMount")
    const data = await fetch("https://api.github.com/users/Debasish-rana");
    const json = await data.json();

this.setState({
  useInfo:json,
})

    console.log(json)
  }

componentDidUpdate(){

//this.timerr = setInterval(()=>{
//  console.log("hello world")
//}, 1000)

  //console.log("component did update")
}

componentWillUnmount(){
  //clearInterval(this.timerr)

  //console.log("component will unmountse")
}

  render() {
    console.log("child render")
    const { name, location, avatar_url } = this.state.useInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}
export default Useclass;
