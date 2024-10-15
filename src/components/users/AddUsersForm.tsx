import React from 'react';
import { useForm } from 'react-hook-form';
import {Button, Checkbox, FormLabel, Grid2, TextField} from "@mui/material";
import {addChannel, addTopic, registerUser} from "../../Fetches";

export function AddUsersForm() {
    const { register, handleSubmit} = useForm();
    const onSubmit = (data: any) => {
        registerUser(data.telegramId);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid2
            container
            direction={"column"}
            width={"100%"}
            spacing={1}
            >
                <TextField
                    variant={"outlined"}
                    size={"small"}
                    type="text"
                    placeholder="telegramId"
                    {...register("telegramId", {required: true})}
                />

                <Button
                    variant={"contained"}
                    type="submit"
                >Submit</Button>
            </Grid2>
        </form>
    );
}