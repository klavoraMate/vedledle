import React, { ReactNode } from "react";
import AppBar from "@/app/components/layout/AppBar";
import Container from "@mui/material/Container";
import FloatingShapes from "@/app/components/layout/FloatingShapes";

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
