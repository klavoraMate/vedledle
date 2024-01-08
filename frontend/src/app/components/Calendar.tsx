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
import Button from "@mui/material/Button";
import SubmitButton from "@/app/components/buttons/SubmitButton";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Cancel} from "@mui/icons-material";

interface CalendarProps {
    dog: Dog;
    grooming: Grooming;
}

export default function Calendar({dog, grooming}: CalendarProps) {
    const email = getEmail();
    const jwt = getJWT();
    const [timeSlots, setTimeSlots] = useState<TimeSlot[] | null>(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState<string>("");

    const fetchTimeStamps = async () => {
        if (dog && jwt && email && grooming)
            try {
                const response = await fetch(`/api/reservation/timeslots?email=${email}&dogName=${dog.name}&isShowerOnly=${grooming.showerOnly}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });

                if (response.ok) {
                    const timeSlotData: TimeSlot[] = await response.json();
                    setTimeSlots(timeSlotData);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }

    }


    function groupByDay(timeSlots: TimeSlot[]) {
        return timeSlots.reduce((groups, timeSlot) => {
            const date = new Date(timeSlot.start).getDay();
            const dayName = dayNames[date];
            if (!groups[dayName]) {
                groups[dayName] = [];
            }
            groups[dayName].push(timeSlot);
            return groups;
        }, {} as Record<string, TimeSlot[]>);
    }

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
                    fetchTimeStamps();
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

    useEffect(() => {
        openDialog();
    }, [selectedTimeSlot])

    useEffect(() => {
        fetchTimeStamps();
    }, [])

    const groupedTimeSlots = groupByDay(timeSlots || []);

    return (
        <>
            <Grid container spacing={2}>
                {Object.entries(groupedTimeSlots).map(([day, timeSlots]) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={day}>
                        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                            <Typography variant="h6">{day}</Typography>
                        </Box>
                        <Grid container direction="column" justifyContent="center" alignItems="center">
                            {timeSlots.map((timeSlot, index) => (
                                <Grid item key={index}>
                                    <TimeSlotButton timeSlot={timeSlot} setSelectedTimeSlot={setSelectedTimeSlot}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
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