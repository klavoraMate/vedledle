'use client'
import Layout from "@/components/design/Layout";
import Box from "@mui/material/Box";
import {ImageList, ImageListItem} from "@mui/material";
import {useEffect, useState} from "react";
import GalleryImage from "@/app/gallery/GalleryImage";
import GalleryUploadButton from "@/app/gallery/GalleryUploadButton";
import {getRole} from "@/util/JWTDecoder"

export default function Gallery() {
    const [imageNames, setImageNames] = useState<string[]>([]);
    const role = getRole();

    async function fetchNames() {
        try {
            const response = await fetch('/api/image/names', {
                method: "GET"
            })
            if (response.ok) {
                const names: string[] = await response.json();
                setImageNames(names)
            }
        } catch (e) {
            console.error("Error during fetching image names: ", e)
        }
    }

    useEffect(() => {
        fetchNames();
    }, []);
    return (
        <Layout>
            <Box sx={{overflowY: 'scroll'}}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {imageNames && imageNames.map((name, index) => (
                        <ImageListItem key={index}>
                            <GalleryImage imageName={name}/>
                        </ImageListItem>
                    ))}
                </ImageList>
                {role === 'ADMIN' && <GalleryUploadButton/>}
            </Box>
        </Layout>
    )
}
