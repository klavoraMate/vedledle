import {Dog, Grooming} from "@/app/util/types";
import FormGroup from '@mui/material/FormGroup';
import {FormControl, FormControlLabel, Radio, RadioGroup, Tooltip} from "@mui/material";
import {Info} from "@mui/icons-material";
import DogSelection from "@/app/components/form/DogSelection";
import SubmitButton from "@/app/components/buttons/SubmitButton";
import Typography from "@mui/material/Typography";
import {SECONDARY, TEXT_LIGHT} from "@/app/util/styleConstants";

interface GroomingFormProps {
    dog: Dog;
    setDog: (dog: Dog) => void;
    grooming: Grooming;
    setGrooming: (grooming: Grooming) => void;
    setIsGroomingFormFilled: (isGroomingFormFilled: boolean) => void;
}

export default function GroomingForm({dog, setDog, grooming, setGrooming, setIsGroomingFormFilled}: GroomingFormProps) {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setGrooming(event.target.value === "Bath/shower only" ? {showerOnly: true} : {showerOnly: false});
    }

    function handleNext() {
        setIsGroomingFormFilled(true);
    }

    return (
        <div>
            <Typography sx={formTextStyle}>Select your dog: </Typography>
            <DogSelection setSelectedDog={setDog}/>
            <Typography sx={formTextStyle}>Select grooming type: </Typography>
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
                                control={<Radio sx={radioStyle}/>}
                                label={
                                    <Typography sx={radioTextStyle}>
                                        Bath/shower only
                                    </Typography>
                                }
                            />
                            <FormControlLabel
                                value="Full grooming"
                                control={<Radio sx={radioStyle}/>}
                                label={
                                    <Typography sx={radioTextStyle}>
                                        Full grooming
                                        <Tooltip title="Bath/shower, whole body trimming, nail trimming">
                                            <Info style={{marginLeft: 5, verticalAlign: "middle"}}/>
                                        </Tooltip>
                                    </Typography>
                                }
                            />
                        </RadioGroup>
                    </FormControl>
                </FormGroup>
                <div style={{textAlign: 'right'}}>
                    <SubmitButton text={"Next"} disabled={!(grooming && dog)} onClick={handleNext}/>
                </div>
            </form>
        </div>
    );
}

const formTextStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
};

const radioStyle = {
    color: TEXT_LIGHT,
    '&.Mui-checked': {
        color: SECONDARY,
    },
};

const radioTextStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
};

