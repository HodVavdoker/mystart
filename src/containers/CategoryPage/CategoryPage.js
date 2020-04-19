import React, { Component } from "react";
import Auxilary from "../../hoc/Auxilary/Auxilary";
import CategoryList from "../../components/CategoryList/CategoryList";
import Modal from "../../components/Modal/Modal";
import FormEditButton from "../../components/FormEditButton/FormEditButton";
import FormAddButton from "../../components/FormAddButton/FormAddButton";


import classes from "./CategoryPage.module.css";
import Layout from "../../components/Layout/Layout";
class CategoryPage extends Component {
  state = {
    category: [
      { id: "1", name: "Sport" },
      { id: "2", name: "Poet" },
      { id: "3", name: "Art" },
      { id: "4", name: "Movies" },
    ],

    edited: false,
    added : false,
    view:false,
  };

  // function thats need to be a Ations
  removeCategory = (id) => {
    const CategoryIndex = this.state.category.findIndex((p) => {
      return p.id === id;
    });
    const category = [...this.state.category];
    category.splice(CategoryIndex, 1);
    this.setState({ category: category });
  };
  addhandler = (event) =>{
    this.setState({categorytoAdd: event.target.value,
                    added:!this.state.added });
                     
  }
  acceptAddHandler = () => {
    let array = this.state.category;
    this.setState({category:[...this.state.category,this.state.categorytoAdd]})
    
  };  
  editCategory = (category) => {
    console.log(category);
    this.setState({
      edited: true,
      categoryToEdit: category.name,
      categoryToEditId: category.id,
    });
  };

  toggleEdit = () => {
    this.setState({ edited: !this.state.edited,});
  };

  toggleAdd = () => {
    this.setState({ added: !this.state.added,});
  };
  viewCategory = () => {
    this.setState({ view: !this.state.view });
    console.log(this.state.viewview);
  };

  editHandler = (event) => {
    this.setState({ categoryToEdit: event.target.value });
  };
  acceptChangeHandler = () => {
    let array = this.state.category;

    var index = array.findIndex(
      (value) => value.id === this.state.categoryToEditId
    );

    array[index].name = this.state.categoryToEdit;
    this.setState({ category: array });
  };
  render() {
    let seecategory;
  
    let listcategory;
     if(this.state.view){
      listcategory = this.state.category.map((category) => (
        <CategoryList
          key={category.id}
          name={category.name}
          label={category.name}
          editCategory={() => this.editCategory(category)}
          removeCategory={() => this.removeCategory(category.id)}
        />
      ));
     }

    return (
      <Auxilary>
        <Modal show={this.state.edited}>
          <FormEditButton
            name={this.state.edited ? this.state.categoryToEdit : ""}
            change={this.editHandler}
            acceptChange={this.acceptChangeHandler}
            toggleEdit={this.toggleEdit}
          ></FormEditButton>
          ></Modal>
        <Modal show = {this.state.added}>
            <FormAddButton
            change={this.addHandler}
            acceptChange={this.acceptAddHandler}
            toggleAdd={this.toggleAdd}

            ></FormAddButton>
        </Modal>
        <Layout 
                viewcategory = {this.viewCategory}
                addhandler = {this.addhandler}/> 
        {listcategory}  
        <div>Buttons to show List or Not </div>
      </Auxilary>
    );
  }
}
export default CategoryPage;
