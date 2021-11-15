import React from 'react';
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import Box from "@mui/material/Box";
import {Container, Grid, Typography} from "@material-ui/core";

const PageNotFound = () => {
    return (
        <>
            <Container>
        <Grid columnSpacing={5} >
          <Typography variant='h1'>404</Typography>
            <Typography variant='h2'>Oops! This Page Could Not Be Found</Typography>
            <Typography>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</Typography>
        </Grid>
        <NavLink to='/'>

           <Button variant="outlined" >Homepage</Button>
        </NavLink>
            </Container>
        </>
    );
};

export default PageNotFound;