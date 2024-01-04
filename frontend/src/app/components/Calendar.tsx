"use client"
import {Dog, Grooming, TimeSlot} from "@/app/util/types";
import {useEffect, useState} from "react";
import {getEmail, getJWT} from "@/app/util/JWTDecoder";
import TimeSlotButton from "@/app/components/buttons/TimeSlotButton";

interface CalendarProps {
    dog: Dog;
    grooming: Grooming;
}

export default function Calendar({dog, grooming}: CalendarProps) {
    const email = getEmail();
    const jwt = getJWT();
    const [timeSlots, setTimeSlots] = useState<TimeSlot[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
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
            {timeSlots ? timeSlots.map((timeSlot, index) => (
                <div key={index}>
                    <TimeSlotButton timeSlot={timeSlot} setSelectedTimeSlot={setSelectedTimeSlot}/>
                </div>
            )) : "Loading..."}
        </div>
    )
}