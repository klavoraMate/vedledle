import {Dog, Grooming} from "@/util/types";
import FormGroup from '@mui/material/FormGroup';
import {FormControl, FormControlLabel, Radio, RadioGroup, Tooltip} from "@mui/material";
import {Info} from "@mui/icons-material";
import DogSelection from "@/app/reservation/reservation_component/DogSelection";

interface GroomingFormProps {
    dog: Dog;
    setDog: (dog: Dog) => void;
    grooming: Grooming;
    setGrooming: (grooming: Grooming) => void;
}

export default function GroomingForm({dog, setDog, grooming, setGrooming}: GroomingFormProps) {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setGrooming(event.target.value === "Bath/shower only" ? {showerOnly: true} : {showerOnly: false});
    }

    return (
        <div>
            <h2>Select your dog: </h2>
            <DogSelection setSelectedDog={setDog}/>
            <h2>Select grooming type: </h2>
            <form>
                <FormGroup>
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="grooming"
                            name="grooming"
                            value={grooming}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="Bath/shower only"
                                control={<Radio/>}
                                label="Bath/shower only"
                            />
                            <FormControlLabel
                                value="Full grooming"
                                control={<Radio/>}
                                label={
                                    <div>
                                        Full grooming
                                        <Tooltip title="Bath/shower, whole body trimming, nail trimming">
                                            <Info style={{marginLeft: 5, verticalAlign: "middle"}}/>
                                        </Tooltip>
                                    </div>
                                }
                            />
                        </RadioGroup>
                    </FormControl>
                </FormGroup>
            </form>
        </div>
    );
}
