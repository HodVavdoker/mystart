import React, { Component,useState } from 'react';
import Layout from './components/Layout/Layout';
import './App.module.css';
import CategoryPage from './containers/CategoryPage/CategoryPage';

class App extends Component
 {
     render(){
  return (
    <div>
      <Layout>
        <CategoryPage/>
      </Layout>
    </div>
  );
}
}

export default App;
