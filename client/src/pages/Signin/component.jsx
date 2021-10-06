import React from 'react';
import { useSelector } from 'react-redux';
import SigninForm from './SigninForm';

const Signin = () => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    userInfo
      ? <p>You seem to be already signed in</p>
      : <SigninForm />
  );
};

export default Signin;
