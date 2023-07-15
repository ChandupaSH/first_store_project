import { Accordion, AccordionDetails, AccordionSummary, Badge, Box, IconButton, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { cartSliceSelector, clearItemCart, deleteItemCart } from "../store/reducers/cartSlice";

export const CartCom = (props) => {
  const cart = useSelector(cartSliceSelector)
  const dispatch = useDispatch();

  
  const handleDeleteItem = () => {
   
      
      dispatch(deleteItemCart( props.elem))
    
    // cart.indexOf(props.elem)
  }



    return(
      <div>
       

        <Accordion      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          DeleteIcon = {<DeleteIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >

          <IconButton sx={{paddingTop : '0' , paddingRight : '4px'}} onClick={handleDeleteItem}>
            <DeleteIcon />
          </IconButton>

          
          <Typography sx={{marginLeft: '10px',
                           marginRight : '10px',
                           height : '22px',
                           width : '20px',
                           textAlign : 'center',
                           marginTop : '1px',
                           borderRadius : '20px',
                           backgroundColor : 'rgb(93, 93, 93)',
                           color : 'white'}}>{props.elem.count}</Typography>
          <Typography sx={{height : '20px',marginTop : '1px',}}>{props.elem.brand}..</Typography>
          <Typography sx={{height : '20px',marginTop : '1px', display: {sm : 'none',md :'block'}}}>{props.elem.cpu}....</Typography>
          <Typography sx={{height : '20px',marginTop : '1px',}}>RS.{props.elem.price}</Typography>
          
          
          

          

        </AccordionSummary>
        <AccordionDetails>
        <span>Brand : {props.elem.brand}</span><br/>
        <span>CPU : {props.elem.cpu}</span><br/>
        <span>Ram : {props.elem.ram} GB</span><br/>
        
          
        </AccordionDetails>
      </Accordion>
      </div>
    )
}