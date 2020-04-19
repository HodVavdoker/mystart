import React, { useState } from "react";
import classes from "./FormEditButton.module.css";
const formeditbutton = (props) => {
  console.log(props.name);

  return (
    <>
    <div className = {classes.Form}>
      <h3>Edit Your Category Please</h3>
        <input className={classes.Input}
          placeholder="Edit Your Category Please"
          value={props.name}
          onChange={props.change}
        ></input>
      <div>
        <button className={classes.Button} onClick={props.toggleEdit}>Cancel</button>
        <button className={classes.Button} onClick={props.acceptChange}>Edit</button>
      </div>
      </div>
    </>
  );
};

export default formeditbutton;
