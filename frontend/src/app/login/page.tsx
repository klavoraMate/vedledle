'use client'

import React, { useState} from "react";
import {useRouter} from "next/navigation"
import "../globals.css"
import LoginForm from "@/components/form/LoginForm";
import FormContainer from "@/components/form/FormContainer";
import Layout from "@/components/design/Layout";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();


    const handleLogin = async () => {

        try {
            setLoading(true);
            setError("");

            const response =
                await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "email":email,
                        "password": password
                    }),
                });

            setLoading(false);

            if (response.status === 200) {
                const data = await response.json();
                localStorage.setItem("jwt",data.token)
                await router.push("/profile")
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
        <Layout>
            <FormContainer>
                <LoginForm
                    email={email}
                    password={password}
                    loading={loading}
                    error={error}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleSubmit={handleLogin}
                />
            </FormContainer>
        </Layout>
    );
}
