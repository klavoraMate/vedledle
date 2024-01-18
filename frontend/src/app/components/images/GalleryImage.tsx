import React from "react";
import {SECONDARY} from "@/app/util/styleConstants";

export default function GalleryImage({imageName}: { imageName: string }) {
    const imageSrc = `/api/image?name=${(encodeURIComponent(imageName))}`;
    return (
        <div style={imageWrapperStyle}>
            <img
                style={imageStyle}
                srcSet={`${imageSrc}&w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${imageSrc}&w=248&fit=crop&auto=format`}
                alt={imageName}
                loading="lazy"
            />
        </div>
    )
}
const imageWrapperStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "1.5rem",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
    border : `0.5rem solid ${SECONDARY}`,
}
const imageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "1rem",
}
