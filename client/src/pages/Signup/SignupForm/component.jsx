import React, { useCallback, useMemo } from 'react';
import { Form, Formik } from 'formik';

import TextfieldWrapper from '../../../components/common/forms/TextfieldWrapper';
import SubmitButton from './SubmitButton';
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
          <h5 className={classes.topNote}>Все поля обязательны</h5>
          {signupFormFieldsData
            .map((fieldParams) => (
              <TextfieldWrapper
                key={fieldParams.label}
                helperText=' '
                {...fieldParams}
              />
            ))}
          <div>
            <SubmitButton isSubmitting={isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
