//  <-----components----->
// 	HTML code
// 	write in a javascript function
// 	reusable code
// 	js file named with component name
// 	component name should be started with a capital letter
	
	function Main (){
		return(
			<div> content </div>
		)
	}
	export default Main


// all the component must be in div
// if not, it must be wrapped by JSX fragment
	// <></>
// REACT fragment worl as the same  
	// <Fragment></Fragment>


// in app.js we can use coponents as html tags
	// <Main></Main>

//  we can create functional components or functions outside the app component
//  no need of creating a separate JS file always to create component
	const Tet1 = (() => {
		return (
		myData.map( (elem , index) => {
			return (
			<>
			<Main nameis = {elem.nameis}
					key = {index}>
			</Main>
			</>)}))})

	function App() {
		return(
		<> <Tet1></Tet1> </>
		)
	}

// when create a function oustside the App functional-
// component, we can use it in the App component 
	{Tet1}
		
		

   












// <------properties ------->  
// in the div or <></> , we can use JS in {}
// in Main.js
	function Main (props){
		return(
			<div> content 
				{props.children}
			</div>
		)
	}
// in App.js
	<Main>
		<h1>hello</h1>
		<p>world</p>
	</Main>
// in REACT send elements as a object
// props = all the elements in the jsx tags get as a one object
// props.children = elements in the tag





// <------manual properties------->  
// in Main.js
	function Main (props , nameis){
		return(
			<div> 
				<span> { props.nameis} </span>
			</div>
		)
	}
// in App.js
	<Main nameis = "chandupa"></Main>





// <-----map function as a loop------->
// when using map function as a loop,
// need to add a key as a property to prevent error.
// we can use loop index as the key
// this need because react can not recognize ,
// elements because number of elemnts exist cause to the element looping





// <------exporting------>
myData = [{nameis : "chandupa"}, {nameis : "kamal"}]
import { Fragment, useEffect } from 'react'
// 1) 
// in MyData.js
	// export default function_or_object_name;
// in App.js
    import myData from './MyData'; 
// one item export from default, can not export more than one


// 2)
// in MyData.js
	export const myData = [{nameis : 'chandupa'}]
// in App.js
	import {myData} from './MyData'; 
// import as a object
// sevral items as a one object














// <-------- ? -------->
// if undifined the given file or object ,
// then skip the function  and dont display errors
	myData?.map( () => {
		return (<></>)
	})



// HTML , JS <---ternery operators with image tag--->
{ 
<img src={
	image? `${image}` 
	:'\public\logo192.png'
}>
</img> 
}
// if there is a value to the Image variable then pass the-
// value to the src...if not then pass the given link as -
// the value to the src



// HTML , JS <--other tags-->
{
	<span> {!nameis? `no-name` : `${nameis}`}</span>
}
// if there is no value to the name variable then -
// "no-name" pass as the value.
// if nameis has a value then it pass as the value












// <------Events on REACT------>
const tet2 = () => {
	console.log("hello");
}

{
	<button onClick = {tet2()}
			onMouseEnter = {tet2}
			onChange = {() => {console.log("hii");}}>
				click here
	</button>
	
}
// if we use like this in curlu brackets {tet2()} -
// then function is over when we start app























// <------Use State----->

// by this we can change displayed values without -
// refreshing whole page.
// use in the App component
function App() {
	const [nameis , setnameis] = useState("chandupa")
// const [var , setvar] = useState("default-value")
// setvar = function
  
	const tet2 = () => {
	  setnameis("CSH")
	  console.log(nameis);
	  // before the render..old value
	}
	console.log(nameis);
	// after the render...new value
  
	return(
	  <div>
		<button onClick = {tet2}>click here</button>
		<span>{nameis}</span>
	  </div>
	)}



// <----object as the value---->
function App() {
	const [data , setdata] = useState({
	  nameis : 'chandupa',
	  scl : "STC"
	})
  
	const tet2 = () => {
	  setdata({
		...data, scl : "ABC"
		// spread operator break object into individual values
	  })
	return(
	  <div>
		<button onClick = {tet2}>click here</button>
		<span>{data.scl}</span>
	  </div>
	)
  }}
// as default value = string , number , object , array




// <----Array as the value---->
function App() {
	const [data , setData] = useState(myData)
  
	const addPerson = () => {
		setData([
		  ...data,
		  {
			nameis: 'nick',
			age: 29,
		  }
		]);
	  };
		// adding new object
		// in a state change , it rerender the component
		// if using map method or anything like that-
		// there is 5 objects in the object array-
		// with added object above here
	return(
	  <div>
	  </div>
	)
  }









