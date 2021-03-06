const redux = require('redux');

const createStore = redux.createStore;

const initialState = {

    counter : 1
}

//Reducer
const rootReducer = (state  = initialState, action) =>{
    if(action.type === 'INC_COUNTER')
    {   
        return{
            ...state,
            counter:state.counter+1
        }
    }
    if(action.type === 'ADD_COUNTER')
    {
        return{
            ...state,
            counter:  state.counter + action.value
        }
    }
}

//Store
const store = createStore(rootReducer);

//Dispatching Action
store.dispatch({type : 'INC_COUNTER'});
store.dispatch({type : 'ADD_COUNTER' , value : 10});
console.log(store.getState());


//Subscription
