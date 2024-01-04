'use client'
import React, {useEffect, useState} from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import {User} from "@/app/util/types";
import {getEmail, getJWT} from "@/app/util/JWTDecoder";

export default function UserInfoCard() {
    const email = getEmail();
    const jwt = getJWT();
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<User | null>(null);

    const fetchUserData = async () => {
        try {
            if (email) {
                setLoading(true);
                const response = await fetch(`/api/user/info?email=${encodeURIComponent(email.toString())}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });

                if (response.ok) {
                    const userData: User = await response.json();
                    setUserData(userData);
                    setLoading(false);
                }
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (email && jwt) {
            fetchUserData();
        }
    }, [email, jwt]);

    return (
        <>
            {!loading ?
                (<Card sx={cardStyle}>
                    <CardContent>
                        <Typography sx={titleStyle} gutterBottom>
                            User Information
                        </Typography>
                        <Typography variant="body1">
                            <strong>Name:</strong> {userData?.name}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Email:</strong> {userData?.email}
                        </Typography>
                    </CardContent>
                </Card>) :
                (<Card sx={cardStyle}>
                    <CardContent>
                        <Typography sx={titleStyle} gutterBottom>
                            Loading ..
                        </Typography>
                    </CardContent>
                </Card>)
            }
        </>
    );
};

const cardStyle = {
    minWidth: 275,
    marginBottom: 2,
}

const titleStyle = {
    fontSize: 20,
}
