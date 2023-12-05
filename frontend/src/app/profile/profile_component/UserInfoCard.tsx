import React, {useEffect, useState} from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';
import {User} from "@/util/types";
import {getEmail, getJWT} from "@/util/JWTDecoder";

export default function UserInfoCard() {
    const email = getEmail();
    const jwt = getJWT();
    const classes = useStyles();
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
                (<Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
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
                (<Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Loading ..
                        </Typography>
                    </CardContent>
                </Card>)
            }
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: 275,
        marginBottom: theme.spacing(2),
    },
    title: {
        fontSize: 20,
    },
}));
