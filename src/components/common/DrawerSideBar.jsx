import React, { useState } from 'react'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from "@mui/icons-material/Mail"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";

const DrawerSideBar = ({ openDrawer, setOpenDrawer }) => {


    return (

        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(!openDrawer)}>
                <Box
                    sx={{ bgcolor: 'white', color: 'gray', width: '250px', }}
                >

                    <Typography sx={{margin:'2rem'}}>
                        Shopee
                    </Typography>

                    <List>
                        {['Home', 'About', 'Contact'].map((item, index) => (

                            <ListItem key={index}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText
                                    >
                                        {item}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>

                        ))}
                    </List>
                </Box >

            </Drawer>


        </>

    )
}

export default DrawerSideBar