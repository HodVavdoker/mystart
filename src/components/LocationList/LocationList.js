import React from 'react';
import classes from './LocationList.module.css';
import Location from './Location/Location';
import {withRouter} from 'react-router-dom';

const locationList = (props) =>{
return(
    <div className = {classes.LocationList}>
    <Location       name ={props.name}
                    address = {props.address}
                    coordinates = {props.coordinates}
                    category = {props.category}
                    clickedremoved = {props.removeLocation}
                    clickededited  = {props.editLocation}/>
    </div>
);

}
export default withRouter(locationList);