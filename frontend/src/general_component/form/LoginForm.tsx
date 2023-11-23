import React from "react";
import {FormControl, TextField} from "@mui/material";
import SubmitButton from "@/general_component/form/SubmitButton";

interface LoginFormProps {
    email: string;
    password: string;
    loading: boolean;
    error: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    handleSubmit: () => void;
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
                    <SubmitButton
                        text={loading? "Logging in...":"Login"}
                        disabled={loading}
                        onClick={(e)=>{
                            e.preventDefault()
                            handleSubmit();
                        }}
                    />
                </FormControl>
            </form>

            {error && <p>{error}</p>}
        </div>
    );
}
