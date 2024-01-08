"use client"
import {Dog, Grooming, TimeSlot} from "@/app/util/types";
import {useEffect, useState} from "react";
import {getEmail, getJWT} from "@/app/util/JWTDecoder";
import TimeSlotButton from "@/app/components/buttons/TimeSlotButton";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import GroomingFinalizationViewCard from "@/app/components/cards/GroomingFinalizationViewCard";
import SubmitButton from "@/app/components/buttons/SubmitButton";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TimeSlotView from "@/app/components/TimeSlotView";

interface CalendarProps {
    dog: Dog;
    grooming: Grooming;
}

export default function Calendar({dog, grooming}: CalendarProps) {
    const email = getEmail();
    const jwt = getJWT();
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState<string>("");

    const handleAccept = () => async () => {
        try {
            if (email && jwt && selectedTimeSlot && dog && grooming !== undefined) {
                const response = await fetch(`/api/reservation?email=${email}&dogName=${dog.name}`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({
                        endDate: selectedTimeSlot.end,
                        startDate: selectedTimeSlot.start
                    }),
                });

                if (response.ok) {
                    setResponse("Reservation successful!");
                } else {
                    setResponse("Reservation failed! Try again.");
                }
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    const openDialog = () => {
        setResponse("");
        setOpen(true);
    }

    const onTimeSlotSelect = (timeSlot: TimeSlot) => {
        setSelectedTimeSlot(timeSlot);
        openDialog()
    }


    return (
        <>
            <TimeSlotView dog={dog} grooming={grooming} onTimeSlotSelect={onTimeSlotSelect}/>
            <Dialog open={open}>
                <DialogTitle>Finalize Your Booking</DialogTitle>
                <DialogContent>
                    {response === "" ?
                        <>
                            <GroomingFinalizationViewCard timeSlot={selectedTimeSlot} dog={dog} grooming={grooming}/>
                            <Grid container justifyContent="center" direction="row">
                                <SubmitButton text={"Accept"} disabled={false} onClick={handleAccept()}/>
                                <SubmitButton text={"Cancel"} disabled={false} onClick={() => setOpen(false)}/>
                            </Grid>
                        </>
                        : <>
                            <Typography variant="h6">{response}</Typography>
                            <Grid container justifyContent="right">
                                <SubmitButton text={"Cancel"} disabled={false} onClick={() => setOpen(false)}/>
                            </Grid>
                        </>
                    }
                </DialogContent>
            </Dialog>
        </>
    )
}