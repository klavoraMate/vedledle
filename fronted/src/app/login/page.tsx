'use client'

import AppBar from "@/_components/AppBar";
import {Checkbox, FormControl, Input, InputLabel, TextField} from "@mui/material";
import React, {FormEvent, useState} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        try {
            setLoading(true);
            setError("");

            const response =
                await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: formData,
                });

            setLoading(false);

            if (response.status === 200) {
                console.log("Login successful");
            } else {
                setError("Login failed. Please check your credentials.");
            }
        } catch (error) {
            setLoading(false);
            setError("An error occurred during login. Please try again.");
            console.error(error);
        }
    };

    return (
        <>
            <AppBar/>
            <Container maxWidth="sm">
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    minHeight="70vh"
                >
                    <div>
                        <form onSubmit={handleLogin}>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>

                            <FormControl fullWidth margin="normal">
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormControl>

                            <FormControl fullWidth margin="normal">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? "Logging in..." : "Login"}
                                </Button>
                            </FormControl>
                        </form>

                        {error && <p>{error}</p>}
                    </div>
                </Box>
            </Container>
        </>
    );
}
