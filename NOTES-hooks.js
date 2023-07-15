// <====== useReducer =======>


const reducerFunc = (state , action) => {
    if(action.type === 'setImage'){
      return action.data
    }else{
      return state
    }
  } 
  
const App = () => {

    const [state , setState] = useReducer(reducerFunc , "")

    return(
        <div>
            <input  
            value={state} type='text' placeholder='image url'
            onChange={ (e) => setState({
                type: 'setImage',
                data: e.target.value
            })}
            ></input><br/>
            
        </div>
    )
  }

// setState({
//     type: 'y',
//     data: "x"
// })

// action = object in the setState function
// need to retur the state in the reducerfunction



// --------example 2----------
// import { useReducer } from 'react';
// import './App.css';

// const reducerFunc = (state , action) => {
//   if(action.type === 'setName'){
//     return {...state ,  nameis: action.data}
//   }
//   else if(action.type === 'setImage'){
//     return {...state ,  image: action.data}
//   }
//   else if(action.type === 'setCity'){
//     return {...state ,  city: action.data}
//   }
//   else if(action.type === 'setPosition'){
//     return {...state ,  position: action.data}
//   }
//   else if(action.type === 'setArray'){
//     return {...state, dataArray: [...state.dataArray , action.data]}
//   }
//   else{
//     return state
//   }
// } 

// const App = () => {
//   const [state , setState] = useReducer(reducerFunc , {
//     nameis:'',
//     image:'',
//     city:'',
//     position:'',
//     dataArray: []
//   })

//   console.log(state.dataArray);

//   return(
//     <div>
//       <input  
//       value={state.nameis} 
//       type='text' 
//       placeholder='name'
//       onChange={ (e) => setState({
//         type: 'setName',
//         data: e.target.value
//       })}
//       ></input><br/>

//       <input  
//       value={state.image} 
//       type='text' 
//       placeholder='image'
//       onChange={ (e) => setState({
//         type: 'setImage',
//         data: e.target.value
//       })}
//       ></input><br/>

//       <input  
//       value={state.city} 
//       type='text' 
//       placeholder='city'
//       onChange={ (e) => setState({
//         type: 'setCity',
//         data: e.target.value
//       })}
//       ></input><br/>

//       <input  
//       value={state.position} 
//       type='text' 
//       placeholder='position'
//       onChange={ (e) => setState({
//         type: 'setPosition',
//         data: e.target.value
//       })}
//       ></input><br/>
      
//       <button 
//       className='b-sub'
//       onClick={(e) => setState({
//         type: 'setArray',
//         data: [state.nameis , state.image , state.city , state.position]
//       })}
//       >Submit</button>

//       <div></div>  
//     </div>
//   )
// }
// export default App;
























// <====== useRef =======>



// (1) Referencing DOM elements: useRef can be used to -
// get a reference to a DOM element in the component.

const MyComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};



// (2) Preserving values between renders: Since the -
// value stored in a ref persists across component -
// renders, you can use useRef to store values -
// that don't trigger re-renders.

const Appw = () => {
 
  const [text , settext] = useState('')
  const rcount = useRef(0)

  useEffect(() => {
    rcount.current += 1
    console.log('render.state');
  },[text])

  useEffect(() => {
    console.log('render')
  },[rcount])

  return (
    <div>
      <input type='tetx' value={text} onChange={(e) => settext(e.target.value) }></input>
      <span><h1>text :{text}</h1></span>
      <span><h1>renderings :{rcount.current}</h1></span>
    </div>
  );
};

// (3) Storing previous values or state: useRef can -
// also be used to store previous values or state. -
// Since the ref object doesn't trigger re-renders, 
// you can update its value within a useEffect hook -
// and compare it with the previous value in subsequent -
// renders.

const PreviousValueComponent = () => {
  const [value, setValue] = useState('');
  const previousValueRef = useRef('');

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
      <p>Previous Value: {previousValueRef.current}</p>
    </div>
  );
};





















// <====== useImperativeHandle =======>

// Child component
const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Expose focusInput method to parent component
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={props.onButtonClick}>Click</button>
    </div>
  );
});

// Parent component
const ParentComponent = () => {
  const childRef = useRef();

  const handleButtonClick = () => {
    // Call focusInput method of ChildComponent
    childRef.current.focusInput();
  };

  return (
    <div>
      <ChildComponent ref={childRef} onButtonClick={handleButtonClick} />
    </div>
  );
};
export default ParentComponent






















