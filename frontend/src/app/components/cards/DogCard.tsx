import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {Dog} from "@/app/util/types";

interface DogCardProps {
    dog: Dog;
}

export default function DogCard({dog}:DogCardProps){

    return (
        <Card >
            <CardContent>
                <Typography sx={titleStyle} variant="h6">
                    {dog?dog.name:"Loading name..."}
                </Typography>
                <Typography variant="body1">
                    <strong>Breed:</strong> {dog?dog.breed:"Loading breed..."}
                </Typography>
                <Typography variant="body1">
                    <strong>Size:</strong> {dog?dog.size:"Loading size..."}
                </Typography>
                <Typography variant="body1">
                    <strong>Age:</strong> {dog?dog.age+" years":"Loading age..."}
                </Typography>
            </CardContent>
        </Card>
    );
};


const titleStyle = {
    fontSize: 20,
};
