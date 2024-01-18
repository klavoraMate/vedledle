import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import {PRIMARY, TEXT_DARK, TEXT_LIGHT} from "@/app/util/styleConstants";

interface AppBarMenuItemProps {
    onClick: (text: string) => void;
    text: string;
}

export default function AppBarMenuItem({onClick, text}: AppBarMenuItemProps) {
    return (
        <MenuItem sx={menuItemStyle} key={text} onClick={() => onClick(text)}>
            <Typography textAlign="center">{text}</Typography>
        </MenuItem>
    )
}

const menuItemStyle = {
    borderRadius: '1rem',
    '& .MuiTypography-root': {
        fontSize: '1.2rem',
        fontFamily: 'Ubuntu',
        fontWeight: 'bold',
        color: TEXT_LIGHT,
    },
    '&:hover': {
        background: PRIMARY,
        '& .MuiTypography-root': {
            color: TEXT_DARK,
        },
    },
}