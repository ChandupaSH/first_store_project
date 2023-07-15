//  <==== ToDo list ====>

// import React, { useRef, useState } from 'react';
// import './App.css';


// const App = () => {
//   let date = new Date()
//   let hour = date.getHours()
//   let min = date.getMinutes()
//   let year = date.getFullYear()
//   let day = date.getDate()
//   let month = date.getMonth()
//   let sec = date.getSeconds()

//   let timestate = `Date:${day}/${month}/${year} Time:${hour}:${min}:${sec}`
//   const [text , settext] = useState('')
//   const [data , setdata] = useState([])
//   const [time , settime] = useState(timestate)
//   const taskRef = useRef(0)


//   const handle = () => {

//     if(text !== ''){
//       settime(timestate)
//       taskRef.current += 1
//       setdata((prev) => {
//         return(
//           [...prev , {text : text , timeis : time }]
//         )
//       })
//     }
//     settext('')
//   }


//   const handledelete = (element) => {
//     taskRef.current -= 1
//     const index = data.indexOf(element);
//     setdata((prev) => {
//       return [...prev.slice(0, index), ...prev.slice(index + 1)]
//     });
//   };


//   const Do = (props) => {
//     return(
//       <div className='div-do'>
//         <span className='time'>{props.timeprop}</span><br/> 
//         <div className='wrap'>
//           <textarea 
//             readOnly
//             className='text-do'>{props.proptext}</textarea>
//           <button 
//             className='delete-b'
//             onClick={() => handledelete(props.element)}>Delete</button>  
//         </div>
//       </div>
//     )
//   }


//   const Bar = () => {
//     return(
//       <div className='div-bar'>
//         <span>Remaining tasks : {taskRef.current}</span>
//       </div>
//     )
//   }


//   return(
//     <div className='body'>

//       <div className='container'>
//         <h2>Enter the task</h2><br/>
//         <div className='div-text'>
//           <textarea 
//             className='text'
//             value={text}
//             onChange={(e) => {settext(e.target.value)}}>
//           </textarea>
//           <button className='add-b' onClick={handle}>Add</button>
//         </div>
//       </div>

//       <Bar></Bar>

//       <div>
//         {data.map((elem) => {
//           return(
//             <Do proptext = {elem.text} element = {elem} timeprop = {elem.timeis}></Do>
//           )
//         })}
//       </div>
      
//     </div>
//   )
// }

// export default App


// *{
//     margin: 0;
//     padding: 0;
//     font-family: 'Roboto';
// }
// .body{
//     margin-top: 0;
//     height: 100vh;
//     background-color: rgb(255, 255, 255);
// }
// .container{
//     width: 90%;
//     height: 150px;
//     background-color: rgb(205, 170, 126);
//     margin-left: 5%;
//     margin-top: 2%;
//     border-radius: 20px;
//     transition: 0.2s;
// }

// .container:hover{
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
// }

// .container > h2{
//     position: relative;
//     top: 10px;
//     left: 20px;
//     color: rgb(78, 78, 78);
// }

// .div-text{
//     display: flex;
//     align-items: center;
//     border: none;
// }

// .text{
//     width: 80%;
//     position: relative;
//     left: 10px;
//     height: 80px;
//     padding: 10px;
//     border-radius: 10px;
//     font-size: 20px;
// }

// .add-b{
//     position: relative;
//     left: 20px;
//     height: 30px;
//     width: 80px;
//     border-radius: 10px;
//     border: solid 1px rgb(124, 62, 17);
//     background-color: rgb(205, 187, 163);
//     color: rgb(80, 23, 0);
//     font-size: 17px;
// }

// .add-b:hover{
//     transition: 0.2s;
//     transform: scale(1.04);
//     background-color: rgb(255, 217, 165);
//     border-color: rgb(149, 121, 98);
//     color: rgb(0, 0, 0);
// }
// .add-b:active{
//     transition: 0.2s;
//     transform: translateY(2px);

// }



// .div-do{
//     align-items: center;
//     width: 90%;
//     height: auto;
//     background-color: rgb(255, 176, 73);
//     margin-left: 5%;
//     margin-top: 10px;
//     border-radius: 20px;
//     transition: 0.2s;
// }
// .div-do:hover{
//     transform: scale(1.01);
//     box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
// }

