import {Grid, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimeSlotButton from "@/app/components/buttons/TimeSlotButton";
import {TimeSlot} from "@/app/util/types";
import {SECONDARY, TEXT_DARK, TEXT_LIGHT} from "@/app/util/styleConstants";

interface DayCardProps {
    day: string;
    timeSlots: TimeSlot[];
    onTimeSlotSelect: (timeSlot: TimeSlot) => void;
}
export default function DayCard({day, timeSlots, onTimeSlotSelect}: DayCardProps){
    return(
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={day}>
            <Box display="flex" justifyContent="center" alignItems="center" >
                <Typography sx={dayNameStyle}>{day}</Typography>
            </Box>
            <Grid container direction="column" alignItems="center" >
                {timeSlots.map((timeSlot, index) => (
                    <Grid item key={index}>
                        <TimeSlotButton timeSlot={timeSlot} onTimeSlotSelect={onTimeSlotSelect} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

const dayNameStyle = {
    fontSize: '2rem',
    color: TEXT_LIGHT,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `0.3rem solid ${TEXT_DARK}`,
    borderRadius: '3rem',
    background: SECONDARY,
    padding: '0.8rem',
    marginBottom: "10px",
    width: "100%",
}


