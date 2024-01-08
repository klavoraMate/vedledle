import {TimeSlot} from "@/app/util/types";
import Button from "@mui/material/Button";

interface TimeSlotProps {
    timeSlot: TimeSlot;
    onTimeSlotSelect: (timeSlot: TimeSlot) => void;
}

export default function TimeSlotButton({timeSlot, onTimeSlotSelect}: TimeSlotProps) {
    const timeSlotString = new Date(timeSlot.start).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    const handleClick = () => {
        onTimeSlotSelect(timeSlot);
    }
    return (
        <>
            <Button variant="contained" onClick={handleClick}>
                {timeSlotString}
            </Button>
        </>
    )
}