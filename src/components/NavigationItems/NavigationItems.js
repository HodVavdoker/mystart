import React from 'react';
import classes from './NavigationItems.module.css';
import {NavLink} from 'react-router-dom';

const navigationItems =(props) =>
{
    return(
        <ul className = {classes.NavigationItems}>
            <li className = {classes.NavigationItem}>
                <NavLink 
                    to = {props.link}
                    activeClassName = {classes.active}>
                   Category  </NavLink> 
                   </li>
            
            <li className = {classes.NavigationItem}>
                <NavLink to = {props.linki}
                         activeClassName = {classes.active}>Location</NavLink>
            </li>
        </ul>
    );
}

export default navigationItems;