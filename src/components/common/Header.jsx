import { AppBar, Tabs, Tab, Toolbar, Typography, Button, Box } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DrawerSideBar from './DrawerSideBar';



const Header = () => {
    const [tabvalue, setTabValue] = useState(0)
    const [openDrawer, setOpenDrawer] = useState(false)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    console.log(theme)
    console.log(matches)
    return (
        <AppBar sx={{ bgcolor: '#063970', position: 'static' }}>
            <Toolbar
                sx={{ justifyContent: 'space-between' }}
            >

                <ShoppingCartCheckoutIcon />

                {
                    matches ? (

                        <IconButton sx={{ color: "black" }} onClick={() => setOpenDrawer(!openDrawer)} >
                            <MenuIcon />
                        </IconButton>

                    )
                        :
                        <>

                            <Tabs textColor='inherit' value={tabvalue} onChange={(e, tabvalue) =>
                                setTabValue(tabvalue)}>

                                <Tab label="Home" />
                                <Tab label="About" />
                                <Tab label="Contact" />

                            </Tabs>

                            <Box sx={{ display: 'flex', columnGap: '5px' }}>
                                <Link href={'/dashboard'}>
                                    <Button variant='contained'>Login</Button>
                                </Link>

                                <Button variant='contained' >Signup</Button>
                            </Box>
                        </>

                }

                {
                    openDrawer && <DrawerSideBar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
                }

            </Toolbar>
        </AppBar >
    )
}

export default Header