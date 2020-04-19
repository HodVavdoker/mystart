import React, { useState } from "react";
import classes from "./FormAddButton.module.css";
const formaddbutton = (props) => {
  console.log(props.name);

  return (
    <>
    <div className = {classes.Form}>
      <h3>Add Your Category Please</h3>
        <input className={classes.Input}
          placeholder="Add Your Category Please"
          onChange={props.change}
        ></input>
      <div>
        <button className={classes.Button} onClick={props.toggleAdd}>Cancel</button>
        <button className={classes.Button} onClick={props.acceptChange}>Add</button>
      </div>
      </div>
    </>
  );
};

export default formaddbutton;
