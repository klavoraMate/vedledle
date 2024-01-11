'use client';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimeSlotButton from "@/app/components/buttons/TimeSlotButton";
import {Dog, Grooming, TimeSlot} from "@/app/util/types";
import {useEffect, useState} from "react";
import {getEmail, getJWT} from "@/app/util/JWTDecoder";
import DayCard from "@/app/components/cards/DayCard";

interface TimeSlotViewProps {
    dog: Dog | null;
    grooming: Grooming|null;
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
               <DayCard key={day} day={day} timeSlots={timeSlots} onTimeSlotSelect={onTimeSlotSelect}/>
            ))}
        </Grid>
    )
}