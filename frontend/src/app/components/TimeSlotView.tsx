'use client';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimeSlotButton from "@/app/components/buttons/TimeSlotButton";
import {Dog, Grooming, TimeSlot} from "@/app/util/types";
import {useEffect, useState} from "react";
import {getEmail, getJWT} from "@/app/util/JWTDecoder";

interface TimeSlotViewProps {
    dog: Dog;
    grooming: Grooming;
    onTimeSlotSelect: (timeSlot: TimeSlot) => void;
}
export default function TimeSlotView({dog, grooming, onTimeSlotSelect}: TimeSlotViewProps) {
    const email = getEmail();
    const jwt = getJWT();
    const [timeSlots, setTimeSlots] = useState<TimeSlot[] | null>(null);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const groupedTimeSlots = groupByDay(timeSlots || []);
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

    useEffect(() => {
        fetchTimeStamps();
    }, []);


    return (
        <Grid container spacing={2}>
            {Object.entries(groupedTimeSlots).map(([day, timeSlots]) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={day}>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <Typography variant="h6">{day}</Typography>
                    </Box>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        {timeSlots.map((timeSlot, index) => (
                            <Grid item key={index}>
                                <TimeSlotButton timeSlot={timeSlot} onTimeSlotSelect={onTimeSlotSelect}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}