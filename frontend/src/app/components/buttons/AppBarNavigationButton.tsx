import Button from "@mui/material/Button";
import * as React from "react";
import {PRIMARY, SECONDARY, TEXT_DARK, TEXT_LIGHT} from "@/app/util/styleConstants";

interface AppBarNavigationButtonProps {
    onClick: (pageName: string) => void;
    pageName: string;
}

export default function AppBarNavigationButton({onClick, pageName}: AppBarNavigationButtonProps) {
    return (
        <Button
            onClick={() => onClick(pageName)}
            sx={style}
        >
            {pageName}
        </Button>
    )
}

const style = {
    fontSize: '1.2rem',
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    color: TEXT_LIGHT,
    borderRadius: '1rem',
    '&:hover': {
        borderRadius: '1rem',
        background: PRIMARY,
        color: TEXT_DARK,
    },
};