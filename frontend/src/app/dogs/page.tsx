'use client'
import {Box, Container, Grid, Typography} from "@mui/material";
import { getJWT} from "@/app/util/JWTDecoder";
import Layout from "@/app/components/layout/Layout";
import DogCardContainer from "@/app/components/container/DogCardContainer";

export default function Dogs() {
    const jwt = getJWT();

    return (
        <Layout>
            {jwt ? (
                <Container sx={containerStyle} maxWidth="md">
                    <DogCardContainer/>
                </Container>
            ) : (
                <Grid container justifyContent="center">
                    <Typography variant="h1">Please log in!</Typography>
                </Grid>
            )}
        </Layout>
    )
}

const containerStyle = {
    marginTop: 20,
    marginBottom: 20,
}

