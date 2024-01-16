import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import {Dog, DogWithUpcomingReservation} from "@/app/util/types";
import toDateAndTime from "@/app/util/parser";
import durationInMinutes from "@/app/util/calculation";
import {
    BUFF, CHINESE_ROSE, CHINESE_VIOLET,
    LIGHT_CORAL,
    PRIMARY,
    SECONDARY,
    SECONDARY_TRANSPARENT,
    TEXT_DARK,
    TEXT_LIGHT, DogAttributeValueStyle, YINMN_BLUE, DogAttributeNameStyle
} from "@/app/util/styleConstants";

interface DogCardProps {
    dogWithReservation: DogWithUpcomingReservation;
}

export default function DogCard({dogWithReservation}: DogCardProps) {
    const start = dogWithReservation.start ? new Date(dogWithReservation.start) : null;
    const end = dogWithReservation.end ? new Date(dogWithReservation.end) : null;

    return (
        <>
            <Card sx={dogCardStyle}>
                <CardContent>
                    <Typography sx={titleStyle} variant="h6">
                        {dogWithReservation ? dogWithReservation.dog.name : "Loading name..."}
                    </Typography>
                    <table style={tableStyle}>
                        <tr>
                            <td style={tableColumnStyle}>
                                <Typography sx={DogAttributeNameStyle} variant="body1">
                                    <strong>Breed: </strong>
                                </Typography>
                            </td>
                            <td>
                                <Typography sx={DogAttributeValueStyle} variant="body1">
                                    {dogWithReservation ? dogWithReservation.dog.breed : "Loading breed..."}
                                </Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography sx={DogAttributeNameStyle} variant="body1">
                                    <strong>Size: </strong>
                                </Typography>
                            </td>
                            <td>
                                <Typography sx={DogAttributeValueStyle} variant="body1">
                                    {dogWithReservation ? dogWithReservation.dog.size : "Loading size..."}
                                </Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography sx={DogAttributeNameStyle} variant="body1">
                                    <strong>Age: </strong>
                                </Typography>
                            </td>
                            <td>
                                <Typography sx={DogAttributeValueStyle} variant="body1">
                                    {dogWithReservation ? dogWithReservation.dog.age + " years" : "Loading age..."}
                                </Typography>
                            </td>
                        </tr>
                    </table>
                </CardContent>
            </Card>
            <Card sx={reservationCardStyle}>
                <CardContent>
                    {dogWithReservation && start != null && end != null ? (
                            <>
                                <Typography sx={reservationTitleStyle}>
                                    <strong>Upcoming reservation:</strong>
                                </Typography>
                                <table style={tableStyle}>
                                    <tr>
                                        <td style={tableColumnStyle}>
                                            <Typography sx={reservationAttributeNameStyle} variant="body1">
                                                <strong>Date:</strong>
                                            </Typography>
                                        </td>
                                        <td>
                                            <Typography sx={reservationAttributeValueStyle} variant="body1">
                                                {toDateAndTime(start)}
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Typography sx={reservationAttributeNameStyle} variant="body1">
                                                <strong>Duration:</strong>
                                            </Typography>
                                        </td>
                                        <td>
                                            <Typography sx={reservationAttributeValueStyle} variant="body1">
                                                {durationInMinutes(start, end)} minutes
                                            </Typography>
                                        </td>
                                    </tr>
                                </table>
                            </>
                        ) :
                        <Typography sx={reservationTitleStyle} variant="body1">
                            <strong>No upcoming reservation.</strong>
                        </Typography>
                    }
                </CardContent>
            </Card>

        </>
    );
};

const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: CHINESE_VIOLET,
    textAlign: 'center',
    marginBottom: '0.5rem',
    backgroundColor: LIGHT_CORAL,
    borderRadius: '2rem',
};

const dogCardStyle = {
    backgroundColor: BUFF,
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    borderTop: `0.3rem solid ${TEXT_LIGHT}`,
    borderRight: `0.3rem solid ${TEXT_LIGHT}`,
    borderLeft: `0.3rem solid ${TEXT_LIGHT}`,
    borderBottom: `0.3rem dashed ${TEXT_LIGHT}`,
};
const reservationCardStyle = {
    backgroundColor: CHINESE_ROSE,
    borderBottomLeftRadius: '1rem',
    borderBottomRightRadius: '1rem',
    borderTop: `0.3rem dashed${CHINESE_VIOLET}`,
    borderBottom: `0.3rem solid ${CHINESE_VIOLET}`,
    borderRight: `0.3rem solid ${CHINESE_VIOLET}`,
    borderLeft: `0.3rem solid ${CHINESE_VIOLET}`,
};

const reservationAttributeNameStyle = {
    color: SECONDARY,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'left',
    borderLeft: `0.3rem solid ${TEXT_DARK}`,
    borderBottom: `0.3rem solid ${TEXT_DARK}`,
    borderTop: `0.3rem solid ${TEXT_DARK}`,
    borderTopLeftRadius: '1rem',
    borderBottomLeftRadius: '1rem',
    padding: '0.5rem',
};

const reservationAttributeValueStyle = {
    color: YINMN_BLUE,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'right',
    borderRight: `0.3rem solid ${SECONDARY}`,
    borderBottom: `0.3rem solid ${SECONDARY}`,
    borderTop: `0.3rem solid ${SECONDARY}`,
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
    padding: '0.5rem',
};

const reservationTitleStyle = {
    color: BUFF,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
}

const tableStyle = {
    padding: '2rem',
    width: '100%',
}
const tableColumnStyle = {
    width: '30%',
}