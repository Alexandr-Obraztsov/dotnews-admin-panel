import React, {useEffect, useState} from 'react';
import {Container, Divider, Grid2, Paper, Typography} from "@mui/material";
import {getChannels, getTopics, getUsers} from "./Fetches";
import {ChannelsList} from "./components/channels/ChannelsList";
import {AddChannelsForm} from "./components/channels/AddChannelsForm";
import {DeleteForm} from "./components/DeleteForm";
import {TopicsList} from "./components/topics/TopicsList";
import {AddTopicsForm} from "./components/topics/AddTopicsForm";
import {UsersList} from "./components/users/UsersList";
import {AddUsersForm} from "./components/users/AddUsersForm";

export type ChannelType = {
    id: string,
    name: string,
    telegramId: string,
    isPrivate: boolean
}

export type TopicType = {
    id: string,
    name: string
}

export type UserType = {
    id: string,
    telegramId: number,
    createdAt: string,
    subscribtionsUpdatedAt: string
}


function App() {

    const [channels, setChannels] = useState<ChannelType[]>();
    const [topics, setTopics] = useState<TopicType[]>();
    const [users, setUsers] = useState<UserType[]>();

    const updateChannels = async () => {
        getChannels().then((res) => {
            if (JSON.stringify(res) !== JSON.stringify(channels))
                setChannels(res);

            setTimeout(updateChannels, 100);
        }).catch();
    }

    const updateTopics = async () => {
        getTopics().then((res) => {
            if (JSON.stringify(res) !== JSON.stringify(topics))
                setTopics(res);

            setTimeout(updateTopics, 100);
        }).catch();
    }

    const updateUsers = async () => {
        getUsers().then((res) => {
            if (JSON.stringify(res) !== JSON.stringify(users))
                setUsers(res);

            setTimeout(updateUsers, 100);
        }).catch();
    }


    useEffect(() => {
        updateChannels();
        updateTopics();
        updateUsers();
    }, []);

    return (
            <Container>
                <Grid2
                container
                spacing={5}
                direction={"column"}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            padding: "20px"
                        }}
                    >
                        <Grid2
                            container
                            direction={"column"}
                            spacing={4}
                            alignItems={"stretch"}
                        >
                            <Typography variant={"h3"}>Channels</Typography>
                            <ChannelsList channels={channels}/>
                            <AddChannelsForm/>
                            <DeleteForm type={"channels"}/>
                        </Grid2>
                    </Paper>


                    <Paper
                        elevation={3}
                        sx={{
                            padding: "20px"
                        }}
                    >
                        <Grid2
                            container
                            direction={"column"}
                            spacing={4}
                            alignItems={"stretch"}
                        >
                            <Typography variant={"h3"}>Topics</Typography>
                            <TopicsList topics={topics}/>
                            <AddTopicsForm/>
                            <DeleteForm type={"topics"}/>
                        </Grid2>
                    </Paper>


                    <Paper
                        elevation={3}
                        sx={{
                            padding: "20px"
                        }}
                    >
                        <Grid2
                            container
                            direction={"column"}
                            spacing={4}
                            alignItems={"stretch"}
                        >
                            <Typography variant={"h3"}>Users</Typography>
                            <UsersList users={users}/>
                            <AddUsersForm/>
                            <DeleteForm type={"users"}/>
                        </Grid2>
                    </Paper>
                </Grid2>
            </Container>
    );
}

export default App;
