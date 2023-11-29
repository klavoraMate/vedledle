import {Dog, Grooming} from "@/util/types";

interface CalendarProps {
    dog: Dog;
    grooming: Grooming;
}
export default function Calendar({dog, grooming}: CalendarProps) {
    const groomingTime = calculateGroomingTime(dog,grooming);

    function calculateGroomingTime(dog: Dog, grooming: Grooming) {
        
    }
return (
        <div>
            <h1>Calendar</h1>
        </div>
    )
}