// <----without selectors---->
function App() {
	const [data, setData] = useState('');
  
	const change = (e) => {
		setData(e.target.value);
		// no need of selectors if use e parametr
	};
  
	return (
	  <div>
		  <input type='text' id='in-name' onChange={change}></input>
		  <span>{data}</span>
	  </div>
	);
  }











// <---previous value---->
const change = () => {
	setTimeout(() => {
	setData(data + 1)
	console.log(data);
  }, 2000);
};
// if click more times in the delay- not changing the value-
// of the data before refreshing

// right way
const change1 = () => {
	setTimeout(() => {
	setData((pre) => pre + 1)
	console.log(data);
  }, 2000);
};
 
// need to return 
const change3 = () => {
	setTimeout(() => {
	setData((pre) => {
	  if(pre < 1){
		return pre + 1
	  }
	})
  }, 2000);
};










// <-----direct return----->
const tet5 = () => (
	<div>
		hello
	</div>
)






// <--e-->
// set function out of the app function
	const handle = (e , setter) => {
		e.preventDefault()
		setter(e.target.value)
	}

	const App2 = () => {
		const [img , setimg] = useState('')
	
	return(
	  <div className='main-container'>
	
		  <input  value={img} type='text' placeholder='image url' 
		  onChange={(e) => handle(e , setimg)}></input>
  
		  <button onClick={() => {
			let x = {img }
			console.log(x);
			setimg(''); // clear after get inputs
		  }}>Submit</button>
  
		<div className='right'></div>
	  </div>
	)
  	}
 
  
  
  
  






	

// <------useEffect------>
useEffect(() => {
	console.log("hello");
})
// work callback function everytime when rerender any-
// component

useEffect(() => {
	console.log('hello');
}, [ x , y, z ])
// work callback function when rerender the components-
// wich use the variables(usestate) in array



// get the value of width of window and change
const [width , setwidth] = useState(window.innerWidth)

useEffect(() => {
window.addEventListener('resize', () => {
	setwidth(window.innerWidth)
})})



// cleanup
useEffect(() => {
	window.addEventListener('resize', () => {
		setwidth(window.innerWidth)
	})
	return(
		// cleanup
		window.removeEventListener('resize', () => {
			setwidth(window.innerWidth)
		})
	)
})




// example app
const App = () => {

  const [api_id , set_api_id] = useState('')
  const [data , setdata] = useState({})

  useEffect(() => {
      console.log('useEffect running..');

      const apicall = async () => {
        console.log('api call function running..');
        try {
          const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${api_id}`)
          const data = await response.json()

          if (data) {
            setdata(data)
          }

        } catch (error) {
          console.log(error)
        }
      }
      if(api_id.length > 0  && Number(api_id) > 0  && Number(api_id) <= 100){
        console.log('if condition running..');
        apicall()
      }

      return () => {
        console.log('cleanup running..');
        apicall()

      }
  }, [api_id])

  return(
    <div>
      <input 
      value={api_id} 
      onChange={(e) => {
        set_api_id(e.target.value)
        
      }} 
      type='text' 
      placeholder='enter id'>
      </input><br></br>

      {data&&(
        <div>
          <span><b>id :</b>{data.id}</span><br></br>
          <span><b>title :</b>{data.title}</span><br></br>
          <span><b>body :</b>{data.body}</span><br></br>
          <span><b>userId :</b>{data.userId}</span><br></br>
        </div>
      )}
    </div>
  )
}














// <------Routes------>
const App = () => {
	return(
	  <BrowserRouter>
		  <Routes>
			  <Route path='/' element = {<Home />} />
			  <Route path='/about' element = {<About />} />
			  <Route path='/Contact' element ={<Contact/>}/>
  
			  <Route path='/Contact/detail' element = {<ContactDetail/>}/>
			  {/* nested routes */}
			  <Route path='/contact/:id' element = {<User/>} />
			  {/* dynamic pages */}
		  </Routes>
	  </BrowserRouter>
	)
  
  }

// in User.js
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const {id} = useParams()

    useEffect(() => {
      console.log(id);
      return() => {
      }
    }, [id])
    
  return (
    <div></div>
  )
}


// <----Link---->
{
	<Link to= '/path'>Click here</Link>
	// go to path without refreshing the page
	// when use derect routes , refresh the page
}



// v6 new 
import Main from './components/Main';
import Contact from './components/Contact';
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { User } from './components/User';


const router = createBrowserRouter([
  {
    path: '/contact',
    element : <Contact></Contact>
  },
  {
    path: '/',
    element: <Main></Main>
  }
  ,
  {
    path: '/contact/:id',
    element: <User></User>
  }
])

const App = () => {
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )

}