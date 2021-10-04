import React, { useCallback, useMemo } from 'react';
import { Form, Formik } from 'formik';

import TextfieldWrapper from '../../../components/common/forms/TextfieldWrapper';
import Component from './SubmitBlock';
import { useActions } from '../../../hooks/useActions';
import { useStyles } from './styles';
import {
  signupFieldsInitData as signupFormFieldsData,
  signupValidationSchema,
} from './constants';

const SignupForm = () => {
  const initialValues = useMemo(() => signupValidationSchema.default(), []);
  const { register } = useActions();
  const submitHandler = useCallback(async (values) => register(values), [register]);
  const classes = useStyles();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={signupValidationSchema}
      validateOnChange={false}
    >
      {({ isSubmitting }) => (
        <Form className={classes.formBody}>
          {signupFormFieldsData
            .map((fieldParams) => (
              <TextfieldWrapper
                key={fieldParams.label}
                className={classes.formInput}
                helperText=' '
                {...fieldParams}
              />
            ))}
            <Component buttonClass={classes.submitButton} isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
