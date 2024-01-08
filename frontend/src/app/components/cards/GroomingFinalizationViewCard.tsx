import {Dog, Grooming, TimeSlot} from "@/app/util/types";
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";

interface GroomingFinalizationViewProps {
    timeSlot: TimeSlot | null;
    dog: Dog;
    grooming: Grooming;
}

export default function GroomingFinalizationViewCard({timeSlot, dog, grooming}: GroomingFinalizationViewProps) {
    if (!timeSlot || !dog || grooming === undefined) return null;

    const start = new Date(timeSlot.start);
    const end = new Date(timeSlot.end);
    const duration = Math.abs(end.getTime() - start.getTime()) / 60000;
    return (
        <Paper elevation={3} style={{padding: '20px'}}>
            <Typography variant="body1">
                Date: {start.toLocaleDateString()} {start.toLocaleTimeString().slice(0, -3)}
            </Typography>
            <Typography variant="body1">
                Dog: {dog.name}
            </Typography>
            <Typography variant="body1">
                Grooming: {grooming.showerOnly ? "Bath/shower only" : "Full grooming"}
            </Typography>
            <Typography variant="body1">
                Duration: {duration} minutes
            </Typography>
        </Paper>
    )
}