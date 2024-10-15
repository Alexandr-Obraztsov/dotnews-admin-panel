import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, Grid2, TextField} from "@mui/material";
import {deleteChannel, deleteTopic, deleteUser} from "../Fetches";

type DeleteFormPropsType = {
    type: "topics" | "channels" | "users"
};

export const DeleteForm : React.FC<DeleteFormPropsType> = ({type}) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data: any) => {
        switch (type) {
            case "topics":
                deleteTopic(data.id.toString().trim());
                break;
            case "channels":
                deleteChannel(data.id.toString().trim());
                break;
            case "users":
                deleteUser(data.id.toString().trim());
                break;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid2
                container
                direction={"column"}
                width={"100%"}
                spacing={1}
            >
                <TextField
                    size={"small"}
                    variant={"outlined"}
                    type="text"
                    placeholder="id"
                    required={true}
                    {...register("id", {required: true})}
                />

                <Button
                    type={"submit"}
                    color={"warning"}
                    variant={"contained"}
                >Delete {type}</Button>
            </Grid2>
        </form>
    );
}