// .wrap{
//     align-items: center;
//     display: flex;
// }

// .text-do{
//     height: auto;
//     width: 80%;
//     margin: 10px;
//     border-radius: 10px;
//     padding: 3px;
//     font-size: 18px;
//     background-color: rgb(167, 221, 231);
//     color: rgb(0, 0, 0);
// }

// .delete-b{
//     height: 30px;
//     width: 80px;
//     border-radius: 10px;
//     border: solid 1px rgb(124, 62, 17);
//     background-color: rgb(205, 187, 163);
//     color: rgb(80, 23, 0);
//     font-size: 17px;
// }
// .delete-b:hover{
//     transition: 0.2s;
//     transform: scale(1.04);
//     background-color: rgb(255, 217, 165);
//     border-color: rgb(149, 121, 98);
//     color: rgb(0, 0, 0);
// }

// .time{
//     position: relative;
//     top: 5px;
//     margin-left: 15px;
//     font-size: 15px;
// }




// .div-bar{
//     margin-bottom: 50px;
//     align-items: center;
//     display: flex;
//     width: 90%;
//     height: 30px;
//     background-color: rgb(245, 192, 123);
//     margin-left: 5%;
//     margin-top: 10px;
//     border-radius: 20px;
//     transition: 0.2s;
// }
// .div-bar:hover{
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
// }

// .div-bar span {
//     color: rgb(24, 0, 162);
//     padding-left: 10px;
// }


























// <===== Maretial UI-social media app====>

// import React, { useState } from 'react';
// import './App.css';
// import { AppBar, Avatar, AvatarGroup, Badge, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, Container, Divider, IconButton, ImageList, ImageListItem, InputBase, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Switch, Toolbar, Typography  } from '@mui/material';
// import PetsIcon from '@mui/icons-material/Pets';
// import MailIcon from '@mui/icons-material/Mail';
// import HomeIcon from '@mui/icons-material/Home';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import ArticleIcon from '@mui/icons-material/Article';
// import GroupIcon from '@mui/icons-material/Group';
// import StoreIcon from '@mui/icons-material/Store';
// import PersonIcon from '@mui/icons-material/Person';
// import SettingsIcon from '@mui/icons-material/Settings';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ModeNightIcon from '@mui/icons-material/ModeNight';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import { ExpandMore } from '@mui/icons-material';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import { Posts } from './components/Posts';

// const App = () => {
//     const [open , setopen] = useState(false)

//     const Search = () => {
//         return(
//             <div 
//                 style={{backgroundColor: 'white',
//                         padding: "0 10px",
//                         borderRadius: 5,
//                         width: '40%' }}>
//                 search
//             </div>
//         )
//     }
//     const Icons = () => {
//         return(
//             <Box sx={{display: {xs: 'none' , sm: 'flex'  },
//                       alignItems: 'center',
//                       gap: '20px'}}>
//                 <Badge badgeContent={4} color="error">
//                     <MailIcon  />
//                 </Badge>

//                 <Badge badgeContent={2} color="error">
//                     <NotificationsIcon  />
//                 </Badge>

//                 <Avatar 
//                     src='D:\WEB_DEVELOPING\FRAMEWORKS\REACT\course-01\code-01\firstapp\src\avatar1.jpg'
//                     onClick = {e => {setopen(true)}}></Avatar>

//             </Box>
//         )
//     }
//     const Userbox = () => {
//         return(
//             <Box sx={{display: {xs: 'flex' , sm: 'none'  },
//                       alignItems: 'center',
//                       gap: '10px'}}>
        
//                 <Avatar 
//                     onClick = {e => {setopen(true)}}
//                     src='D:\WEB_DEVELOPING\FRAMEWORKS\REACT\course-01\code-01\firstapp\src\avatar1.jpg'></Avatar>

//                 <Typography variant='span'>John</Typography>

//             </Box>
//         )
//     }

//     const Menucom = () => {
//         return(
//             <Box>
//                 <Menu
//                     id="demo-positioned-menu"
//                     aria-labelledby="demo-positioned-button"
//                     open={open}
//                     onClose={e => {setopen(false)}}
//                     anchorOrigin={{
//                         vertical: 'top',
//                         horizontal: 'right',
//                     }}
//                     transformOrigin={{
//                         vertical: 'top',
//                         horizontal: 'right',
//                     }}
//                 >
//                 <MenuItem >Profile</MenuItem>
//                 <MenuItem >My account</MenuItem>
//                 <MenuItem >Logout</MenuItem>
//                 </Menu>
//             </Box>
//         )
//     }

