'use client'

import AppBar from "@/_components/AppBar";
import {Checkbox, FormControl, InputLabel, TextField} from "@mui/material";
import React from "react";

export default function Login() {
    return (
        <div>
            <AppBar>
            </AppBar>
            <h1>Title</h1>
            <TextField label="Email address" variant="outlined"/>
            <Checkbox  defaultChecked />
        </div>
    )
}
