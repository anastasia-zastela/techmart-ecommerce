import React from 'react';
import { Form, Formik } from 'formik';
import TextfieldWrapper from '../TextfieldWrapper';
import SubmitBlock from './SubmitBlock';
import { useStyles } from './styles';
import { useModifiedStyles } from '../../../../hooks/useModifiedStyles';

const AuthForm = ({
  formFieldsData,
  initialValues,
  submitHandler,
  validationSchema,
  styles = {},
  withEmptyHelperTexts,
  submitBlockProps,
}) => {
  const classes = useModifiedStyles(useStyles(), styles);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      {({ isSubmitting }) => (
        <Form className={classes.formBody}>
          {formFieldsData
            .map((fieldParams) => (
              <TextfieldWrapper
                key={fieldParams.label}
                className={classes.formInput}
                helperText={withEmptyHelperTexts ? ' ' : undefined}
                {...fieldParams}
              />
            ))}
          <SubmitBlock
            formClass={classes.submitButton}
            isSubmitting={isSubmitting}
            {...submitBlockProps}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
