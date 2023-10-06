import React, {FormEvent} from "react";
import {FormControl, TextField, Button} from "@mui/material";
import "../../app/globals.css";

interface LoginFormProps {
    email: string;
    password: string;
    loading: boolean;
    error: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function LoginForm({
                                      email,
                                      password,
                                      loading,
                                      error,
                                      setEmail,
                                      setPassword,
                                      handleSubmit,
                                  }: LoginFormProps) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                        className="formButton"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </Button>
                </FormControl>
            </form>

            {error && <p>{error}</p>}
        </div>
    );
}
