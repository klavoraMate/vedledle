'use client'
import React, { useState} from "react";
import IconButton from "@mui/material/IconButton";
import { AddCircleOutline } from "@mui/icons-material";
import DialogContent from "@mui/material/DialogContent";
import DogForm from "@/app/components/form/DogForm";
import DialogContainer from "@/app/components/container/DialogContainer";
import {SECONDARY} from "@/app/util/styleConstants";

interface DogUploadButtonProps {
    onCloseCallback: () => void;
}
export default function DogUploadButton({ onCloseCallback }:DogUploadButtonProps) {
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
                <AddCircleOutline sx={buttonStyle} />
            </IconButton>
            <DialogContainer open={open} title='Upload dog'>
                <DialogContent>
                    <DogForm onClose={handleClose} />
                </DialogContent>
            </DialogContainer>
        </>
    );
}


const buttonStyle = {
    fontSize:42,
    color: SECONDARY,
}