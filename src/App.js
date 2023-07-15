import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lapSliceSelector } from './store/reducers/lapSlice'
import { cartSliceSelector, clearItemCart } from './store/reducers/cartSlice'
import { Bar } from './store-components/Bar'
import { Item } from './store-components/Items'
import { Add1 } from './store-components/add'
import { CartCom } from './store-components/cart'
import { Box } from '@mui/material'

const App = () => {
  const laptop = useSelector(lapSliceSelector)
  const cart = useSelector(cartSliceSelector)
  const dispatch = useDispatch();
  let total = 0

  const handleCart = () => {
    dispatch(clearItemCart())
  }

  cart.forEach(element => {
    total += element.price * element.count
  });
  
    
  

  return (
    <div>

      <Bar></Bar>
      
      <Box sx={{display : 'flex'}}>

      <Box  sx={{
        border : '1px black solid',
        width : {xl : '80%' , lg : '75%' , sm : '65%'},
        height : '100vh'
        }}>
      <Box sx={{
        display : 'flex',
        width : '100%',
        flexWrap : 'wrap',
        
        }}>
        {laptop.map((element) => {
          return(
            <Item elem  = {element}  ></Item>)})}
      </Box>
      </Box>




      <Box sx={{width : {xl : '20%' , lg : '25%' , sm : '35%'},
            height : '100vh',
            }}>
      <Add1></Add1>

      <div >

      <Box sx={{mt : '40px',display :' flex' , alignItems : 'center' , justifyContent: 'space-between' , backgroundColor : 'rgb(15, 0, 75)', padding : '3px' , color : 'white'}}>
        <span style={{fontSize : '30px' , marginLeft : '10px'}}>Cart</span>
        <span>Total : Rs.{total}.00</span>
      </Box>

      <span onClick={handleCart} style={{color :'red' , float : 'right' , marginRight :'5px', cursor : 'pointer'}}>clear all</span>
      

      <Box sx={{
            width : '100%',
            mt : '20px',
            }}>
        
        {cart.map((element) => {
          return(
            <CartCom elem ={element}></CartCom>
          )
          
        })}
      </Box>

      </div>

      </Box>

      </Box>
    </div>
  )
}

export default App













































































































































