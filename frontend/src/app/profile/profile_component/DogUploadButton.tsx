import React, { useState} from "react";
import IconButton from "@mui/material/IconButton";
import { AddCircleOutline } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DogForm from "@/app/profile/profile_component/DogForm";
import {SECONDARY} from "@/util/styleConstants";
import {makeStyles} from "@material-ui/core/styles";

interface DogUploadButtonProps {
    onCloseCallback: () => void;
}
export default function DogUploadButton({ onCloseCallback }:DogUploadButtonProps) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onCloseCallback();
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <AddCircleOutline className={classes.button} />
            </IconButton>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>Upload Dog</DialogTitle>
                <DialogContent>
                    <DogForm onClose={handleClose} />
                </DialogContent>
            </Dialog>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    button: {
        fontSize:42,
        color: SECONDARY,
    },
}));