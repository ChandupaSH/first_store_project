// <======  REACT REDUX ======>

// 1. create a folder in source -> Redux-store
// 2. create a js file in it -> store.js
// 3. create a folder in it -> reducers
// 4. create a js file in it -> numbers.js
// 5. in numbers.js

// create the defaul object
const initialState = {
    number: 0, 
}
// create reducer function
export const rootReducer = (state = initialState, action) => {
    if(action.type === 'xx'){
        return {...state , number : action.payload}
    }   
}// action destructoring action = {type , payload}

// 6. in store.js
// create a store named store
export const store = createStore(rootReducer);

// 7. in App.js
import { useDispatch, useSelector } from 'react-redux';
import store from './REDUX-store/store';
import { useState } from 'react';

const App = () => {
    // get the store
    const number = useSelector(store_ => store_.number)

    // same to the setstate- change the state
    const dispatch = useDispatch()
  return (
    <div>
        {number}

        <button onClick={() => {
            dispatch({type: 'xx' ,payload : 3 })
        }}></button>

    </div>
  )
}
export default App


















// <===== IMMER =====>

// use with objects
const obj = {
  name : 'chandupa',
  city : 'matale',
  position : 'web developer',
  address : {
    add1 : 'no:23',
    add2 : 'kandy'
  }
}
// const objcopy = {...obj , address : {...obj.address, add1 : 'no:25'}  }
const objcopy = produce(obj , (copy) => {
  copy.address.add1 = 'no:65'
  copy.country = 'sri lanka'
})
// easier to change the values and add new key value-
// pairs than spread method


// use with arrays
const Array = [1,2,3,4,5,6,7,8]

const ArrayCopy = produce(Array , (copy) => {
  copy[2] = {obj}
})


// with react
const App2 = () => {
  const [state , setstate] = useState(obj)

  return (
    <div>
      <span>{state.address.add1}</span>

      <button onClick={() => {
        setstate(produce( (copy) => {
          copy.address.add1 = 'no:90'
        }))
      }}>Click</button>
      
    </div>
  )
}



















// <===== REDUX Toolkit =====>



// 1. create a slice xSlice.js
// we can create lots of Slices
const initialStateq = {
    count : 0
  }
  const counterSlice = createSlice({
    name: 'counter',
    initialState : initialStateq,
    reducers: {
      increment: (state , action) => {state.count += action.payload},
      decrement: (state , action) => {state.count -= action.payload},
    },
  });
  export const { increment, decrement } = counterSlice.actions;
//export default counterSlice.reducer;


// 2. create the store --> store.js
// all the slices bind into a one reducer and 
// create a one store
const store = configureStore({
    reducer: {
      counter: counterReducer,
      x : xreducer,
      y : yreducer
    },
  });
// export default store;


// 3. wrap the app from the provider(index.js)
<Provider store={store}>
    <App />
 </Provider>


//  4. in App.js
const App1 = () => {
    const counter = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
      <div>
        <h2>Counter: {counter}</h2>
        <button 
          onClick={() => {dispatch(increment("x"))}}
        >Increment</button>
      </div> 
    )
  }
//  "x" = action.payload


// 5. need uniqe names for reducer actions.
// if there is defferent slices uncluding same actions
// names , all the actions will be triger


// 6. function in useSelector
// we can create it in the sclice file and export
export const numberSliceSelector = (state) => state.counter.count
// and use in app.js
const counter = useSelector(numberSliceSelector);








