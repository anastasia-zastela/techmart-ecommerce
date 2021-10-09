import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import useStyles from "./styles";
import {Button, TextField} from "@material-ui/core";
import {useState} from "react";

export default function Reviews() {

    const classes = useStyles();

    const [reviewText, setReviewText] = useState();

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(reviewText)
    };

    const handleChange = (e) => {
        setReviewText(e.target.value)
    };
    return (
        <>
            <form className={classes.reviewInput}>
                <TextField
                    id="outlined-multiline-static"
                    label="Оставьте отзыв"
                    multiline
                    rows={4}
                    value={reviewText}
                    onChange={handleChange}
                />
                <Button onClick={handleSubmit} type="submit" color="primary">Отправить отзыв</Button>
            </form>
            <List sx={{margin: "0 auto "}}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="avatar" src="/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                    <ListItemText sx={{minWidth: "100px"}} primary="Remy Sharp" secondary="Jan 9, 2021"/>
                    <ListItemText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quia Lorem ipsum
                        dolor
                        sit amet, consectetur adipisicing elit. Alias amet exercitationem maxime natus, nemo nostrum
                        odio
                        optio provident repellendus voluptas! Dolor hic obcaecati sit vero!!</ListItemText>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="/images/avatar/2.jpg"/>
                    </ListItemAvatar>
                    <ListItemText sx={{minWidth: "100px"}} primary="Travis Howard" secondary="Jan 7, 2021"/>
                    <ListItemText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quia Lorem ipsum
                        dolor
                        sit amet, consectetur adipisicing elit. Alias amet exercitationem maximero!!</ListItemText>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="/images/avatar/3.jpg"/>
                    </ListItemAvatar>
                    <ListItemText sx={{minWidth: "100px"}} primary="Cindy Baker" secondary="July 20, 2021"/>
                    <ListItemText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quia Lorem ipsum
                        dolor
                        sit amet, consectetur adipisicing elit. Alias amet exercitationem maxime natus, nemo nostrum
                        odio
                        optio provident repellendus voluptas! Dolor hic obcaecati sit vero!!</ListItemText>
                </ListItem>
            </List>
        </>
    );
}