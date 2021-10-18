import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// eslint-disable-next-line jest/no-mocks-import
import { mockFieldsInitData, mockValidationSchema } from '../__mocks__'
import * as jest from 'jest';

import AuthForm from '../component';


const props = {
  formFieldsData: mockFieldsInitData,
  initialValues: mockValidationSchema.default(),
  submitHandler,
  validationSchema: mockValidationSchema,
  withEmptyHelperTexts: true,
  submitBlockProps,
}
describe('AuthForm', () => {

  test('it works',async () => {

  })
})
