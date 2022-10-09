import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import { AccountBox, Diversity3, Group, Home, ModeNight, Store, Settings, Layers } from '@mui/icons-material'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box  flex={1} p={2} sx={{ display: { xs: "none", sm: "block"} }}>
      <Box position="fixed">
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="home">
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="pages">
            <ListItemIcon>
              <Layers/>
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="groups">
            <ListItemIcon>
              <Diversity3/>
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="marketplace">
            <ListItemIcon>
              <Store/>
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="friends">
            <ListItemIcon>
              <Group/>
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="setting">
            <ListItemIcon>
              <Settings/>
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="simple-list">
            <ListItemIcon>
              <AccountBox/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
           <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")}/>
           </ListItemButton>
         </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Sidebar