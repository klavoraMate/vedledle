import {Dog} from "@/util/types";
import {Grid} from "@mui/material";
import DogCard from "@/app/profile/profile_component/DogCard";
import {getEmail, getJWT} from "@/util/JWTDecoder";
import {useEffect, useState} from "react";
import DogUploadButton from "@/app/profile/profile_component/DogUploadButton";

export default function DogCardContainer() {
    const email = getEmail();
    const jwt = getJWT();
    const [loading, setLoading] = useState(true);
    const [dogData, setDogData] = useState<Dog[] | null>(null);
    const fetchDogData = async () => {
        try {
            if (email) {
                setLoading(true);
                const response = await fetch(`/api/dog/all?email=${encodeURIComponent(email.toString())}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });

                if (response.ok) {
                    const dogData: Dog[] = await response.json();
                    setDogData(dogData);
                    setLoading(false);
                }
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setLoading(false);
        }
    };
    const handleCloseCallback = () => {
        fetchDogData();
    }

    useEffect(() => {
        if (email && jwt) {
            fetchDogData();
        }
    }, [email, jwt]);
    return (
        <Grid container justifyContent="center">
            {!loading && dogData ? dogData.map((dog, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <DogCard dog={dog} />
                </Grid>
            )): "Loading..."}
            <Grid item xs={12} sm={6}>
                <DogUploadButton onCloseCallback={handleCloseCallback}/>
            </Grid>
        </Grid>
    )
}