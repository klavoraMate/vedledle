import React, {FormEvent} from "react";
import {FormControl, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import "../../app/globals.css";

interface RegisterFormProps {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    loading: boolean,
    error: string,
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setConfirmPassword: (confirmPassword: string) => void
    handleRegister: (e: FormEvent<HTMLFormElement>) => void;
}

export default function RegisterForm({
                                         firstName,
                                         lastName,
                                         email,
                                         password,
                                         confirmPassword,
                                         loading,
                                         error,
                                         setFirstName,
                                         setLastName,
                                         setEmail,
                                         setPassword,
                                         setConfirmPassword,
                                         handleRegister
                                     }: RegisterFormProps) {
    return (
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
                        type="submit"
                        className="formButton"
                        disabled={loading}
                    >
                        {loading ? "Sending registration form.." : "Register"}
                    </Button>
                </FormControl>
            </form>

            {error && <p>{error}</p>}
        </div>
    )
}
