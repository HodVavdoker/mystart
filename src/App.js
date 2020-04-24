import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import './App.module.css';
import CategoryPage from './containers/CategoryPage/CategoryPage';
import LocationPage from './containers/LocationPage/LocationPage';
import {Route , Switch , Redirect} from 'react-router-dom';

class App extends Component
 {
     render(){
  return (
    <div>
      <Layout>
        <Switch>
          <Route path = "/Location"  component= {LocationPage}/>
          <Route path = "/category" exact component= {CategoryPage}/>
        </Switch>
      </Layout>
    </div>
  );
     
 }}
export default App;