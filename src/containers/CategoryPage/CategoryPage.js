import React, { Component } from "react";
import Auxilary from "../../hoc/Auxilary/Auxilary";
import CategoryList from "../../components/CategoryList/CategoryList";
import Modal from "../../components/Modal/Modal";
import FormEditButton from "../../components/FormEditButton/FormEditButton";
import classes from "./CategoryPage.module.css";
class CategoryPage extends Component {
  state = {
    category: [
      { id: "1", name: "Sport" },
      { id: "2", name: "Poet" },
      { id: "3", name: "Art" },
      { id: "4", name: "Movies" },
    ],

    edited: false,
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

  editCategory = (category) => {
    console.log(category);
    this.setState({
      edited: true,
      categoryToEdit: category.name,
      categoryToEditId: category.id,
    });
  };

  toggleEdit = () => {
    this.setState({ edited: !this.state.edited });
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
    let listcategory;
    listcategory = this.state.category.map((category) => (
      <CategoryList
        key={category.id}
        name={category.name}
        label={category.name}
        editCategory={() => this.editCategory(category)}
        removeCategory={() => this.removeCategory(category.id)}
      />
    ));
    return (
      <Auxilary>
        <Modal show={this.state.edited}>
          <FormEditButton
            name={this.state.edited ? this.state.categoryToEdit : ""}
            change={this.editHandler}
            acceptChange={this.acceptChangeHandler}
            toggleEdit={this.toggleEdit}
          ></FormEditButton>
        </Modal>
        {listcategory}
        <div>Buttons to show List or Not </div>
        <div>ListOfCategories</div>
      </Auxilary>
    );
  }
}
export default CategoryPage;
