import {TimeSlot} from "@/app/util/types";
import Button from "@mui/material/Button";

interface TimeSlotProps {
    timeSlot: TimeSlot;
    handleSelectTimeSlot: (timeSlot: TimeSlot) => void;
}
export default function TimeSlot({timeSlot, handleSelectTimeSlot}: TimeSlotProps) {
    const timeSlotString = timeSlot.start.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    const handleClick = () => {
        handleSelectTimeSlot(timeSlot);
    }
    return (
        <>
            <Button variant="contained" onClick={handleClick}>
            </Button>
        </>
    )
}