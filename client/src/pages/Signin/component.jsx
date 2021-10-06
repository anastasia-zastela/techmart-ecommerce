import React from 'react';
import { useSelector } from 'react-redux';
import SigninModal from './SigninModal';

const Signin = () => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    userInfo
      ? <p>You seem to be already signed in</p>
      : <SigninModal />
  );
};

export default Signin;
