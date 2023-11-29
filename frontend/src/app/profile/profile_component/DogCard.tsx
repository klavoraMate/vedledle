import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import {DogData} from "@/util/types";

interface DogCardProps {
    dog: DogData;
}

export default function DogCard({dog}:DogCardProps){
    const classes = useStyles();

    return (
        <Card className={classes.dogCard}>
            <CardContent>
                <Typography className={classes.title} variant="h6">
                    {dog.name}
                </Typography>
                <Typography variant="body1">
                    <strong>Breed:</strong> {dog.breed.name}
                </Typography>
                <Typography variant="body1">
                    <strong>Size:</strong> {dog.size.name}
                </Typography>
                <Typography variant="body1">
                    <strong>Age:</strong> {dog.age} years
                </Typography>
            </CardContent>
        </Card>
    );
};

const useStyles = makeStyles((theme) => ({
    dogCard: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    title: {
        fontSize: 20,
    },
}));