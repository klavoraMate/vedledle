import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import {Dog} from "@/app/util/types";

interface DogCardProps {
    dog: Dog;
}

export default function DogCard({dog}:DogCardProps){
    const classes = useStyles();

    return (
        <Card className={classes.dogCard}>
            <CardContent>
                <Typography className={classes.title} variant="h6">
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

const useStyles = makeStyles((theme) => ({
    dogCard: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    title: {
        fontSize: 20,
    },
}));