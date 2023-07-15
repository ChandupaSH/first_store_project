import { Alert, Box, Button } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemCart } from "../store/reducers/cartSlice";
import { addLap, lapSliceSelector } from "../store/reducers/lapSlice";






export const Add1 = () => {
  const id = useRef(null);
  const brand = useRef(null);
  const cpu = useRef(null);
  const ram = useRef(null);
  const price = useRef(null);
  const image = useRef(null);
  const [imageData, setImageData] = useState(null); // Use useState to store the image data

  const dispatch = useDispatch();

  const handleAddClick = () => {
    if(image.current.value) {
      const file = image.current.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      setImageData(data); // Update the imageData state
      if (id.current && brand.current && cpu.current && ram.current && price.current) {
        const item = {
          id: id.current.value,
          brand: brand.current.value,
          cpu: cpu.current.value,
          ram: ram.current.value,
          price: price.current.value,
          image: data, // Use the updated imageData state
        };
        console.log(item);

        if (item.id && item.brand && item.cpu && item.ram && item.price) {
          dispatch(addLap(item));
          id.current.value = null;
          brand.current.value = null;
          cpu.current.value = null;
          ram.current.value = null;
          price.current.value = null;
          image.current.value = null
        }
      }
    };
    reader.readAsDataURL(file);
  };
    }
  return(
            <Box sx={{
               
                }}>
        
                  <Box sx={{ ml : '10px' ,mt : '10px' }}>
                    <span style={{ fontSize : '30px'}}>Add Computer</span><br/>
                    <input ref={id} style={{marginTop : '7px', height :'30px', width : '90%', paddingLeft : '10px'    , borderRadius : '15px' , border : '1px solid black'}} placeholder='Id (number , unique id for each item)' /><br/>
                    <input ref={brand} style={{marginTop : '7px', height :'30px', width : '90%', paddingLeft : '10px' , borderRadius : '15px' , border : '1px solid black'}} placeholder='Brand eg : HP (string)' /><br/>
                    <input ref={cpu} style={{marginTop : '7px', height :'30px', width : '90%', paddingLeft : '10px'   , borderRadius : '15px' , border : '1px solid black'}} placeholder='CPU eg : i3 7gen (string)' /><br/>
                    <input ref={ram} style={{marginTop : '7px', height :'30px', width : '90%', paddingLeft : '10px'   , borderRadius : '15px' , border : '1px solid black'}} placeholder='RAM eg : 32 (number)' /><br/>
                    <input ref={price} style={{marginTop : '7px', height :'30px', width : '90%', paddingLeft : '10px' , borderRadius : '15px' , border : '1px solid black'}} placeholder='Price (number)' /><br/>
                    <span style={{paddingTop : '10px'}}>Image(jpg)</span><input ref={image}  type="file" style={{fontFamily : 'Roboto',marginTop : '10px'}}></input>
        
                    <Button variant='contained' color='primary'
                    sx={{mt : '10px',
                         width :' 100px'}}
                    onClick={handleAddClick}>Add</Button>
                  
                  </Box>
                  
              </Box>
        )
};











