import {Box, Container, Grid, Typography} from "@mui/material";
import { getJWT} from "@/app/util/JWTDecoder";
import Layout from "@/app/components/layout/Layout";
import UserInfoCard from "@/app/components/cards/UserInfoCard";
import DogCardContainer from "@/app/components/cards/DogCardContainer";

export default function Profile() {
    const jwt = getJWT();

    return (
        <Layout>
            {jwt ? (
                <Container sx={containerStyle} maxWidth="md">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={6}>
                            <UserInfoCard/>
                        </Grid>
                    </Grid>
                    <Box textAlign="center">
                        <Typography sx={dogsOwnedStyle} variant="h4">
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

const containerStyle = {
    marginTop: 20,
    marginBottom: 20,
}
const dogsOwnedStyle = {
    marginBottom: 20,
    textAlign: "center",
}

