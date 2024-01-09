import {Dog, Grooming, TimeSlot} from "@/app/util/types";
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";
import {SECONDARY, TEXT_BACKGROUND_SELECTED, TEXT_DARK, TEXT_LIGHT} from "@/app/util/styleConstants";

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
        <div style={divStyle}>
            <table>
                <tr>
                    <td>
                        <Typography sx={titleStyle} variant="body1">
                            Date:
                        </Typography>
                    </td>
                    <td>
                        <Typography sx={valueStyle} variant="body1">
                            {start.toLocaleDateString()} {start.toLocaleTimeString().slice(0, -3)}
                        </Typography>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Typography sx={titleStyle} variant="body1">
                            Dog name:
                        </Typography>
                    </td>
                    <td>
                        <Typography sx={valueStyle} variant="body1">
                            {dog.name}
                        </Typography>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Typography sx={titleStyle} variant="body1">
                            Grooming:
                        </Typography>
                    </td>
                    <td>
                        <Typography sx={valueStyle} variant="body1">
                            {grooming.showerOnly ? "Bath/shower only" : "Full grooming"}
                        </Typography>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Typography sx={titleStyle} variant="body1">
                            Duration:
                        </Typography>
                    </td>
                    <td>
                        <Typography sx={valueStyle} variant="body1">
                            {duration} minutes
                        </Typography>
                    </td>
                </tr>
            </table>
        </div>
    )
}

const divStyle = {
    padding: '2rem',
}

const titleStyle = {
    textAlign:'left',
    fontSize:'1.5rem',
    fontWeight: 'bold',
    color: TEXT_DARK,
    border: `0.3rem dotted ${TEXT_LIGHT}`,
    borderRadius: '3rem',
    padding: '0.5rem',
    marginBottom:'0.3rem',
}

const valueStyle = {
    textAlign:'right',
    fontSize:'1.5rem',
    fontWeight: 'bold',
    color: SECONDARY,
    border: `0.3rem dotted ${TEXT_BACKGROUND_SELECTED}`,
    borderRadius: '3rem',
    padding: '0.5rem',
}