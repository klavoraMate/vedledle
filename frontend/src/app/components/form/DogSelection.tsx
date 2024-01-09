import {getEmail, getJWT} from "@/app/util/JWTDecoder";
import {useEffect, useState} from "react";
import {Dog} from "@/app/util/types";
import ClickableDogCard from "@/app/components/cards/ClickableDogCard";
import {Grid} from "@mui/material";

interface DogSelectionProps {
    setSelectedDog: (dog: Dog) => void;
}

export default function DogSelection({setSelectedDog}: DogSelectionProps) {
    const email = getEmail();
    const jwt = getJWT();
    const [loading, setLoading] = useState(true);
    const [dogs, setDogs] = useState<Dog[] | null>(null);
    const [temporarySelectedDog, setTemporarySelectedDog] = useState<Dog | null>(null);

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
                    setDogs(dogData);
                    setLoading(false);
                }
            }
        } catch (error) {
            console.error('Error while fetching owned dogs:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (email && jwt) {
            fetchDogData();
        }
    }, [email, jwt]);

    function handleDogCardClick(dog: Dog) {
        setSelectedDog(dog);
        setTemporarySelectedDog(dog);
    }

    return (
        <div>
            <Grid container justifyContent="center" >
                {dogs ? (dogs.map((dog, index) => (
                    <Grid item xs={12} sm={6} key={index} >
                        <ClickableDogCard
                            dog={dog} key={index}
                            onClick={() => handleDogCardClick(dog)}
                            isSelected={temporarySelectedDog === dog}/>
                    </Grid>
                ))) : "Loading your dogs..."}
            </Grid>
        </div>
    );
}