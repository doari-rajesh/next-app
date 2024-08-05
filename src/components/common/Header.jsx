'use client'
import { AppBar, Tabs, Tab, Toolbar, Typography, Button, Box } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DrawerSideBar from './DrawerSideBar';
// import Link from 'next/link';



const Header = () => {
    const [tabvalue, setTabValue] = useState(0)
    console.log('tab', tabvalue)
    const [openDrawer, setOpenDrawer] = useState(false)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    console.log(theme)
    console.log(matches)
    const navlinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
    ];
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

                            <Tabs textColor='inherit' value={tabvalue}
                            >

                                {/* <Tab label="Home" value={'Home'} />
                                <Tab label="About" value={'About'} />
                                <Tab label="Contact" value='contact' /> */}

                                {
                                    navlinks.map((item, index) => {
                                        return <Link href={item.path} key={index}>
                                            <Tab label={item.title} value={index} onChange={(e, tabvalue) => { console.log(tabvalue), setTabValue(tabvalue) }} />
                                        </Link>
                                    })
                                }

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