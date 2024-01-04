import DogCard from "@/app/components/cards/DogCard";
import {Dog} from "@/app/util/types";
import {SECONDARY, TEXT_LIGHT} from "@/app/util/styleConstants";

interface ClickableDogCardProps {
    dog: Dog;
    onClick: () => void;
    isSelected: boolean;
}

export default function ClickableDogCard({dog, onClick, isSelected}: ClickableDogCardProps) {
    const handleClick = () => {
        onClick();
    };

    return (
        <div style={isSelected ? selectedStyle : notSelectedStyle} onClick={handleClick}>
            <DogCard dog={dog}/>
        </div>
    );
}

const selectedStyle = {
    border: `5px solid ${SECONDARY}`,
    cursor: 'pointer'
}
const notSelectedStyle = {
    border: `3px dashed ${TEXT_LIGHT}`,
    cursor: 'pointer'
}

