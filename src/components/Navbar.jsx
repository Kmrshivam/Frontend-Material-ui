import { Pets, Notifications, Mail } from "@mui/icons-material";
import { AppBar, Box, InputBase,  Badge, styled, Toolbar, Typography, Avatar, MenuItem, Menu } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none" ,
   alignItems: "center",
   gap: "10px",
   [theme.breakpoints.up("sm")]:{
    display: "flex"
   }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex" ,
   alignItems: "center",
   gap: "20px",
   [theme.breakpoints.up("sm")]:{
    display: "none"
   }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
        <StyledToolbar>
           <Typography variant="h6" sx={{ display: { xs: "none", sm: "block"} }}>Navbar</Typography> 
           <Pets sx={{ display: { xs: "block", sm: "none"} }}/>
           <Search><InputBase placeholder="search..."/></Search>
           <Icons>
             <Badge badgeContent={4} color="error">
                <Mail />
             </Badge>
             <Badge badgeContent={2} color="error">
                <Notifications />
             </Badge>
             <Avatar sx={{ width: 30, height: 30}} src="https://media.istockphoto.com/photos/sliced-figure-picture-id1300035600?s=2048x2048" onClick={(e) => setOpen(true)} />
           </Icons>
           <UserBox>
             <Avatar sx={{ width: 30, height: 30}} src="https://media.istockphoto.com/photos/sliced-figure-picture-id1300035600?s=2048x2048"  onClick={(e) => setOpen(true)}/>
             <typography variant="span">John</typography>
           </UserBox>
        </StyledToolbar>
        <Menu id="demo-position-menu" aria-labelledby="demo-positioned-button" open={open} onClose={(e) => setOpen(false)} anchorOrigin={{vertical: 'top', horizontal: 'right',}} transformOrigin={{vertical: "top", horizontal: "right",}}>
          <MenuItem >Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem >Logout</MenuItem>
        </Menu>

    </AppBar>
  )
}

export default Navbar