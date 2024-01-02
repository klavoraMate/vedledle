import React, { useState, useEffect } from "react";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {getEmail, getJWT} from "@/app/util/JWTDecoder";
import {Breed,Size} from "@/app/util/types";
interface DogFormProps {
    onClose: () => void;
}

export default function DogForm({ onClose }:DogFormProps) {
    const [dogName, setDogName] = useState("");
    const [dogAge, setDogAge] = useState<number | string>("");
    const [breeds, setBreeds] = useState<Breed[]>([]);
    const [selectedBreed, setSelectedBreed] = useState<Breed>();
    const [sizes, setSizes] = useState<Size[]>([]);
    const [selectedSize, setSelectedSize] = useState<Size>();
    const email = getEmail();
    const jwt = getJWT();

    useEffect(() => {
        const fetchDogBreeds = async () => {
            try {
                const response = await fetch('/api/saloon/breed/dog/all');
                if (response.ok) {
                    const data = await response.json();
                    setBreeds(data);
                }
            } catch (error) {
                console.error('Error fetching dog breeds:', error);
            }
        };

        const fetchDogSizes = async () => {
            try {
                const  response = await fetch('/api/saloon/size/dog/all');
                if (response.ok) {
                    const data = await response.json();
                    setSizes(data);
                }
            } catch (error) {
                console.error('Error fetching dog sizes:', error);
            }
        };

        fetchDogBreeds();
        fetchDogSizes();
    }, []);

    const handleSave = async () => {
        const formData = {
            name: dogName,
            age: dogAge,
            breed: selectedBreed,
            size: selectedSize,
        };

        try {
            const response = await fetch(`/api/dog?email=${email}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization: `Bearer ${jwt}`,
                },
                body: JSON.stringify(formData),
            })
            if (response.ok) {
                onClose();
            }
        } catch (error) {
            console.error("Error uploading dog:", error);
        }

    };

    const isSaveDisabled = !dogName || !dogAge || !selectedBreed || !selectedSize;

    return (
        <form>
            <TextField
                label="Name"
                value={dogName}
                onChange={(e) => setDogName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                type="number"
                label="Age"
                value={dogAge}
                onChange={(e) => setDogAge(e.target.value)}
                fullWidth
                margin="normal"
            />
            <FormControl fullWidth margin="normal">
                <InputLabel>Breed</InputLabel>
                <Select
                    value={selectedBreed}
                    onChange={(e) => setSelectedBreed(e.target.value as Breed)}
                >
                    {breeds.map((breed,index) => (
                        <MenuItem key={index} value={breed.name}>
                            {breed.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel>Size</InputLabel>
                <Select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value as Size)}
                >
                    {sizes.map((size,index) => (
                        <MenuItem key={index} value={size.name}>
                            {size.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary" disabled={isSaveDisabled}>
                    Save
                </Button>
            </DialogActions>
        </form>
    );
};
