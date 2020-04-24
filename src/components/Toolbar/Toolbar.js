import React  from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import {withRouter} from 'react-router-dom';


const toolbar = (props) =>{
    return(

            <header className={classes.Toolbar}>
                <nav>
                    <NavigationItems link={props.link}
                                     linki= {props.linki}/>
                </nav>
                <div className={classes}>
                <button className={classes.Button}
                        onClick = {props.viewcategory}
                        >
                        VIEW
                </button>
                <button className={classes.Button}
                        onClick = {props.addhandler}
                        >         
                        ADD
                </button>
                </div>

            </header>
    );  
}

export default withRouter(toolbar);