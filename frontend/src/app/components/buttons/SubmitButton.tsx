import Button from "@mui/material/Button";
import {PRIMARY, SECONDARY, TEXT_DARK, TEXT_LIGHT} from "@/app/util/styleConstants";
import React from "react";

interface SubmitButtonProps {
    text:string
    disabled: boolean,
    onClick: (e:React.MouseEvent<HTMLButtonElement>)=>void
}

export default function SubmitButton({text,disabled,onClick}: SubmitButtonProps) {


    return (
        <Button
            variant="contained"
            sx={fromButtonStyle}
            type="submit"
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}

const fromButtonStyle = {
    background: SECONDARY,
    color: TEXT_LIGHT,
    '&:hover': {
        background: PRIMARY,
        color: TEXT_DARK,
    },

}
