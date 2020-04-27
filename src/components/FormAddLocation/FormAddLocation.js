import React from "react";
import classes from "./FormAddLocation.module.css";
const formaddlocation = (props) => {
  return (
    <>
    <div className = {classes.Form}>
  <h3>Add Your {props.thestate} Please</h3>
        <input className={classes.Input}
          placeholder="Add Your Name Please"
          onChange={props.addname}
        ></input><br></br>

<input className={classes.Input}
          placeholder="Add Your Address Please"
          onChange={props.addaddress}
        ></input><br></br>

<input className={classes.Input}
          placeholder="Add Your Coordinates Please"
          onChange={props.addcoordinates}
        ></input><br></br>

<input className={classes.Input}
          placeholder="Add Your Category Please"
          onChange={props.addcategory}
        ></input>
      <div>
        <button className={classes.Button} onClick={props.toggleAdd}>Cancel</button>
        <button className={classes.Button} onClick={props.acceptAddHandler}>Add</button>
      </div>
      </div>
    </>
  );
};

export default formaddlocation;
