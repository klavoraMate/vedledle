import React, { useState, useEffect } from "react";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {getEmail, getJWT} from "@/util/JWTDecoder";
import {log} from "util";
interface DogFormProps {
    onClose: () => void;
}

export default function DogForm({ onClose }:DogFormProps) {
    const [dogName, setDogName] = useState("");
    const [dogAge, setDogAge] = useState<number | string>("");
    const [breeds, setBreeds] = useState<string[]>([]);
    const [selectedBreed, setSelectedBreed] = useState("");
    const [sizes, setSizes] = useState<string[]>([]);
    const [selectedSize, setSelectedSize] = useState("");
    const email = getEmail();
    const jwt = getJWT();

    useEffect(() => {
        const fetchDogBreeds = async () => {
            try {
                const response = await fetch('/api/breed/dog/all');
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
                const  response = await fetch('/api/size/dog/all');
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
                    onChange={(e) => setSelectedBreed(e.target.value as string)}
                >
                    {breeds.map((breed) => (
                        <MenuItem key={breed} value={breed}>
                            {breed}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel>Size</InputLabel>
                <Select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value as string)}
                >
                    {sizes.map((size) => (
                        <MenuItem key={size} value={size}>
                            {size}
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
