import React from 'react';
import classes from './Location.module.css';


const location = (props) =>{

    return(
        <div className ={classes.Location}>
        <h3>Location</h3>   
<ul>
        <div>
        <label className ={classes.Label}>{ "Name:   " + props.name}</label>
        </div>
    
        <div>
        <label className ={classes.Label}>{"Address:   " + props.address}</label>
        </div >
    
        <div>
        <label className ={classes.Label}>{ "Coordinates:   " +props.coordinates}</label>
        </div>

        <div>
        <label className ={classes.Label}>{"Category:    " + props.category}</label>
        </div>
        </ul>
        <button  className={classes.Button}  onClick={props.clickedremoved}>Remove</button>
        <button className={classes.Button} onClick = {props.clickededited}>Edit</button>     
    </div>
    );
}

export default location;