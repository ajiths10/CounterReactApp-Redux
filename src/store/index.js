import { createStore } from 'redux';

const countReducer = (state={ counter: 0}, action) =>{
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1,
        };
    }

    if(action.type === 'decrement') {
        return{
            counter: state.counter - 1,
        };
    }

    if(action.type === 'increment5X'){
        return {
            counter: state.counter + 5,
        };
    }

    if(action.type === 'decrement5X') {
        return{
            counter: state.counter - 5,
        };
    }

    return state;
 }

 const store = createStore(countReducer);

 export default store;