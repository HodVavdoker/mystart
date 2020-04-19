import React , {useState} from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = (props) =>{
    
    
    // const [viewState , setViewcategory] =useState({view:true});
    // console.log(viewState);

    // const viewCategory = () =>{
    //     setViewcategory({ view: false });
    //     console.log(viewState);
    

    return(

            <header className={classes.Toolbar}>
                <nav>
                    <NavigationItems link={props.link}
                                     linki= {props.linki}/>
                </nav>
                <div className={classes}>
                <button className={classes.Button}
                        onClick = {props.viewcategory}>
                        VIEW
                </button>
                <button className={classes.Button}
                        onClick = {props.addhandler}>
                        ADD
                </button>
                </div>

            </header>
    );  
}

export default toolbar;