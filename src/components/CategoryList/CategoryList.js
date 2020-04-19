import React from 'react';
import classes from './CategoryList.module.css';
import Category from './Category/Category';

const categoryList = (props) =>
{

    return(
        <div className = {classes.CategoryList}>
        <Category 
                name = {props.label}
                clickedremoved = {props.removeCategory}
                clickededited  = {props.editCategory}/>
                
        </div>
    );    
}

export default categoryList;