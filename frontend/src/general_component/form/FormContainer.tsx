import React, {ReactNode} from "react";
import {Container, Box, Grid, Hidden} from "@mui/material";
import Logo from "@/general_component/Logo";

interface FormContainerProps {
    children: ReactNode;
}

export default function FormContainer({children}: FormContainerProps) {
    return (
        <Grid container spacing={2}>
            <Hidden mdDown>
                <Grid item md={4}>
                    <div className="centerVertically">
                        <Logo/>
                    </div>
                </Grid>
            </Hidden>
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
