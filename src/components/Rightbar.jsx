import React from 'react'
import { Box, Typography, AvatarGroup, Divider, ListItemAvatar, ListItemText, List, ListItem, Avatar, ImageListItem, ImageList } from "@mui/material"

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block"} }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}> Online Friends</Typography>
        <AvatarGroup max={4}>
        <Avatar alt="Renny sharp" src="https://images.pexels.com/photos/5049506/pexels-photo-5049506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Mandy" src="https://images.pexels.com/photos/4088111/pexels-photo-4088111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Sandy" src="https://images.pexels.com/photos/13792566/pexels-photo-13792566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Randy" src="https://images.pexels.com/photos/13733664/pexels-photo-13733664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Candy" src="https://images.pexels.com/photos/13464942/pexels-photo-13464942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Fangyee" src="https://images.pexels.com/photos/13752323/pexels-photo-13752323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Deery" src="https://images.pexels.com/photos/13739704/pexels-photo-13739704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photo
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/1893563/pexels-photo-1893563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/248509/pexels-photo-248509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/2862154/pexels-photo-2862154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/1438540/pexels-photo-1438540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/3607284/pexels-photo-3607284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} >
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar