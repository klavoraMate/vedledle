import {TimeSlot} from "@/app/util/types";
import Button from "@mui/material/Button";

interface TimeSlotProps {
    timeSlot: TimeSlot;
    setSelectedTimeSlot: (timeSlot: TimeSlot) => void;
}

export default function TimeSlotButton({timeSlot, setSelectedTimeSlot}: TimeSlotProps) {
    const timeSlotString = new Date(timeSlot.start).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    const handleClick = () => {
        setSelectedTimeSlot(timeSlot);
    }
    return (
        <>
            <Button variant="contained" onClick={handleClick}>
                {timeSlotString}
            </Button>
        </>
    )
}