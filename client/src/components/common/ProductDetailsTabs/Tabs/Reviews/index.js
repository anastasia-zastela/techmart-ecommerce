import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import useStyles from "./styles";

export default function Reviews() {

    const classes = useStyles();

    return (
        <List className={classes.reviewsList} sx={{margin: "0 auto "}}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt="avatar" src="/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText sx={{minWidth:"100px"}} primary="Remy Sharp" secondary="Jan 9, 2021" />
                <ListItemText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quia Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet exercitationem maxime natus, nemo nostrum odio optio provident repellendus voluptas! Dolor hic obcaecati sit vero!!</ListItemText>

            </ListItem>

            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar src="/images/avatar/2.jpg"/>
                </ListItemAvatar>
                <ListItemText sx={{minWidth:"100px"}} primary="Travis Howard" secondary="Jan 7, 2021" />
                <ListItemText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quia Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet exercitationem maximero!!</ListItemText>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar src="/images/avatar/3.jpg"/>
                </ListItemAvatar>
                <ListItemText sx={{minWidth:"100px"}} primary="Cindy Baker" secondary="July 20, 2021" />
                <ListItemText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quia Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet exercitationem maxime natus, nemo nostrum odio optio provident repellendus voluptas! Dolor hic obcaecati sit vero!!</ListItemText>
            </ListItem>
        </List>
    );
}