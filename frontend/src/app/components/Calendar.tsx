"use client"
import {Dog, Grooming, TimeSlot} from "@/app/util/types";
import {useEffect, useState} from "react";
import {getEmail, getJWT} from "@/app/util/JWTDecoder";

interface CalendarProps {
    dog: Dog;
    grooming: Grooming;
}

export default function Calendar({dog, grooming}: CalendarProps) {
    const email = getEmail();
    const jwt = getJWT();
    const [timeSlots, setTimeSlots] = useState<TimeSlot[] | null>(null);
    const [loading, setLoading] = useState(true);
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
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                setLoading(false);
            }

    }
    useEffect(() => {
        fetchTimeStamps();
    }, [])

    return (
        <div>
            <h1>Calendar</h1>
            {timeSlots ? timeSlots.map((timeSlot, index) => (
                <div key={index}>
                    {timeSlot.start}
                    {timeSlot.end}
                </div>
            )) : "Loading..."}
        </div>
    )
}