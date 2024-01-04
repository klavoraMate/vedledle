import Box from "@mui/material/Box";
import React from "react";
import "../../globals.css";
import Typography from "@mui/material/Typography";

export default function Logo () {
    return(
        <>
            <Box style={{
                display:"flex",
                justifyContent:"space-around",
            }}>
                <img
                    src="/logo-transparent.png"
                    alt="Vedledle Logo"
                    width="200"
                />
            </Box>
            <Typography variant="h4" component="h1" className="title" >
                Vedledle
            </Typography>
        </>
    )
}
