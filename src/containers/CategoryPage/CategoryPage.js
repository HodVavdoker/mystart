import React , { Component } from "react";
import Auxilary from '../../hoc/Auxilary/Auxilary';
import CategoryList from '../../components/CategoryList/CategoryList';
import Modal from '../../components/Modal/Modal';
import FormEditButton from '../../components/FormEditButton/FormEditButton';
import classes from './CategoryPage.module.css';
class CategoryPage extends Component{

    state = {
        category:[{id:'1',name :'Sport'},
                  {id:'2',name :'Poet'},
                  {id:'3',name :'Art'},
                  {id:'4',name :'Movies'}],

                  edited : false,
    }


// function thats need to be a Ations
removeCategory = (id) =>{
    const CategoryIndex = this.state.category.findIndex(p =>{
        return p.id === id;});
    const category = [...this.state.category];
    category.splice(CategoryIndex,1);
    this.setState({category: category});
}

editCategory=() =>{
    this.setState({edited:true});
}


    render(){

        let listcategory;
        listcategory = this.state.category.map(category => (
                <CategoryList
                    key={category.id}
                    name={category.name}
                    label={category.name}
                    editCategory={this.editCategory}
                    removeCategory= {()=>this.removeCategory(category.id)}
                    />))
        return(
            <Auxilary>
                <Modal show = {this.state.edited}>
                    <FormEditButton></FormEditButton>
                </Modal>
              {listcategory}
              <div>Buttons to show List or Not </div>
              <div>ListOfCategories</div> 
            </Auxilary>
        );
    }
}
export default CategoryPage;