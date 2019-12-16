import piggy from "../porco.png";
import React from "react";

const Nav = props => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <p>
        <button onClick={props.setFiltered}>Filter Greased Porkies</button>
        <button onClick={() => props.setSorted("name")}>Sort by Name</button>
      </p>
    </div>
  );
};

export default Nav;
