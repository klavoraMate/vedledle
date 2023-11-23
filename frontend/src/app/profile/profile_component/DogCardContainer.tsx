import {DogData} from "@/util/types";
import {Grid} from "@mui/material";
import DogCard from "@/app/profile/profile_component/DogCard";
import {getEmail, getJWT} from "@/util/JWTDecoder";
import {useEffect, useState} from "react";

export default function DogCardContainer() {
    const email = getEmail();
    const jwt = getJWT();
    const [loading, setLoading] = useState(true);
    const [dogData, setDogData] = useState<DogData[] | null>(null);
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
                    const dogData: DogData[] = await response.json();
                    setDogData(dogData);
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
            fetchDogData();
        }
    }, [email, jwt]);
    return (
        <Grid container justifyContent="center">
            {!loading && dogData ? dogData.map((dog, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <DogCard dog={dog}/>
                </Grid>
            )): "Loading..."}
        </Grid>
    )
}