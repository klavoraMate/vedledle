import {TimeSlot} from "@/app/util/types";
import Button from "@mui/material/Button";
import {PRIMARY, SECONDARY, TEXT_DARK, TEXT_LIGHT} from "@/app/util/styleConstants";

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
            <Button variant="contained" onClick={handleClick} sx={buttonStyle}>
                {timeSlotString}
            </Button>
        </>
    )
}

const buttonStyle = {
    right: "15px",
    width: "120%",
    height: '90%',
    fontSize: '2rem',
    fontFamily: "'Digital-7 Mono', sans-serif",
    color: SECONDARY,
    padding: '1.2rem',
    border: `0.3rem dotted ${TEXT_DARK}`,
    borderRadius: "1rem",
    backgroundColor: TEXT_LIGHT,
    "&:hover": {
        backgroundColor: SECONDARY,
        color: PRIMARY,
        border: `0.3rem solid ${TEXT_LIGHT}`,
    },
    "&:active": {
        backgroundColor: TEXT_LIGHT,
        color: SECONDARY,
        border: `0.3rem solid ${TEXT_LIGHT}`,
    }
}