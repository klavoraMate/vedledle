'use client'
import AppBar from "@/compnents/AppBar";
import Box from "@mui/material/Box";
import {FormControl, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React, {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoading(true);
            const response =
                await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "username": firstName + lastName,
                        "email": email,
                        "password": password
                    }),
                });
            setLoading(false);
            if (response.status === 200) {
                await router.push("/login")
            } else {
                setError("Register failed.")
            }
        } catch (error){
            setLoading(false);
            setError("An error occurred during register. Please try again.");
            console.error(error);
        }
    }


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
                        <form onSubmit={handleRegister}>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    label="First name"
                                    variant="outlined"
                                    type="text"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    label="Second name"
                                    variant="outlined"
                                    type="text"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </FormControl>
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
                                <TextField
                                    label="Confirm password"
                                    variant="outlined"
                                    type="password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? "Sending registration form.." : "Register"}
                                </Button>
                            </FormControl>
                        </form>

                        {error && <p>{error}</p>}
                    </div>
                </Box>
            </Container>
        </>
    )
}
