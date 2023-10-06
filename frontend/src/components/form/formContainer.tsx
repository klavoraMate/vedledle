import React, { ReactNode } from "react";
import { Container, Box } from "@mui/material";

interface FormContainerProps {
    children: ReactNode;
}

export default function FormContainer({ children }: FormContainerProps) {
    return (
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
    );
}
