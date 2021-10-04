import React from 'react';
import { Button } from '@material-ui/core';
import { TailSpin, useLoading } from '@agney/react-loading';
import { useSelector } from 'react-redux';

const loaderConfig = {
  loading: true,
  indicator: <TailSpin width='20' />,
};

const SubmitButton = ({ isSubmitting }, ...otherProps) => {
  const registerStatus = useSelector((state) => state.userRegister);
  const { containerProps, indicatorEl } = useLoading(loaderConfig);

  return (
    <>
      <Button {...containerProps} type='submit' disabled={isSubmitting} variant='contained' {...otherProps}>
        {isSubmitting ? indicatorEl : 'Зарегистрироваться'}
      </Button>
      <h3>{registerStatus.error ? 'Ошибка' : 'Успех'}</h3>
    </>
  );
};

export default SubmitButton;
