import * as React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {TopicType} from "../../App";

type Props = {
    topics?: TopicType[]
};
export const TopicsList : React.FC<Props> = ({topics}) => {
    return (
        <Table>
            <TableHead>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
            </TableHead>
            <TableBody>
                {topics?.map((topics) => (
                    <TableRow key={topics.id}>
                        <TableCell>{topics.id}</TableCell>
                        <TableCell>{topics.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};