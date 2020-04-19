import React from 'react';
import classes from './NavigationItems.module.css';

const navigationItems =(props) =>
{
    return(
        <ul className = {classes.NavigationItems}>
            <li className = {classes.NavigationItem}>
                <a href = {props.link}>
                Category </a>
            </li>
            
            <li className = {classes.NavigationItem}><a href = {props.linki}>
            Category1 </a>
                </li>
        </ul>
    );
}

export default navigationItems;