"use client"
import React, {useState, useCallback} from "react";
import {useDropzone} from "react-dropzone";
import {getJWT} from "@/util/JWTDecoder";
import {AddCircleOutline} from "@mui/icons-material";
export default function GalleryUploadButton() {
    const [selectedPictures, setSelectedPictures] = useState<File[]>([]);
    const jwt = getJWT();

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setSelectedPictures([...selectedPictures, ...acceptedFiles]);
    }, [selectedPictures]);

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: {'image/*': ['.png', '.jpeg']},
    });

    const handleUpload = async () => {
        const formData = new FormData();

        selectedPictures.forEach((file) => {
            formData.append(`images`, file);
        });

        try {
            const response = await fetch("/api/image/upload", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
                body: formData,
            });

            if (response.ok) {
                console.log("Images uploaded successfully");
            } else {
                console.error("Image upload failed");
            }
            setSelectedPictures([]);
        } catch (error) {
            console.error("Image upload error:", error);
        }
    };

    return (
        <div {...getRootProps()} style={{cursor: "pointer"}}>
            <input {...getInputProps()} />
            <AddCircleOutline style={{fontSize: 48}}/>
        </div>
    );
}
