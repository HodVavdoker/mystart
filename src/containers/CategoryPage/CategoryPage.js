import React, { Component } from "react";
import Auxilary from "../../hoc/Auxilary/Auxilary";
import CategoryList from "../../components/CategoryList/CategoryList";
import Modal from "../../components/Modal/Modal";
import FormEditButton from "../../components/FormEditButton/FormEditButton";
import FormAddButton from "../../components/FormAddButton/FormAddButton";
import Layout from "../../components/Layout/Layout";
import {connect} from 'react-redux'; 
import * as actionTypes from '../../store/actions';
class CategoryPage extends Component {
/*  state = {
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
*/
  // function thats need to be a Ations
 /* removeCategory = (id) => {
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
  */
  render() {
  //  let myCategoryState = localStorage.getItem('mycategorystate');
    let listcategory;
 
     if(this.props.view){
      listcategory = this.props.category.map((category) => (
        <CategoryList
          key={category.id}
          name={category.name}
          label={category.name}
          editCategory={() => this.props.editCategory(category)}
          removeCategory={() => this.props.removeCategory(category.id)}
        />
      ));
    // }
      }
    return (
      <Auxilary>
        <Modal show={this.props.edited}>
          <FormEditButton
            name={this.props.edited ? this.props.categoryToEdit : ""}
            change={(event)=>this.props.editHandler(event.target.value)}
            acceptChange={()=>this.props.acceptChangeHandler(this.props.categoryToEdit , this.props.categoryToEditId)}
            toggleEdit={this.props.toggleEdit}
          ></FormEditButton>
          ></Modal>
        <Modal show = {this.props.added}>
            <FormAddButton
            thestate = "Category"
            acceptAddHandler={this.props.acceptAddHandler}
            toggleAdd={this.props.toggleAdd}
            addname = {(event)=>this.props.addname(event.target.value,this.props.category.length)}
            ></FormAddButton>
        </Modal>
        <Layout
                view = {this.props.viewCategory}
                addhandler = {this.props.addhandler}/> 
        {listcategory}  
      </Auxilary>
    );
  }
}

const mapStateToProps = state =>{
  return {
    categorytoAdd :state.cat.categorytoAdd,
    categoryToEdit: state.cat.categoryToEdit,
    categoryToEditId : state.cat.categoryToEditId,
    category      :state.cat.category,
    edited        :state.cat.edited,
    added         :state.cat.added,
    view          :state.cat.view
  };
}
  const mapDispatchtoProps = dispatch =>{
    return{
      removeCategory:             (id) =>dispatch({type:actionTypes.REMOVE_CATEGORY, CategoryElId : id }),                         // Yes
      addname:                    (value, length) =>dispatch({type:actionTypes.ADD_NAME , payload:value , length :length}),                                  // NO
      addhandler:                 () =>dispatch({type:actionTypes.ADD_HANDLER}),                                                    // Yes
      acceptAddHandler:           () =>dispatch({type:actionTypes.ACCEPT_ADD_HANDLER}),                                             // Kind off
      editCategory:               (category) =>dispatch({type:actionTypes.EDIT_CATEGORY, category:category}),                       // Yes
      toggleEdit:                 () =>dispatch({type:actionTypes.TOGGLE_EDIT}),                                                    // Yes
      toggleAdd:                  () =>dispatch({type:actionTypes.TOGGLE_ADD}),                                                     // Yes
      viewCategory:               () =>dispatch({type:actionTypes.VIEW_CATEGORY}),                                                  // Yes
      editHandler:                (value) =>dispatch({type:actionTypes.EDIT_HANDLER,payload : value}),                             // Yes
      acceptChangeHandler:        (name ,id)=>dispatch({type:actionTypes.ACCEPT_CHANGE_HANDLER , name : name , id : id}),                                           // YES 
  };
  }
export default connect(mapStateToProps,mapDispatchtoProps)(CategoryPage);
