'use client'
import {Dog} from "@/app/util/types";
import {SECONDARY, TEXT_BACKGROUND_NOT_SELECTED, TEXT_BACKGROUND_SELECTED, TEXT_LIGHT} from "@/app/util/styleConstants";
import {Card, CardContent, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {getEmail, getJWT} from "@/app/util/JWTDecoder";

interface ClickableDogCardProps {
    dog: Dog;
    onClick: () => void;
    isSelected: boolean;
}

export default function ClickableDogCard({dog, onClick, isSelected}: ClickableDogCardProps) {
    const jwt = getJWT();
    const email = getEmail();
    const [hasUpcomingReservation, setHasUpcomingReservation] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const fetchDogHasUpcomingReservation = async () => {
        if (jwt && email && dog) {
            try {
                const response = await fetch(`/api/dog/hasUpcomingReservation?email=${email}&dogName=${dog.name}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });

                if (response.ok) {
                    const responseValue: boolean = await response.json();
                    if (responseValue) {
                        setHasUpcomingReservation(true);
                    }
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
    }
    const handleClick = () => {
        if (!hasUpcomingReservation)
            onClick();
    };

    useEffect(() => {
        fetchDogHasUpcomingReservation();
    }, []);

    return (<>
            {!loading ? <div style={divStyle} onClick={handleClick}>
                    <Card sx={!hasUpcomingReservation ?
                        (isSelected ? selectedStyle : notSelectedStyle) :
                        unavailableCardStyle}>
                        <CardContent>
                            <Typography sx={!hasUpcomingReservation ?
                                (isSelected ? selectedTitleStyle : notSelectedTitleStyle) :
                                unavailableTitleStyle} variant="h6">
                                {dog ? dog.name : "Loading name..."}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Breed:</strong> {dog ? dog.breed : "Loading breed..."}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Size:</strong> {dog ? dog.size : "Loading size..."}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Age:</strong> {dog ? dog.age + " years" : "Loading age..."}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                :
                <div>
                    <Card sx={notSelectedStyle}>
                        <CardContent>
                            <Typography sx={notSelectedTitleStyle}>
                                {"Loading your dog's information..."}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>}
        </>
    );
}

const unavailableCardStyle = {
    cursor: 'not-allowed',
    borderRadius: 10,
    border: `5px solid gray`,
}

const availableCardStyle = {
    cursor: 'pointer',
    borderRadius: 10,
}

const selectedStyle = {
    ...availableCardStyle,
    border: `5px solid ${SECONDARY}`,
}
const notSelectedStyle = {
    ...availableCardStyle,
    border: `5px dashed ${TEXT_LIGHT}`,
}

const unavailableTitleStyle = {
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
    background: 'gray',
};

const availableTitleStyle = {
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
};

const selectedTitleStyle = {
    ...availableTitleStyle,
    background: TEXT_BACKGROUND_SELECTED,
}

const notSelectedTitleStyle = {
    ...availableTitleStyle,
    background: TEXT_BACKGROUND_NOT_SELECTED,
}

const divStyle = {
    padding: '1rem',
}