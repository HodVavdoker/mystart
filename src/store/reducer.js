/*
import { array, object } from "prop-types"

const CategoryState = {
        category: [
          { id: "0", name: "Sport" },
          { id: "1", name: "Poet" },
          { id: "2", name: "Art" },
          { id: "3", name: "Movies" },
        ],
        categorytoAdd:{id:"" ,name:""},
    
        edited: false,
        added : false,
        view:false,
      }

const reducer = (state = CategoryState,action) =>{

    switch(action.type)
    {
        case 'REMOVE_CATEGORY' : 
            const updatedCategory =  state.category.filter((category) => category.id !== action.CategoryElId)
            return{
                ...state, 
                category: updatedCategory
            }   
        case 'ADD_NAME' : 
        console.log(action.length);
        console.log(action.payload);
           state.categorytoAdd.id = action.length;
           state.categorytoAdd.name = action.payload;
          // console.log(state.categorytoAdd.id);
           
            return{
                ...state
                //category : state.category.concat(state.categorytoAdd)
            }
        case 'ADD_HANDLER' : 
            return{
                ...state,
                added : !state.added
            }
        case 'ACCEPT_ADD_HANDLER' :
            console.log(state.categorytoAdd);
            console.log(state.category);
            return{
                ...state,
                category : [...state.category , state.categorytoAdd]
            }
            return{
                ...state,
                category : state.category.concat(state.categorytoAdd),  
            }
            
        case 'EDIT_CATEGORY' : 
            return{
                ...state,
                edited: true,
                categoryToEdit: action.category.name,
                categoryToEditId : action.category.id,
            }
        case 'EDIT_HANDLER' : 
            console.log(state.categoryToEditId + state.categoryToEdit);
            return{
                ...state,
                categoryToEdit: action.payload
            }
        case 'TOGGLE_EDIT' : 
            return{
                ...state,
                edited : !state.edited
            }
        case 'TOGGLE_ADD' :
            return{
                ...state,
                added : !state.added
            }
            case 'VIEW_CATEGORY' : 
            return{
                ...state,
                view : !state.view
            }
            case 'ACCEPT_CHANGE_HANDLER' :
                return {
                    category: state.category.map(category => category.id === action.id ? 
                        {
                            ...category,
                            name : action.name 
                        } : category)
                };
    }
    return state;
}

export default reducer;
*/