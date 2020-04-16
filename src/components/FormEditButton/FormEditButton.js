import React, { useState } from "react";
import classes from "./FormEditButton.module.css";
const formeditbutton = (props) => {
  console.log(props.name);

  return (
    <>
      <h3>Edit Your Category Please...</h3>
      <p>Its Your Choice</p>
      <ul>
        <input
          placeholder="Edit Your Category Please"
          value={props.name}
          onChange={props.change}
        ></input>
      </ul>
      <div>
        <button onClick={props.toggleEdit}>Cancel</button>
        <button onClick={props.acceptChange}>Edit</button>
      </div>
    </>
  );
};

export default formeditbutton;
