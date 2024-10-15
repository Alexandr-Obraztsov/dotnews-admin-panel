// @flow
import * as React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {ChannelType} from "../../App";

type Props = {
    channels?: ChannelType[]
};
export const ChannelsList : React.FC<Props> = ({channels}) => {
    return (
        <Table>
            <TableHead>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>TelegramId</TableCell>
                <TableCell>isPrivate</TableCell>
            </TableHead>
            <TableBody>
                {channels?.map((channel) => (
                    <TableRow key={channel.id}>
                        <TableCell>{channel.id}</TableCell>
                        <TableCell>{channel.name}</TableCell>
                        <TableCell>{channel.telegramId}</TableCell>
                        <TableCell>{channel.isPrivate ? "Private" : "Public"}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};