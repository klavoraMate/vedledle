'use client'
import React from 'react';
import AppBar from '@/components/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FloatingShapes from "@/components/FloatingShapes";

const styles: Record<string, React.CSSProperties>= {
    title: {
        textAlign: 'center',
        marginTop: '2rem',
        marginBottom: '1rem',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        letterSpacing: '0.3rem',
    },
    introText: {
        textAlign: 'center',
        marginBottom: '2rem',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '2rem',
    },
    borderedImage: {
        position: 'relative',
        border: '0.4rem solid var(--text-light)',
        borderRadius: '3rem',
    },
};

export default function Home() {
    return (
        <div>
            <FloatingShapes/>
            <AppBar />
            <Container maxWidth="xl">
                <Typography variant="h4" component="h1" style={styles.title}>
                    Vedledle
                </Typography>
                <Box style={styles.imageContainer}>
                    <img
                        src="/logo-transparent.png"
                        alt="Vedledle Logo"
                        width="200"
                    />
                </Box>
                <Typography variant="body1" style={styles.introText}>
                    Welcome to Vedledle - Your Trusted Pet Grooming Salon
                    <br />
                    We specialize in grooming services for all kinds of dogs and cats, including trimming, washing,
                    hobby grooming, and standard grooming. Your pets deserve the best care, and we&apos;re here to provide it!
                </Typography>
                <Box style={styles.imageContainer}>
                        <img
                            style={styles.borderedImage}
                            src="/dog1.jpg"
                            alt="Grooming Image 1"
                            width="300"
                        />
                        <img
                            style={styles.borderedImage}
                            src="/dog2.jpg"
                            alt="Grooming Image 2"
                            width="300"
                        />
                </Box>
            </Container>
        </div>
    );
}
