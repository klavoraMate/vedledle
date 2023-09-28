'use client'

import AppBar from "@/compnents/AppBar";
import {Box, Card, CardContent, Container, Grid, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import {getEmail, getJWT} from "@/util/JWTDecoder";
import {useEffect, useState} from "react";

type DogData = {
    name: string,
    breed: string,
    age: number
}
type UserData = {
    name: string,
    email: string,
    dogs: DogData[]
}

export default function Profile() {
    const jwt = getJWT();
    const email = getEmail();
    const classes = useStyles();
    const [userData, setUserData] = useState<UserData | null>(null);

    const fetchUserData = async () => {
        try {
            const response = await fetch("/api/user/info/" + email, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            if (response.ok) {
                const userData: UserData = await response.json();
                setUserData(userData);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        if (jwt) {
            fetchUserData();
        }
    }, [jwt]);


    return (
        <>
            <AppBar/>
            {jwt && userData ? (<Container className={classes.container} maxWidth="md">
                        <Grid container justifyContent="center">
                            <Grid item xs={12} sm={6}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} gutterBottom>
                                            User Information
                                        </Typography>
                                        <Typography variant="body1">
                                            <strong>Name:</strong> {userData.name}
                                        </Typography>
                                        <Typography variant="body1">
                                            <strong>Email:</strong> {userData.email}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Box textAlign="center">
                            <Typography className={classes.dogsOwnedTitle} variant="h4">
                                Dogs Owned
                            </Typography>
                        </Box>
                        <Grid container justifyContent="center">
                            {userData.dogs.map((dog, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Card className={classes.dogCard}>
                                        <CardContent>
                                            <Typography className={classes.title} variant="h6">
                                                {dog.name}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Breed:</strong> {dog.breed}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Age:</strong> {dog.age} years
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                ) :
                (
                    <Grid container justifyContent="center">
                        <Typography variant="h1">Please login!</Typography>
                    </Grid>
                )
            }

        </>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    card: {
        minWidth: 275,
        marginBottom: theme.spacing(2)
    },
    title: {
        fontSize: 20,
    },
    dogCard: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    dogsOwnedTitle: {
        marginBottom: theme.spacing(2),
        textAlign: "center",
    },
}));
