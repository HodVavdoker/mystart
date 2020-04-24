import React from "react";
import classes from "./LocationFormEdit.module.css";
const locationformedit = (props) => {

  return (
    <>
    <div className = {classes.Form}>
      <h3>Edit The Location</h3>
      <form >
      <input 
                  className={classes.Input}
                  placeholder="Edit Your Name"
                  value = {props.name}
                  onChange={props.change}></input><br/>
        <input    
                  className={classes.Input}
                  placeholder="Edit Your Address"
                  value = {props.address}
                  onChange={props.change1}>
        </input><br/>

        <input    className={classes.Input}
                  placeholder="Edit Your Coordinates"
                  value = {props.coordinates}
                  onChange={props.change2}>
        </input><br/>
        
        <input    className={classes.Input}
                  placeholder="Edit Your Category"
                  value = {props.category}
                  onChange={props.change3}>
        </input><br/>
      </form>
        
      <div>
        <button className={classes.Button} onClick={props.locationFormEditCancel}>Cancel</button>
        <button className={classes.Button} onClick={props.acceptChange}>Edit</button>
      </div>
      </div>
    </>
  );
};

export default locationformedit;