//     const Navbar = () => {
        
//         return(
//             <AppBar position='sticky'>

//                 <Toolbar 
//                     sx={{display: "flex",
//                          justifyContent: "space-between"
//                          }}>

//                     <Typography
//                         variant='h6'
//                         sx={{display:{xs:'none',sm:'block'}}}
//                     >LAM DEV</Typography>

//                     <PetsIcon sx={{display:{xs:'block',sm:'none'}}}/>

//                     <Search>
//                         <InputBase placeholder='Search...'/>
//                     </Search>

//                     <Icons 
//                         sx ={{display:{xs: 'none' , sm: 'flex'  },
//                               }}
//                         ></Icons>

//                     <Userbox></Userbox>

//                     <Menucom></Menucom>

//                 </Toolbar>
//             </AppBar>
//         )
//     }













//     const Sidebar = () => {
//         return(
//             <Box
//                 flex={1}
//                 p={2}
//                 sx={{display : {xs : "none",
//                                 sm : "block"}}}>
//                 <Box position='fixed'>
                
//                 <List>

//                     <ListItem disablePadding>
//                         <ListItemButton component= "a" href='#home'>
//                             <ListItemIcon>
//                             <HomeIcon/>
//                             </ListItemIcon>
//                             <ListItemText primary="Home" />
//                         </ListItemButton>
//                     </ListItem>

//                     <ListItem disablePadding>
//                         <ListItemButton component= "a" href='#home'>
//                             <ListItemIcon>
//                             <ArticleIcon/>
//                             </ListItemIcon>
//                             <ListItemText primary="Pages" />
//                         </ListItemButton>
//                     </ListItem>

//                     <ListItem disablePadding>
//                         <ListItemButton component= "a" href='#home'>
//                             <ListItemIcon>
//                             <GroupIcon/>
//                             </ListItemIcon>
//                             <ListItemText primary="Groups" />
//                         </ListItemButton>
//                     </ListItem>

//                     <ListItem disablePadding>
//                         <ListItemButton component= "a" href='#home'>
//                             <ListItemIcon>
//                             <StoreIcon/>
//                             </ListItemIcon>
//                             <ListItemText primary="Marketplace" />
//                         </ListItemButton>
//                     </ListItem>

//                     <ListItem disablePadding>
//                         <ListItemButton component= "a" href='#home'>
//                             <ListItemIcon>
//                             <PersonIcon/>
//                             </ListItemIcon>
//                             <ListItemText primary="Friends" />
//                         </ListItemButton>
//                     </ListItem>

//                     <ListItem disablePadding>
//                         <ListItemButton component= "a" href='#home'>
//                             <ListItemIcon>
//                             <SettingsIcon/>
//                             </ListItemIcon>
//                             <ListItemText primary="Settings" />
//                         </ListItemButton>
//                     </ListItem>
                   
//                     <ListItem disablePadding>
//                         <ListItemButton component= "a" href='#home'>
//                             <ListItemIcon>
//                             <AccountBoxIcon/>
//                             </ListItemIcon>
//                             <ListItemText primary="Profile" />
//                         </ListItemButton>
//                     </ListItem>

//                     <ListItem disablePadding>
//                         <ListItemButton component= "a" href='#home'>
//                             <ListItemIcon>
//                             <ModeNightIcon/>
//                             </ListItemIcon>
//                            <Switch></Switch>
//                         </ListItemButton>
//                     </ListItem>

                    

//                 </List>
//                 </Box>

//             </Box>

            
//         )
//     }













//     const Feed = () => {
//         return(
//             <Box
//                 flex={4}
//                 p={2}>
//                     <Posts></Posts>
//                     <Posts></Posts>
//                     <Posts></Posts>
//                     <Posts></Posts>
//             </Box>
//         )
//     }


//     const Rightbar = () => {
//         return(
//             <Box
//                 flex={2}
//                 p={2}
//                 sx={{display : {xs : "none",
//                                 sm : "block"}}}
//                 >
//                     <Box position='fixed' width={300}>

