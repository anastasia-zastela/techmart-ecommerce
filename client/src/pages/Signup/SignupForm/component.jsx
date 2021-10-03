import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@material-ui/core';

// TODO change schema file extension
import { signupValidationSchema } from './signupValidationSchema.mjs';
// import { useActions } from 'hooks/useActions';
import TextfieldWrapper from '../../../components/common/forms/TextfieldWrapper';
import { signupFormFieldsData } from './constants/signupFieldsInitData';
import SubmitButton from './submitButton';

const SignupForm = () =>
  // const a = useActions();
  (
    <Formik
      initialValues={signupValidationSchema.default()}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const r = () => alert(JSON.stringify(values));
        return new Promise(() => {
          setTimeout(() => {
            r();
            setSubmitting(false);
          }, 3000);
        });
      }}
      validationSchema={signupValidationSchema}
      validateOnChange={false}
    >
      {({ isSubmitting }) => (
        <Form>
          {signupFormFieldsData
            .map((fieldParams) => (<TextfieldWrapper helperText=' ' {...fieldParams} />))}
          <div>
            <SubmitButton isSubmitting={isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
export default SignupForm;
