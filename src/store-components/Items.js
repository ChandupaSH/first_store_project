import { Box, Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { addItemCart, cartSliceSelector } from "../store/reducers/cartSlice";
import { useRef } from "react";
import { Scale } from "@mui/icons-material";



export const Item = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSliceSelector)
  
  

  const handleItemButton = () => {
   
    
    dispatch(addItemCart(
      {
        id : props.elem.id,
        brand : props.elem.brand,
        cpu : props.elem.cpu,
        ram : props.elem.ram,
        price : props.elem.price,
        count : 1
    }
    ))
    
  }
    return(
      <Box sx={{
        mt : '10px',
        ml : '10px',
        p : '10px',
        backgroundColor : 'rgb(228, 228, 228)',
        fontWeight : 'bold',
        borderRadius : '5px',
        transition : '0.5s',
        width : {xl : '350px' , lg : '300px' ,md : '290px'},
        height : {xl : '410px' , lg : '320px' ,md : '310px'},
        ":hover": {boxShadow: 3,
                   transform : 'Scale(1.01)',
                  backgroundColor : 'rgb(245, 245, 245)'}

        
      }}>
        <img src={props.elem.image} style={{height : '50%' , width : '100%', }}></img><br></br>
        <span>ID : {props.elem.id}</span><br/>
        <span>Brand : {props.elem.brand}</span><br/>
        <span>CPU : {props.elem.cpu}</span><br/>
        <span>Ram : {props.elem.ram} GB</span><br/>
        <span>Price : Rs.{props.elem.price}</span><br/>

        <Button 
        onClick={handleItemButton}
        variant="outlined" 
        sx={{color : 'white',
             backgroundColor : 'rgb(13, 22, 96)',
             borderRadius : '5px',
             borderColor : 'white',
             mt : '10px',
             ":hover" : {
              backgroundColor : 'rgb(59, 67, 123)'
             }}}>Add to cart</Button>
      </Box>
    )
  }








