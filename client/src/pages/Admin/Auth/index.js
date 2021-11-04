import React, { useState } from 'react';
import {
  Avatar, Button, Paper, Grid, Typography, Container,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from '../../../components/Modal/styles';
import Input from '../../../components/Input/Input';
import UserService from '../../../services/UserService';

const initialState = { loginOrEmail: '', password: '' };

const Index = () => {
  const [form, setForm] = useState(initialState);

  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    try {
      response = await UserService.signin(form);
      history.push('/');
    } catch (error) {
      alert('Проверьте корректность данных');
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar} />
        <Typography component='h1' variant='h5'>Sign in</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input name='loginOrEmail' label='Email Address' handleChange={handleChange} type='email' />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            Sign In
          </Button>
          <Grid container justify='flex-end' />
        </form>
      </Paper>
    </Container>
  );
};

export default Index;
