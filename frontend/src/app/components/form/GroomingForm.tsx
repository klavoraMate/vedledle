import {Dog, Grooming} from "@/app/util/types";
import FormGroup from '@mui/material/FormGroup';
import {FormControl, FormControlLabel, Grid, Radio, RadioGroup, Tooltip} from "@mui/material";
import {Info} from "@mui/icons-material";
import DogSelection from "@/app/components/form/DogSelection";
import SubmitButton from "@/app/components/buttons/SubmitButton";
import Typography from "@mui/material/Typography";
import {SECONDARY, TEXT_LIGHT} from "@/app/util/styleConstants";
import {useState} from "react";

interface GroomingFormProps {
    dog: Dog | null;
    setDog: (dog: Dog) => void;
    grooming: Grooming | null;
    setGrooming: (grooming: Grooming) => void;
    setIsGroomingFormFilled: (isGroomingFormFilled: boolean) => void;
}

export default function GroomingForm({dog, setDog, grooming, setGrooming, setIsGroomingFormFilled}: GroomingFormProps) {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setGrooming(event.target.value === "shower" ? {showerOnly: true} : {showerOnly: false});
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
                        <Grid container  alignItems='center' spacing={2}>
                            <Grid item xs={1}>
                                <Radio checked={grooming?grooming.showerOnly:false} value='shower' onChange={handleChange} sx={radioStyle}/>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography sx={radioTextStyle}>
                                    Bath/shower only
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Radio checked={grooming?!grooming.showerOnly:false} value='full' onChange={handleChange} sx={radioStyle}/>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography sx={radioTextStyle}>
                                    Full grooming
                                    <Tooltip title="Bath/shower, whole body trimming, nail trimming">
                                        <Info style={{marginLeft: 5, verticalAlign: "middle"}}/>
                                    </Tooltip>
                                </Typography>
                            </Grid>
                        </Grid>
                    </FormControl>
                </FormGroup>
                <div style={{textAlign: 'right'}}>
                    <SubmitButton text={"Next"} disabled={!(grooming && dog)} onClick={handleNext}/>
                </div>
            </form>
        </div>
    )
        ;
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

