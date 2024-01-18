'use client'
import React, { useState} from "react";
import {useRouter} from "next/navigation";
import FormContainer from "@/app/components/container/FormContainer";
import RegisterForm from "@/app/components/form/RegisterForm";
import Layout from "@/app/components/layout/Layout";

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleRegister = async () => {
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
        <Layout>
            <FormContainer>
                <RegisterForm firstName={firstName} lastName={lastName} email={email} password={password}
                              confirmPassword={confirmPassword} loading={loading} error={error}
                              setFirstName={setFirstName}
                              setLastName={setLastName} setEmail={setEmail} setPassword={setPassword}
                              setConfirmPassword={setConfirmPassword} handleRegister={handleRegister}
                />
            </FormContainer>
        </Layout>
    )
}
