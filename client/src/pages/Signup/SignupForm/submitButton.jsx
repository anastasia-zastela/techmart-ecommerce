import React from 'react';
import { Button } from '@material-ui/core';
import { TailSpin, useLoading } from '@agney/react-loading';
import { useSelector } from 'react-redux';

const loaderConfig = {
  loading: true,
  indicator: <TailSpin width='20' />,
};

const SubmitButton = () => {
  const registerStatus = useSelector((state) => state.userRegister);
  const isSubmitting = false;
  console.log(registerStatus);
  const {containerProps, indicatorEl} = useLoading(loaderConfig);

  return (
    <>
      <Button {...containerProps} type='submit' disabled={isSubmitting} variant='contained'>
        {registerStatus.loading ? indicatorEl : 'Зарегистрироваться'}
      </Button>
      {}
    </>
  );
};

export default SubmitButton;
