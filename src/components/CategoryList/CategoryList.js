import React from 'react';
import classes from './CategoryList.module.css';
import Category from './Category/Category';

const categoryList = (props) =>
{

    return(
        <Category
                name = {props.label}
                clickedremoved = {props.removeCategory}
                clickededited  = {props.editCategory}/>
    );    
}

export default categoryList;