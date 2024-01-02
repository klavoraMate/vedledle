'use client'
import Layout from "@/app/components/layout/Layout";
import Box from "@mui/material/Box";
import {ImageList, ImageListItem} from "@mui/material";
import React, {useEffect, useState} from "react";
import GalleryImage from "@/app/components/images/GalleryImage";
import GalleryUploadButton from "@/app/components/buttons/GalleryUploadButton";
import {getJWT, getRole} from "@/app/util/JWTDecoder"
import IconButton from "@mui/material/IconButton";
import {DeleteOutline} from '@mui/icons-material';
import {ClearOutlined} from '@mui/icons-material';
import {makeStyles} from "@material-ui/core/styles";
import {TEXT_LIGHT,SECONDARY} from "@/app/util/styleConstants";


export default function Gallery() {
    const [imageNames, setImageNames] = useState<string[]>([]);
    const [showDeleteIcons, setShowDeleteIcons] = useState(false);
    const jwt = getJWT();
    const role = getRole();
    const classes = useStyles();

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

    const handleDeleteImage = async (imageName: string) => {
        try {
            const response = await fetch(`/api/image?name=${imageName}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            if (response.ok) {
                await fetchNames()
            }
        } catch (e) {
            console.error("Error during image deletion: ", e);
        }
    };
    const toggleDeleteIcons = () => {
        setShowDeleteIcons(!showDeleteIcons);
    };
    const handleImageUploadSuccess = () => {
        fetchNames();
    };

    useEffect(() => {
        fetchNames();
    }, []);
    return (
        <Layout>
            {role === "ROLE_ADMIN" &&
                <div className='uploadAndDeleteToggleButtonHolder'>
                    <GalleryUploadButton onUploadSuccess={handleImageUploadSuccess}/>
                    <IconButton onClick={() => toggleDeleteIcons()}>
                        <DeleteOutline style={{fontSize: 48, color: 'black'}}/>
                    </IconButton>
                </div>}

            <Box sx={{overflowY: 'scroll'}}>
                <ImageList variant="masonry" cols={3} gap={8}>

                    {imageNames && imageNames.map((name: string, index: number) => (
                        <ImageListItem key={index} style={{position: 'relative'}}>
                            <GalleryImage imageName={name}/>
                            {showDeleteIcons && (
                                <IconButton onClick={() => handleDeleteImage(name)} className={classes.deleteImageButton}>
                                    <ClearOutlined/>
                                </IconButton>)}
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Layout>
    )
}
const useStyles = makeStyles((theme) => ({
    deleteImageButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        color: TEXT_LIGHT,
        background: SECONDARY,
        borderRadius: '50%',
    },
}));
/*   <ImageListItem style={{position: 'relative'}}>
                        <img src='/dog1.jpg'/>
                        <IconButton  className={styles.deleteImageButton}>
                            <ClearOutlined/>
                        </IconButton>)
                    </ImageListItem>*/
