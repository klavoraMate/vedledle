import {Dog, Grooming, TimeSlot} from "@/app/util/types";
import Typography from "@mui/material/Typography";
import {DogAttributeNameStyle, DogAttributeValueStyle} from "@/app/util/styleConstants";
import toDateAndTime from "@/app/util/parser";
import durationInMinutes from "@/app/util/calculation";

interface GroomingFinalizationViewProps {
    timeSlot: TimeSlot | null;
    dog: Dog | null;
    grooming: Grooming | null;
}

export default function GroomingFinalizationViewCard({timeSlot, dog, grooming}: GroomingFinalizationViewProps) {
    if (!timeSlot || !dog || grooming === null) return null;

    const start = new Date(timeSlot.start);
    const end = new Date(timeSlot.end);
    const duration = durationInMinutes(start, end);
    return (
        <div style={divStyle}>
            <table>
                <tr>
                    <td>
                        <Typography sx={DogAttributeNameStyle} variant="body1">
                            Date:
                        </Typography>
                    </td>
                    <td>
                        <Typography sx={DogAttributeValueStyle} variant="body1">
                            {toDateAndTime(start)}
                        </Typography>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Typography sx={DogAttributeNameStyle} variant="body1">
                            Dog name:
                        </Typography>
                    </td>
                    <td>
                        <Typography sx={DogAttributeValueStyle} variant="body1">
                            {dog.name}
                        </Typography>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Typography sx={DogAttributeNameStyle} variant="body1">
                            Grooming:
                        </Typography>
                    </td>
                    <td>
                        <Typography sx={DogAttributeValueStyle} variant="body1">
                            {grooming.showerOnly ? "Bath/shower only" : "Full grooming"}
                        </Typography>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Typography sx={DogAttributeNameStyle} variant="body1">
                            Duration:
                        </Typography>
                    </td>
                    <td>
                        <Typography sx={DogAttributeValueStyle} variant="body1">
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
