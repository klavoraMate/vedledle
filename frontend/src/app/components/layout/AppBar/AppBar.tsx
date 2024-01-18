'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useRouter} from 'next/navigation';
import "../../../globals.css"
import {useState} from "react";
import {getName} from "@/app/util/JWTDecoder";
import AppBarNavigationButton from "@/app/components/buttons/AppBarNavigationButton";
import AppBarMenuItem from "@/app/components/layout/AppBar/AppBarMenuItem";
import AppBarProfileMenu from "@/app/components/layout/AppBar/AppBarProfileMenu";
import AppBarNavigationMenu from "@/app/components/layout/AppBar/AppBarNavigationMenu";
import AppBarLogoAndTitle from "@/app/components/layout/AppBar/AppBarLogoAndTitle";


export default function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const router = useRouter();
    let username = getName();

    const pages = ['Gallery', 'Reservation', 'Dogs'];
    const settings = username ? ['Logout'] : ['Login', 'Register'];

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (page: string | object): void => {
        setAnchorElNav(null);
        if (typeof page === 'string') {
            router.push('/' + page.toLowerCase());
        }
    };

    const handleCloseUserMenu = (setting: string | object) => {
        setAnchorElUser(null);
        if (typeof setting === 'string') {
            if (setting === 'Logout') {
                handleLogout();
                router.push('/');
            } else
                router.push('/' + setting.toLowerCase());
        }
    };

    const handleLogout = (): void => {
        localStorage.removeItem("jwt");
    };

    return (
        <AppBar position="fixed"
                style={{
                    backgroundColor: "var(--secondary)",
                    color: "var(--text-light)",
                    borderRadius: "80px",
                    border: 'solid var(--text-light) 2px',
                }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AppBarLogoAndTitle view={'xs'}/>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="navigation menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <AppBarNavigationMenu anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu}>
                            {pages.map((page) => (
                                <AppBarMenuItem onClick={handleCloseNavMenu} text={page} key={page}/>
                            ))}
                        </AppBarNavigationMenu>
                    </Box>

                    <AppBarLogoAndTitle view={'md'}/>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <AppBarNavigationButton onClick={handleCloseNavMenu} pageName={page} key={page}/>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                {username ?
                                    <Typography variant="h5" className="settingText">{username}</Typography> :
                                    <Typography variant="h5" className="settingText">Account</Typography>}

                            </IconButton>
                        </Tooltip>
                        <AppBarProfileMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu}>
                            {settings.map((setting) => (
                                <AppBarMenuItem onClick={handleCloseUserMenu} text={setting} key={setting}/>
                            ))}
                        </AppBarProfileMenu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