// <====== useCallback ======>

// if component rerender, then create function again
// then useeffect take it as a achange of prop function

// 1) Performance optimization:
// Preventing unnecessary function re-creation: 
// When a function is defined inside a component, 
// it is recreated on each render. This can lead to 
// unnecessary re-renders of child components that 
// depend on the function as a prop. 
// By using useCallback, you can memoize the function 
// and ensure it is only recreated when its dependencies 
// change.
const getnumbertext = React.useCallback(() => {
  return `Last Number: ${ number}`
}, [number])

useEffect(() => {
  console.log('use effect...');
}, [getnumbertext])
// in return jsx ==>   {getnumbertext()}
// return a function








// <===== useMemo =====>

// 1)Performance optimization: 
// When you have a computationally expensive function 
// or a function that is called frequently, you can use 
// useMemo to memoize the result. This ensures that 
// the function is only executed when the dependencies 
// change, and the cached result is returned otherwise.

// 2)Avoiding unnecessary re-rendering: 
// By memoizing the result of a function, you can 
// prevent unnecessary re-rendering of components. 
// If the result of the function doesn't change between 
// renders, React can skip the re-rendering process for 
// that specific component.

// 3)Memoizing complex calculations: 
// If you have a complex calculation that depends on 
// certain inputs, you can use useMemo to cache the 
// calculated value. This can be useful for expensive 
// calculations, such as sorting, filtering, or data 
// transformations.

const getnumbertext1 = React.useMemo(() => {
  return `Last Number: ${ number}`
}, [number])


useEffect(() => {
console.log('use effect...');
}, [getnumbertext1])
// return as a value ==>   {getnumbertext1}


























// <-----React chalenge 1(circles)----->

// import React, { useState, useEffect} from 'react';
// import './App.css';

// const App = () => {
//   const [x, setx] = useState(null)
//   const [y, sety] = useState(null)
//   const [circles , setcircles] = useState([])
//   const [num , setnum] = useState(0)

//   const Circle = (props , xis , yis) => {
//     const position ={
//       marginTop: `${props.yis}px`,
//       marginLeft : `${props.xis}px`,
//       position : `absolute`
//     }
//     return(
//       <div 
//           className='circle'
//           style={position}
//           >
//         </div>
//     )
//   }
  
//   const handle = (e) => {
//     setx(e.clientX)
//     sety(e.clientY)
//   }

//   useEffect(() => {
//     setnum(num + 1)
//     setcircles([...circles,{key: num , value : {x: x,y : y,}}])
//     console.log(circles);
//   }, [x,y])

//   return(
//     <div className='container'>
//       <div className='div-1' onClick={handle}>
//         {circles.map((elem ) => {
//           return(
//             <Circle xis = {elem.value.x} yis={elem.value.y} 
//                     key = {elem.key}></Circle>
//           )
//         })}
//       </div>
//       <span><h1>X : {x}</h1></span><br></br>
//       <span><h1>Y : {y}</h1></span><br></br>
//     </div>
//   )
// }

// export default App





















// <===== useContext =====>
import React, { useState, useContext } from 'react';
import { ThemeContext, themes } from './providers/index.js';
import './App.css';

const App1 = () => {

  const [theme1 , settheme1] = useState(themes.light)

  const handleclick = () => {
    settheme1(theme1 === themes.dark ? themes.light : themes.dark)
  }


  const Button = () => {
    const theme = React.useContext(ThemeContext)
    return(
      <button
      style={{height: '40px',
              width: '160px',
              padding: '10px',
              marginLeft: '10px',
              color : theme.foreground,
              borderColor: theme.foreground,
              backgroundColor: theme.background,
              border: "solid 1px"}
            }
      onClick={handleclick} >Theme Change</button>
    )
  }


  const Body = (props) => {
    const theme = React.useContext(ThemeContext)
    return(
      <div style={{backgroundColor: theme.background,
      height: "100vh"}}>{props.children}</div>
    )
  }

  const Header = () => {
    const theme = React.useContext(ThemeContext)
    return(
      <h1 style={{color: theme.foreground
        }}>
                    Theme Change</h1>
    )
  }

  return(
    <ThemeContext.Provider value={theme1}>
      
      <Body>
        <Header></Header>
        <Button></Button>
      </Body>
    </ThemeContext.Provider>
    
  )
}

