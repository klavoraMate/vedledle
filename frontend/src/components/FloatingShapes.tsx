import React from 'react';
import '../app/globals.css';
import {Grid} from "@mui/material"; // Import the CSS file

export default function FloatingShapes() {
    return (
        <>
            <div className="backwrap">
                <div className="back-shapes">
                    <Grid container  spacing={3}>
                        <Grid item>
                            <Item className="floating pawn"></Item>
                        </Grid>
                        <Grid item>
                            <div className="floating pawn"></div>
                        </Grid>
                        <Grid item>
                            <div className="floating pawn"></div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}
