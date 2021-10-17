import React from 'react';
import { Button } from '@material-ui/core';
import { TailSpin, useLoading } from '@agney/react-loading';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';

const loaderConfig = {
  loading: true,
  indicator: <TailSpin width='20' />,
};
const userLoginSelector = (state) => state.userLogin;

const SubmitBlock = ({ isSubmitting, buttonClass }) => {
  const loginStatus = useSelector(userLoginSelector);
  const { containerProps, indicatorEl } = useLoading(loaderConfig);
  const classes = useStyles(!loginStatus.error);

  return (
    <div className={classes.wrapper}>
      <Button
        {...containerProps}
        type='submit'
        disabled={isSubmitting}
        variant='contained'
        className={`${buttonClass} ${classes.button}`}
      >
        {isSubmitting ? indicatorEl : 'Войти'}
      </Button>
      {loginStatus.loading === false
        && (
        <h3 className={classes.notification}>
          {loginStatus.error
            ? 'Ошибка авторизации, попробуйте позже'
            : 'Вы успешно вошли в систему'}
        </h3>
        )}
    </div>
  );
};

export default SubmitBlock;
