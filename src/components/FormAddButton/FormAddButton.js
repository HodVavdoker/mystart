import React from "react";
import classes from "./FormAddButton.module.css";
const formaddbutton = (props) => {
  return (
    <>
    <div className = {classes.Form}>
  <h3>Add Your {props.thestate} Please</h3>
        <input className={classes.Input}
          placeholder="Add Your Catgory Please"
          onChange={props.addname}
        ></input>
      <div>
        <button className={classes.Button} onClick={props.toggleAdd}>Cancel</button>
        <button className={classes.Button} onClick={props.acceptAddHandler}>Add</button>
      </div>
      </div>
    </>
  );
};

export default formaddbutton;
