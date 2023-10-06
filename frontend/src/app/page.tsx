'use client'
import React from 'react';
import AppBar from '@/components/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FloatingShapes from "@/components/FloatingShapes";
import "./globals.css";
import Logo from "@/components/Logo";
import {Grid} from "@mui/material";

export default function Home() {
    return (
        <div>
            <FloatingShapes/>
            <AppBar/>
            <Container maxWidth="xl">
                <Logo/>
                <Grid container  spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="centerVertically">
                            <Typography variant="body1" className="introText">
                                Welcome to Vedledle - Your Trusted Pet Grooming Salon
                                <br/>
                                We specialize in grooming services for all kinds of dogs and cats, including trimming,
                                washing,
                                hobby grooming, and standard grooming. Your pets deserve the best care, and we&apos;re
                                here
                                to provide it!
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="centerVertically">
                            <img
                                className="borderedImage"
                                src="/dog1.jpg"
                                alt="Grooming Image 1"
                                width="70%"
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
