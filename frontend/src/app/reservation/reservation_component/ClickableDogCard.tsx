import DogCard from "@/app/profile/profile_component/DogCard";
import {Dog} from "@/util/types";
import {makeStyles} from "@material-ui/core/styles";
import {SECONDARY, TEXT_LIGHT} from "@/util/styleConstants";

interface ClickableDogCardProps {
    dog: Dog;
    onClick: () => void;
    isSelected: boolean;
}

export default function ClickableDogCard({dog, onClick, isSelected}: ClickableDogCardProps) {
    const classes = useStyles();
    const handleClick = () => {
        onClick();
    };

    return (
        <div className={isSelected ? classes.selected : classes.notSelected} onClick={handleClick}>
            <DogCard dog={dog}/>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    selected: {
        border: `5px solid ${SECONDARY}`,
        cursor: 'pointer',
    },
    notSelected: {
        border: `3px dashed ${TEXT_LIGHT}`,
        cursor: 'pointer',
    }
}));