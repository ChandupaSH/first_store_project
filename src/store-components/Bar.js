import { Badge, Box } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import { cartSliceSelector } from "../store/reducers/cartSlice";

export const Bar = () => {
  const cart = useSelector(cartSliceSelector)
  
  let totalItem = 0
  cart.forEach(element => {
    totalItem +=  element.count
  });

    return(
      <Box
        sx={{
          width : '100%',
          height : '60px',
          backgroundColor : 'rgb(15, 0, 75)',
          display : 'flex',
          alignItems : 'center',
          justifyContent : 'space-between'
        }}>
          <span style={{color : 'white' , marginLeft : '20px' , fontSize : '30px'}}>STORE</span>
          <Badge badgeContent={totalItem} color='error' sx={{mr : '20px' }}>
            <ShoppingCartIcon sx={{color : 'white'}} />
          </Badge>
        </Box>
    )
  }