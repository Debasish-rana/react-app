import { useEffect, useState } from "react";
const FnUser = (props) => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("deba");
    }, 1000);
    console.log("UseEffect");

    return () => {
      clearInterval(timer);
      console.log("stop");
    };
  }, []);

  return (
    <div className="user-card">
      <h1>Name: {props.name}</h1>
      <h2>Location: {props.location}</h2>
      <h2>count {count}</h2>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        click
      </button>
    </div>
  );
};

export default FnUser;
