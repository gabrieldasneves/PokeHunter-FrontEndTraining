import React from "react";
import "./styles.css";

export function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">My to-do list</h1>
        <h2 className="subTitle">Lets do it!</h2>
      </div>
      <div className="form">
        <input type="text" />
        <button>+</button>
      </div>
      <div>
        <p>list</p>
      </div>
    </div>
  );
}
