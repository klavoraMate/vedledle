'use client'
import AppBar from "@/components/AppBar";
import Box from "@mui/material/Box";
import {FormControl, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React, {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import FormContainer from "@/components/form/formContainer";
import RegisterForm from "@/components/form/registerForm";
import FloatingShapes from "@/components/FloatingShapes";

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
            const wholeName = firstName + " " + lastName;
            const response =
                await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "name": wholeName,
                        "email": email,
                        "password": password
                    }),
                });
            setLoading(false);
            if (response.status === 201) {
                await router.push("/login")
            } else {
                setError("Register failed.")
            }
        } catch (error) {
            setLoading(false);
            setError("An error occurred during register. Please try again.");
            console.error(error);
        }
    }


    return (
        <>
            <AppBar/>
            <FloatingShapes/>
            <FormContainer>
                <RegisterForm firstName={firstName} lastName={lastName} email={email} password={password}
                              confirmPassword={confirmPassword} loading={loading} error={error}
                              setFirstName={setFirstName}
                              setLastName={setLastName} setEmail={setEmail} setPassword={setPassword}
                              setConfirmPassword={setConfirmPassword} handleRegister={handleRegister}
                />
            </FormContainer>
        </>
    )
}
