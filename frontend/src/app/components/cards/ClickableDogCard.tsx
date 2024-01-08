import {Dog} from "@/app/util/types";
import {SECONDARY, TEXT_BACKGROUND_NOT_SELECTED, TEXT_BACKGROUND_SELECTED, TEXT_LIGHT} from "@/app/util/styleConstants";
import {Card, CardContent, Typography} from "@mui/material";
import React from "react";

interface ClickableDogCardProps {
    dog: Dog;
    onClick: () => void;
    isSelected: boolean;
}

export default function ClickableDogCard({dog, onClick, isSelected}: ClickableDogCardProps) {
    const handleClick = () => {
        onClick();
    };

    return (
        <div style={divStyle} onClick={handleClick}>
            <Card sx={isSelected ? selectedStyle : notSelectedStyle}>
                <CardContent>
                    <Typography sx={isSelected? selectedTitleStyle:notSelectedTitleStyle} variant="h6">
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
    );
}
const cardStyle = {
    cursor: 'pointer',
    borderRadius: 10,
    height: '100%',
}

const selectedStyle = {
    ...cardStyle,
    border: `5px solid ${SECONDARY}`,
}
const notSelectedStyle = {
    ...cardStyle,
    border: `5px dashed ${TEXT_LIGHT}`,
}

const titleStyle = {
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
};

const selectedTitleStyle = {
    ...titleStyle,
    background: TEXT_BACKGROUND_SELECTED,
}

const notSelectedTitleStyle = {
    ...titleStyle,
    background: TEXT_BACKGROUND_NOT_SELECTED,
}

const divStyle = {
    height: '100%',
    padding: '1rem',
}