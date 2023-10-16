'use client'
import React, {useState, useCallback} from "react";
import Layout from "@/components/design/Layout";
import {Button, Paper} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {useDropzone} from "react-dropzone";

export default function GalleryUpload() {
    const [selectedPictures, setSelectedPictures] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setSelectedPictures([...selectedPictures, ...acceptedFiles]);
    }, [selectedPictures]);

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: {'image/*': ['.png', '.jpeg']},
    });

    const handleUpload = async () => {
        const imageObjects = selectedPictures.map((file) => {
            return {
                name: file.name,
                contentType: file.type,
                data: file,
            };
        });

        const requestData = {
            images: imageObjects,
        };

        try {
            const response = await fetch("/api/image/upload", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                // Handle successful upload
                console.log("Images uploaded successfully");
            } else {
                // Handle upload failure
                console.error("Image upload failed");
            }
        } catch (error) {
            // Handle network or other errors
            console.error("Image upload error:", error);
        }
    };

    return (
        <Layout>
            <Paper elevation={3} style={{padding: "20px"}}>
                <div {...getRootProps()} style={{cursor: "pointer"}}>
                    <input {...getInputProps()} />
                    <CloudUploadIcon fontSize="large"/>
                    <p>Drag &apos;n&apos; drop some images here, or click to select images</p>
                </div>

                {selectedPictures.length > 0 && (
                    <div>
                        <h2>Selected Images:</h2>
                        <ul>
                            {selectedPictures.map((file, index) =>
                                <li key={index}>{file.name}</li>
                            )}
                        </ul>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleUpload}
                        >
                            Upload
                        </Button>
                    </div>
                )}
            </Paper>
        </Layout>
    );
}
