import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';

import TextfieldWrapper from '../../../components/common/forms/TextfieldWrapper';
import SubmitBlock from './SubmitBlock';
import { useActions } from '../../../hooks/useActions';
import { useStyles } from './styles';
import {
  signinFieldsInitData as signinFormFieldsData,
  signinValidationSchema,
} from './constants';

const initialValues = signinValidationSchema.default();

const SigninForm = () => {
  const { login } = useActions();
  const submitHandler = useCallback(async (values) => login(values), [login]);
  const classes = useStyles();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={signinValidationSchema}
      validateOnChange={false}
    >
      {({ isSubmitting }) => (
        <Form className={classes.formBody}>
          {signinFormFieldsData
            .map((fieldParams) => (
              <TextfieldWrapper
                key={fieldParams.label}
                className={classes.formInput}
                {...fieldParams}
              />
            ))}
          <SubmitBlock buttonClass={classes.submitButton} isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default SigninForm;
