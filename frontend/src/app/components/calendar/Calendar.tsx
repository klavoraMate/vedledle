"use client"
import {Dog, Grooming, TimeSlot} from "@/app/util/types";
import {useState} from "react";
import {getEmail, getJWT} from "@/app/util/JWTDecoder";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import GroomingFinalizationViewCard from "@/app/components/cards/GroomingFinalizationViewCard";
import SubmitButton from "@/app/components/buttons/SubmitButton";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TimeSlotView from "@/app/components/calendar/TimeSlotView";
import {PRIMARY, SECONDARY, TEXT_DARK} from "@/app/util/styleConstants";
import {useRouter} from "next/navigation";
import DialogContainer from "@/app/components/container/DialogContainer";

interface CalendarProps {
    dog: Dog | null;
    grooming: Grooming | null;
}

export default function Calendar({dog, grooming}: CalendarProps) {
    const email = getEmail();
    const jwt = getJWT();
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState<string>("");
    const router = useRouter();
    const [rerender, setRerender] = useState<boolean>(false);

    const handleAccept = () => async () => {
        try {
            if (email && jwt && selectedTimeSlot && dog && grooming !== null) {
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
                    router.push("/dogs");
                } else {
                    setResponse("Reservation failed! Try again.");
                    setRerender(!rerender)
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
            <TimeSlotView dog={dog} grooming={grooming} onTimeSlotSelect={onTimeSlotSelect} rerender={rerender}/>
            <DialogContainer open={open} title='Finalize Your Booking'>
                <DialogContent>
                    {response === "" ?
                        <>
                            <GroomingFinalizationViewCard timeSlot={selectedTimeSlot} dog={dog} grooming={grooming}/>
                            <Grid container justifyContent='space-evenly'>
                                <SubmitButton text={"Accept"} disabled={false} onClick={handleAccept()}/>
                                <SubmitButton text={"Cancel"} disabled={false} onClick={() => setOpen(false)}/>
                            </Grid>
                        </>
                        : <>
                            <Typography variant="h6">{response}</Typography>
                            <Grid container justifyContent='right'>
                                <SubmitButton text={"Cancel"} disabled={false} onClick={() => setOpen(false)}/>
                            </Grid>
                        </>
                    }
                </DialogContent>
            </DialogContainer>
        </>
    )
}

