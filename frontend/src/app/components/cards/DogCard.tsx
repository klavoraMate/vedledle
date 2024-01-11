import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import {Dog, DogWithUpcomingReservation} from "@/app/util/types";
import toDateAndTime from "@/app/util/parser";
import durationInMinutes from "@/app/util/calculation";

interface DogCardProps {
    dogWithReservation: DogWithUpcomingReservation;
}

export default function DogCard({dogWithReservation}: DogCardProps) {
    const start = dogWithReservation.start ? new Date(dogWithReservation.start) : null;
    const end = dogWithReservation.end ? new Date(dogWithReservation.end) : null;

    return (
        <Card>
            <CardContent>
                <Typography sx={titleStyle} variant="h6">
                    {dogWithReservation ? dogWithReservation.dog.name : "Loading name..."}
                </Typography>
                <Typography variant="body1">
                    <strong>Breed:</strong> {dogWithReservation ? dogWithReservation.dog.breed : "Loading breed..."}
                </Typography>
                <Typography variant="body1">
                    <strong>Size:</strong> {dogWithReservation ? dogWithReservation.dog.size : "Loading size..."}
                </Typography>
                <Typography variant="body1">
                    <strong>Age:</strong> {dogWithReservation ? dogWithReservation.dog.age + " years" : "Loading age..."}
                </Typography>
                {dogWithReservation && start != null && end != null ? (
                    <>
                        <Typography variant="body1">
                            <strong>Upcoming reservation:</strong> {toDateAndTime(start)}
                        </Typography>
                        <Typography>
                            <strong>Duration:</strong>{durationInMinutes(start, end)}
                        </Typography>
                    </>
                ) : null
                }
            </CardContent>
        </Card>
    );
};


const titleStyle = {
    fontSize: 20,
};
