import React from 'react';
import {Button, Grid} from "@material-ui/core";
import {useStyles} from "../../components/Header/styles";

const Admin = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} >
            <Button item >
                Добавить тип
            </Button>
            <Button item>
                Добавить брэнд
            </Button>


        </Grid>
    );
};

export default Admin;