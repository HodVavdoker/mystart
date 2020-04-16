import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Category.module.css';

const category = (props) =>{ 
return(
    <div>
        <h3>Category</h3>   
        <label className={classes.Label}>{props.name}</label>
        <button onClick = {props.clickedremoved}>Remove</button>
        <button onClick = {props.clickededited}>Edit</button>     
    </div>
    )
};
export default category;