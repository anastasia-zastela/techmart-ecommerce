import React, { useMemo } from 'react';
import { Button } from '@material-ui/core';
import { TailSpin, useLoading } from '@agney/react-loading';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';

const loaderConfig = {
  loading: true,
  indicator: <TailSpin width='20' />,
};

const SubmitBlock = ({ isSubmitting, buttonClass }) => {
  const registerStatus = useSelector((state) => state.userRegister);
  const { containerProps, indicatorEl } = useLoading(loaderConfig);
  const classes = useStyles(!registerStatus.error);

  return (
    <div className={classes.wrapper}>
      <Button
        {...containerProps}
        type='submit'
        disabled={isSubmitting}
        variant='contained'
        className={`${buttonClass} ${classes.button}`}
      >
        {isSubmitting ? indicatorEl : 'Зарегистрироваться'}
      </Button>
      {registerStatus.loading === false
        && (
        <h3 className={classes.notification}>
          {registerStatus.error
            ? 'Ошибка регистрации, попробуйте позже'
            : 'Вы успешно зарегистрированы'}
        </h3>
        )}
    </div>
  );
};

export default SubmitBlock;
