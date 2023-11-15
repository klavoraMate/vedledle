import React from "react";
export default function GalleryImage({imageName}: { imageName: string }) {
    const imageSrc = `/api/image/search?name=${(encodeURIComponent(imageName))}` ;
    return (
        <img
            srcSet={`${imageSrc}&w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${imageSrc}&w=248&fit=crop&auto=format`}
            alt='Gallery image'
            loading="lazy"
        />
    )
}
