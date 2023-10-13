import React, { ReactNode } from "react";
import AppBar from "@/components/AppBar";
import Container from "@mui/material/Container";
import FloatingShapes from "@/components/design/FloatingShapes";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <FloatingShapes/>
            <AppBar />
            <Container style={{ marginTop: "5rem" }}>{children}</Container>
        </>
    );
}
