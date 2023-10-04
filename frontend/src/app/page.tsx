'use client'
import React from 'react';
import AppBar from '@/components/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const styles = {
    title: {
        textAlign: 'center',
        marginTop: '2rem',
        marginBottom: '1rem',
        fontFamily: 'monospace',
        fontWeight: 700,
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
        border: '2px solid var(--text)', // Add your border style here
        borderRadius: '10px', // Adjust border radius as needed
    },
};

export default function Home() {
    return (
        <div>
            <AppBar />
            <Container maxWidth="xl">
                <Typography variant="h4" component="h1" style={styles.title}>
                    Vedledle
                </Typography>
                <Box style={styles.imageContainer}>
                    <img
                        src="/logo.jpeg" // Replace with the path to your logo
                        alt="Vedledle Logo"
                        width="200" // Adjust the logo width as needed
                    />
                </Box>
                <Typography variant="body1" style={styles.introText}>
                    Welcome to Vedledle - Your Trusted Pet Grooming Salon
                    <br />
                    We specialize in grooming services for all kinds of dogs and cats, including trimming, washing,
                    hobby grooming, and standard grooming. Your pets deserve the best care, and we're here to provide it!
                </Typography>
                <Box style={styles.imageContainer}>
                    <Paper elevation={3} style={styles.borderedImage}>
                        <img
                            src="/dog1.jpg" // Replace with the path to your image
                            alt="Grooming Image 1"
                            width="300" // Adjust the image width as needed
                        />
                    </Paper>
                    <Paper elevation={3} style={styles.borderedImage}>
                        <img
                            src="/dog2.jpg" // Replace with the path to your image
                            alt="Grooming Image 2"
                            width="300" // Adjust the image width as needed
                        />
                    </Paper>
                </Box>
            </Container>
        </div>
    );
}
