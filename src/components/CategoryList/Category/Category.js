import React from 'react';
import classes from './Category.module.css';

const category = (props) =>{ 
return(
    <div className ={classes.Category}>
        <h3>Category</h3>   
        <label className={classes.Label}>{props.name}</label>
        <button  className={classes.Button}  onClick={props.clickedremoved}>Remove</button>
        <button className={classes.Button} onClick = {props.clickededited}>Edit</button>     
    </div>
    )
};
export default category;