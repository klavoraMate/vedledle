import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import * as React from "react";

interface AppBarLogoAndTitleProps {
    view: 'xs' | 'md';
}

const getTitleDisplay = (view: string) => {
    if (view === 'xs') {
        return {xs: 'none', md: 'flex'}
    }
    if (view === 'md') {
        return {xs: 'flex', md: 'none'}
    }
}

const getLogoDisplay = (view: string) => {
    if (view === 'xs') {
        return  {xs: 'none', md: 'flex'}
    }
    if (view === 'md') {
        return {xs: 'flex', md: 'none'}
    }
}

const getTitleVariant = (view: string) => {
    if (view === 'xs') {
        return 'h5'
    }
    if (view === 'md') {
        return 'h6'
    }
}
export default function AppBarLogoAndTitle({view}: AppBarLogoAndTitleProps) {

    const titleDisplay = getTitleDisplay(view);
    const logoDisplay = getLogoDisplay(view);
    const titleVariant = getTitleVariant(view);

    const titleStyle = {
        mr: 2,
        display: titleDisplay,
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    }

    const logoStyle = {
        display: logoDisplay,
    }


    return (
        <>
            <Avatar
                sx={logoStyle}
                src="/logo.png"
                alt="German Sheppard Logo"/>
            <Typography
                variant={titleVariant}
                noWrap
                component="a"
                href="/"
                sx={titleStyle}
            >
                VEDLEDLE
            </Typography>

        </>
    )
}

