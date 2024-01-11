'use client'
import {Dog, DogWithUpcomingReservation} from "@/app/util/types";
import {Grid} from "@mui/material";
import DogCard from "@/app/components/cards/DogCard";
import {getEmail, getJWT} from "@/app/util/JWTDecoder";
import {useEffect, useState} from "react";
import DogUploadButton from "@/app/components/buttons/DogUploadButton";

export default function DogCardContainer() {
    const email = getEmail();
    const jwt = getJWT();
    const [loading, setLoading] = useState(true);
    const [dogs, setDogs] = useState<DogWithUpcomingReservation[] | null>(null);
    const fetchDogData = async () => {
        try {
            if (email) {
                setLoading(true);
                const response = await fetch(`/api/dog/all/withReservations?email=${encodeURIComponent(email.toString())}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });

                if (response.ok) {
                    const dogData: DogWithUpcomingReservation[] = await response.json();
                    setDogs(dogData);
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
            {!loading && dogs ? dogs.map((dog, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <DogCard dogWithReservation={dog} />
                </Grid>
            )): "Loading..."}
            <Grid item xs={12} sm={6}>
                <DogUploadButton onCloseCallback={handleCloseCallback}/>
            </Grid>
        </Grid>
    )
}