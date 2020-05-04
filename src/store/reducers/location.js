import * as actionTypes from '../actions';


const LocationState = {
        location: [
          { id: "1", name: "Sport"  ,address: "Tal", coordinates: "105" , category : "abc" },
          { id: "2", name: "Poet"   ,address: "Bar", coordinates: "106" , category : "sad"},
          { id: "3", name: "Art"    ,address: "Yos", coordinates: "107" , category : "gas" },
          { id: "4", name: "Movies" ,address: "Sap", coordinates: "110" , category : "sfg"}, 
        ], 
        locationtoAdd:{id:"",name:"",address:"",  coordinates: "" , category : ""},
        edited: false,
        added : false,
        view:false,
}
const reducer = (state = LocationState,action) =>{

    switch(action.type)
    {
        case actionTypes.REMOVE_LOCATION : 
        const updatedLocation =  state.location.filter((location) => location.id !== action.LocationElId)
            return {
                ...state, 
                location: updatedLocation  
            }
         case actionTypes.LOCATION_FORM_EDIT_CANCEL : 
            //this.props.history.replace('/location');
             return{
                 ...state,
                 edited : !state.edited
             }
         case actionTypes.EDIT_LOCATION : 
             return{
                ...state,
                edited: true,
                locationnametoedit: action.location.name,
                locationaddresstoedit: action.location.address,
                locationcoordinatestoedit: action.location.coordinates,
                locationcategorytoedit: action.location.category,
                locationidtoedit :action.location.id,
             }
         case actionTypes.TOGGLE_EDIT_LOCATION : 
             return {
                ...state,
                edited : !state.edited
             }
         case actionTypes.EDIT_NAME_HANDLER :
            state.locationnametoedit= action.payload;
              return {...state,}
         case actionTypes.EDIT_ADDRESS_HANDLER :
            state.locationaddresstoedit= action.payload;
              return {...state,}
         case actionTypes.EDIT_COORDINATES_HANDLER :
            state.locationcoordinatestoedit= action.payload;
              return {...state,}
         case actionTypes.EDIT_CATEGORY_HANDLER : 
         state.locationcategorytoedit= action.payload;
         return {...state,}
         case actionTypes.ACCEPT_CHANGE_HANDLER_LOCATION : 
         console.log(action);
              return{
                location: state.location.map(location => location.id === action.id ? 
                    {
                        ...location,
                        name : action.name ,
                        address : action.address,
                        coordinates : action.coordinates,
                        category : action.category,

                    } : location)
              }
         case actionTypes.ADD_NAME_HANDLER :    
             state.locationnametoadd = action.payload;
             return {...state,}
        case actionTypes.ADD_ADDRESS_HANDLER :
            state.locationaddresstoadd = action.payload;
            return {...state,}
        case actionTypes.ADD_COORDINATES_HANDLER :
            state.locationcoordinatestoadd = action.payload;
            return {...state,}     
         case actionTypes.ADD_CATEGORY_HANDLER :
            state.locationcategorytoadd = action.payload;
            return {...state,}
         case actionTypes.ADD_HANDLER_LOCATION :
            return{
                ...state,
                added : !state.added
            }
         case actionTypes.ACCEPT_ADD_HANDLER_LOCATION :
            state.locationtoAdd.id = state.location.length;
            state.locationtoAdd.name = state.locationnametoadd;
            state.locationtoAdd.address = state.locationaddresstoadd;
            state.locationtoAdd.coordinates = state.locationcoordinatestoadd;
            state.locationtoAdd.category = state.locationcategorytoadd;
             return{
                 ...state,
                 location : [...state.location , state.locationtoAdd]
             }
         case actionTypes.VIEW_LOCATION :
             return{
                ...state,
                view : !state.view
             }
          case actionTypes.TOGGLE_ADD_LOCATION : 
          return{                 
              ...state,
            added : !state.added}   
        default :           
    }
    return state;

}

export default reducer;
