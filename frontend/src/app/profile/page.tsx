'use client'

import {Box, Container, Grid, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import { getJWT} from "@/util/JWTDecoder";
import Layout from "@/general_component/design/Layout";
import UserInfoCard from "@/app/profile/profile_component/UserInfoCard";
import DogCardContainer from "@/app/profile/profile_component/DogCardContainer";
import DogUploadButton from "@/app/profile/profile_component/DogUploadButton";

export default function Profile() {
    const jwt = getJWT();
    const classes = useStyles();

    return (
        <Layout>
            {jwt ? (
                <Container className={classes.container} maxWidth="md">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={6}>
                            <UserInfoCard/>
                        </Grid>
                    </Grid>
                    <Box textAlign="center">
                        <Typography className={classes.dogsOwnedTitle} variant="h4">
                            Dogs Owned
                        </Typography>
                    </Box>
                    <DogCardContainer/>
                </Container>
            ) : (
                <Grid container justifyContent="center">
                    <Typography variant="h1">Loading...</Typography>
                </Grid>
            )}
        </Layout>
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
