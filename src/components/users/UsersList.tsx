import * as React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {TopicType, UserType} from "../../App";

type Props = {
    users?: UserType[]
};
export const UsersList : React.FC<Props> = ({users}) => {
    return (
        <Table>
            <TableHead>
                <TableCell>ID</TableCell>
                <TableCell>TelegramId</TableCell>
                <TableCell>CreatedAt</TableCell>
                <TableCell>SubscribtionsUpdatedAt</TableCell>
            </TableHead>
            <TableBody>
                {users?.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.telegramId}</TableCell>
                        <TableCell>{user.createdAt}</TableCell>
                        <TableCell>{user.subscribtionsUpdatedAt}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};