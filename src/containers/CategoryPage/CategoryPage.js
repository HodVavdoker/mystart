import React, { Component } from "react";
import Auxilary from "../../hoc/Auxilary/Auxilary";
import CategoryList from "../../components/CategoryList/CategoryList";
import Modal from "../../components/Modal/Modal";
import FormEditButton from "../../components/FormEditButton/FormEditButton";
import FormAddButton from "../../components/FormAddButton/FormAddButton";
import Layout from "../../components/Layout/Layout";
import {connect} from 'react-redux'; 
class CategoryPage extends Component {
  state = {
    category: [
      { id: "1", name: "Sport" },
      { id: "2", name: "Poet" },
      { id: "3", name: "Art" },
      { id: "4", name: "Movies" },
    ],
    categorytoAdd:{id:"" ,name:""},

    edited: false,
    added : false,
    view:false,
  };

componentDidMount()
{
  if(localStorage.getItem('mycategorystate'))
  {
    this.state.category =JSON.parse(localStorage.getItem('mycategorystate'));
    this.setState({
      id : this.state.category.id,
      name : this.state.category.name,
    });
  } 
  //localStorage.getItem('mycategorystate' ,JSON.stringify( this.state.category));
}
  // function thats need to be a Ations
  removeCategory = (id) => {
    const CategoryIndex = this.state.category.findIndex((p) => {
      return p.id === id;
    });
    const category = [...this.state.category];
    category.splice(CategoryIndex, 1);
    this.setState({ category: category });
    localStorage.setItem('mycategorystate' ,JSON.stringify(this.state.category));
    console.log( localStorage.setItem('mycategorystate' ,JSON.stringify(this.state.category)));
  };
  addname = (event) => {
    let newIndex = this.state.category.length + 1;
    this.setState({ categorynametoadd: event.target.value });
    this.setState({categorytoAdd:{'id'   :newIndex,
                                  'name' :this.state.categorynametoadd}});
                                  console.log(this.state.categorynametoadd);
   // console.log(this.state.categorynametoadd);
  };
  addhandler = () =>{
               this.setState({added:!this.state.added});
  }
  acceptAddHandler = () => {
    let array = this.state.category;
//    let newIndex = this.state.category.length + 1;
//    console.log(newIndex);
//    let categorytoAddp = this.state.categorytoAdd;
//    this.setState({categorytoAdd:{'id'   :newIndex,
//                                  'name' :this.state.categorynametoadd},
//                  added:!this.state.added });
//    this.setState({category:[...array,categorytoAddp]});
//    console.log(categorytoAddp);
    this.setState({category:[...array,this.state.categorytoAdd]});
    localStorage.setItem('mycategorystate' ,JSON.stringify(array));
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
    localStorage.setItem('mycategorystate' ,JSON.stringify(array));
  };
  render() {
    let myCategoryState = localStorage.getItem('mycategorystate');
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
            thestate = "Category"
            acceptAddHandler={this.acceptAddHandler}
            toggleAdd={this.toggleAdd}
            addname = {this.addname}
            ></FormAddButton>
        </Modal>
        <Layout
                view = {this.viewCategory}
                addhandler = {this.addhandler}/> 
        {listcategory}  
      </Auxilary>
    );
  }
}

const mapStateToProps = state =>{
  return {
    categorytoAdd :state.categorytoAdd,
    category      :state.category,
    edited        :state.edited,
    added         :state.added,
    view          :state.view
  };
}
  mapDispatchtoProps = dispatch =>{
    return{
      removecategory:             () =>dispatch({type:''}),
      addname:                    () =>dispatch({type:''}),
      addhandler:                 () =>dispatch({type:''}),
      acceptAddHandler:           () =>dispatch({type:''}),
      editCategory:               () =>dispatch({type:''}),
      toggleEdit:                 () =>dispatch({type:''}),
      toggleAdd:                  () =>dispatch({type:''}),
      viewCategory:               () =>dispatch({type:''}),
      editHandler:                () =>dispatch({type:''}),
      acceptChangeHandler:        () =>dispatch({type:''}),
    };
  }


export default connect(mapStateToProps,mapDispatchtoProps)(CategoryPage);
