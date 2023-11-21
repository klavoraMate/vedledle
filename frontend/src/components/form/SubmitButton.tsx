import Button from "@mui/material/Button";
import {makeStyles} from "@material-ui/core/styles";
import {PRIMARY, SECONDARY, TEXT_DARK, TEXT_LIGHT} from "@/util/styleConstants";
import React from "react";

interface SubmitButtonProps {
    text:string
    disabled: boolean,
    onClick: (e:React.MouseEvent<HTMLButtonElement>)=>void
}

export default function SubmitButton({text,disabled,onClick}: SubmitButtonProps) {
    const classes = useStyles();


    return (
        <Button
            variant="contained"
            className={classes.formButton}
            type="submit"
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}
const useStyles = makeStyles(() => ({
    formButton: {
        background: SECONDARY,
        color: TEXT_LIGHT,
        '&:hover': {
            background: PRIMARY,
            color: TEXT_DARK,
        },
    },
}));