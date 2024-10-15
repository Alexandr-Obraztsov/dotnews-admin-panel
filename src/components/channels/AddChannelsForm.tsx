import React from 'react';
import { useForm } from 'react-hook-form';
import {Button, Checkbox, FormLabel, Grid2, TextField} from "@mui/material";
import {addChannel} from "../../Fetches";

export function AddChannelsForm() {
    const { register, handleSubmit} = useForm();
    const onSubmit = (data: any) => {
        addChannel(data);
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
                    type="number"
                    placeholder="telegramId"
                    required={true}
                    {...register("telegramId", {required: true})}
                />
                <TextField
                    variant={"outlined"}
                    size={"small"}
                    type="text"
                    placeholder="name"
                    {...register("name", {required: true})}
                />
                <FormLabel>
                    isPrivate
                    <Checkbox
                        {...register("isPrivate", {required: false})}
                    />
                </FormLabel>

                <Button
                    variant={"contained"}
                    type="submit"
                >Submit</Button>
            </Grid2>
        </form>
    );
}