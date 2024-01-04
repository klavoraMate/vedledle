"use client"
import React, {useState, useCallback, useEffect} from "react";
import {useDropzone} from "react-dropzone";
import {getJWT} from "@/app/util/JWTDecoder";
import {AddCircleOutline} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

type GalleryUploadButtonProps = {
    onUploadSuccess: () => void;
}

export default function GalleryUploadButton({onUploadSuccess}: GalleryUploadButtonProps) {
    const jwt = getJWT();

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const formData = new FormData();

        acceptedFiles.forEach((file) => {
            formData.append(`images`, file);
        });

        try {
            const response = await fetch("/api/image", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
                body: formData,
            });

            if (response.ok) {
                onUploadSuccess();
            } else {
                console.error("Image upload failed");
            }
        } catch (error) {
            console.error("Image upload error:", error);
        }
    }, []);

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: {'image/*': ['.png', '.jpeg']},
    });


    return (
        <div {...getRootProps()} style={{cursor: 'pointer'}}>
            <input {...getInputProps()} type='file'/>
            <IconButton>
                <AddCircleOutline style={{color: 'lightblue', fontSize: 48}}/>
            </IconButton>
        </div>
    );
}