//                         <Typography variant='h6' fontWeight={100}>
//                             Online friends
//                         </Typography>

//                         <AvatarGroup max={7}>
//                             <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                             <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//                             <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//                             <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                             <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//                             <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//                             <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
//                             <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
//                         </AvatarGroup>

//                         <Typography variant='h6' fontWeight={100}>
//                             Latest photoes
//                         </Typography>

//                         <ImageList
//                             sx={{ width: 500, height: 200 }}
//                             variant="quilted"
//                             cols={3}
//                             rowHeight={100}
//                             gap={5}
//                             >
//                             <ImageListItem>
//                                 <img src='https://e1.pxfuel.com/desktop-wallpaper/710/163/desktop-wallpaper-best-4-slice-of-pizza-on-hip-slice-of-pizza-thumbnail.jpg'></img>
//                             </ImageListItem>
//                             <ImageListItem>
//                                 <img src='https://e1.pxfuel.com/desktop-wallpaper/710/163/desktop-wallpaper-best-4-slice-of-pizza-on-hip-slice-of-pizza-thumbnail.jpg'></img>
//                             </ImageListItem>
//                             <ImageListItem>
//                                 <img src='https://e1.pxfuel.com/desktop-wallpaper/710/163/desktop-wallpaper-best-4-slice-of-pizza-on-hip-slice-of-pizza-thumbnail.jpg'></img>
//                             </ImageListItem>
                            
                           
//                         </ImageList>

//                         <Typography variant='h6' fontWeight={100}>
//                             Latest photoes
//                         </Typography>

//                         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//                             <ListItem alignItems="flex-start">
//                                 <ListItemAvatar>
//                                 <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35Sk9mMEcBuooCRGNUylcYn-PR6IZhDHzvA&usqp=CAU" />
//                                 </ListItemAvatar>
//                                 <ListItemText
//                                 primary="Brunch this weekend?"
//                                 secondary={
//                                     <React.Fragment>
//                                     <Typography
//                                         sx={{ display: 'inline' }}
//                                         component="span"
//                                         variant="body2"
//                                     >
//                                         Ali Connors
//                                     </Typography>
//                                     {" — I'll be in your neighborhood doing errands this…"}
//                                     </React.Fragment>
//                                 }
//                                 />
//                             </ListItem>
//                             <Divider variant="inset" component="li" />
//                             <ListItem alignItems="flex-start">
//                                 <ListItemAvatar>
//                                 <Avatar alt="Travis Howard" src="https://scitechdaily.com/images/BBQ-Grilled-Steak.jpg" />
//                                 </ListItemAvatar>
//                                 <ListItemText
//                                 primary="Summer BBQ"
//                                 secondary={
//                                     <React.Fragment>
//                                     <Typography
//                                         sx={{ display: 'inline' }}
//                                         component="span"
//                                         variant="body2"
//                                     >
//                                         to Scott, Alex, Jennifer
//                                     </Typography>
//                                     {" — Wish I could come, but I'm out of town this…"}
//                                     </React.Fragment>
//                                 }
//                                 />
//                             </ListItem>
//                             <Divider variant="inset" component="li" />
//                             <ListItem alignItems="flex-start">
//                                 <ListItemAvatar>
//                                 <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkW0ab93_GxAcFfeDraRDAfgQtRDXi4_2sBA&usqp=CAU" />
//                                 </ListItemAvatar>
//                                 <ListItemText
//                                 primary="Oui Oui"
//                                 secondary={
//                                     <React.Fragment>
//                                     <Typography
//                                         sx={{ display: 'inline' }}
//                                         component="span"
//                                         variant="body2"
//                                     >
//                                         Sandra Adams
//                                     </Typography>
//                                     {' — Do you have Paris recommendations? Have you ever…'}
//                                     </React.Fragment>
//                                 }
//                                 />
//                             </ListItem>
//                             </List>

//                     </Box>
//                 </Box>
//         )
//     }
    
//     return (
//         <Box>
//             <Navbar/>
//             <Stack 
//                 direction="row" 
//                 spacing={2}
//                 justifyContent="space-between">
                
//                 <Sidebar></Sidebar>
//                 <Feed></Feed>
//                 <Rightbar></Rightbar>

                

//             </Stack>
            
//         </Box>
//     );
// }

// export default App;

















