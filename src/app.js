import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/Restrurentmenu";
//import Grocery from "./components/Grocery";
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ForgotPass from "./components/ForgotPass";

// creat element using react -------------------------------------------------------

//const parent = React.createElement("div",{id:"parent"},
//React.createElement("div",{id:"child"},[
//React.createElement("h1",{id:"heading"},"hello i am in "),
//React.createElement("h2",{id:"heading"},"hello my name is deba")]),
//
//React.createElement("div",{id:"child2"},[
//          React.createElement("h1",{id:"heading"},"hello i am deba "),
//          React.createElement("h2",{id:"heading"},"hello my father name is kunja rana")])
//
//
//);
//
//
//
//
////console.log(firstname)//  object
//

//const adress = ReactDOM.createRoot(document.getElementById("name"));
//adress.render(parent)
//
//const allDetails = React.createElement("div",{id:"alldetail"},
//React.createElement("div",{id:"firstname"},[
//          React.createElement("h1",{id:"heading"},"hello my name is deba👌"),
//          React.createElement("h3",{id:"heading"},"hello i live at sripur"),
//          React.createElement("h3",{id:"heading"},"my father name is kunja rana"),
//          React.createElement("h3",{id:"heading"},"currently i am learning react ")
//])
//)
//console.log(allDetails)
//const allName = ReactDOM.createRoot(document.getElementById("name"));
//allName.render(allDetails)

// using jsx create html in js ----------------------------------------------------------

//const jsxHeading = (
//
//  <>
//    <h1 id="heading">
//      Learn create to html {"Deba" + "Rana"} in js using jsx file 🚀
//    </h1>
//    <h1 className="live">I live at sripur</h1>
//  </>
//);
//const root = ReactDOM.createRoot(document.getElementById("name"));
//root.render(jsxHeading);
//
// using ternary operator-------------------------------------------------------------

//const x = 5;
//
//const myElement = <h1 className="live">{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
//
//const add = ReactDOM.createRoot(document.getElementById('root'));
//add.render(myElement);

//using if statement-------------------------------------------------------------------

//const x = 5;
//let text = "Goodbye";
//if (x < 0) {
//  text = "Hello";
//}
//
//const myElement = <h1>{text}</h1>;
//
//const op = ReactDOM.createRoot(document.getElementById("root"));
//op.render(myElement);

//React component in js---------------------------------------------------------------

//const ame =(
//  <h1>My name is Debasish Rana</h1>
//)
//
//const Title = function() {
//  return <h1 className="heading">
//    Namaste world
//    {ame}
//    </h1>
//
//
//
//};
//
//const money = 10000
//const HeadingComponent = () =>
//<div id="heading">
//<Title />
//{money}
//
//   <h1>Hello world</h1>
//  </div>
//;

//const compo = ReactDOM.createRoot(document.getElementById("name"));
//compo.render(<HeadingComponent />);

//project food delivery -------------------------------------------------------------

const Grocery = lazy(()=>import( "./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      
      {
        path: "/grocery",      
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/loginpage",
        element: <LoginPage />,
      },
      {
        path: "/forgotpass",
        element: <ForgotPass />,
      },
      {
        path: "/restrurents/:resId",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
