import React from "react";
import Auxilary from "../../hoc/Auxilary/Auxilary";
import classes from "./Layout.module.css";
import Toolbar from '../Toolbar/Toolbar';
const layout = (props) => (
  <Auxilary >
    <Toolbar 
             addhandler = {props.addhandler}
             viewcategory = {props.viewcategory}
             link = "/category"
             linki = "/location"/>
    <main className={classes.Content}>{props.children}</main>
  </Auxilary>
);
export default layout;
