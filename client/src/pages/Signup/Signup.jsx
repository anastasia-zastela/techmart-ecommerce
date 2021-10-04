import React from 'react';
import SignupForm from './SignupForm';
import { useStyles } from './styles';

const Signup = () => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>Регистрация</h2>
      <SignupForm />
    </section>
  );
};

export default Signup;
