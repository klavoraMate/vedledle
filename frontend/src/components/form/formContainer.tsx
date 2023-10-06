import React, { ReactNode } from "react";
import {Container, Box, Grid} from "@mui/material";
import Logo from "@/components/logo";

interface FormContainerProps {
    children: ReactNode;
}

export default function FormContainer({ children }: FormContainerProps) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
                <Logo/>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
                <Container maxWidth="sm">
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        minHeight="70vh"
                    >
                        {children}
                    </Box>
                </Container>
            </Grid>
        </Grid>
    );
}
