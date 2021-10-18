import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
// eslint-disable-next-line jest/no-mocks-import
import { mockFieldsInitData, mockValidationSchema } from './__mocks__';

import AuthForm from '../component';

jest.mock('react-redux', () => (
  {
    useSelector: () => ({}),
  }
));

const props = {
  formFieldsData: mockFieldsInitData,
  initialValues: mockValidationSchema.default(),
  submitHandler: jest.fn(),
  validationSchema: mockValidationSchema,
  submitBlockProps: {
    isSubmitting: true,
    formClass: '',
    submitSelector: (state) => state,
    buttonText: 'Test',
    buttonAddedStyles: {},
  },
};
describe('AuthForm', () => {
  test('it renders spare helper texts if corresponding prop is given', () => {
    const { container, rerender } = render(<AuthForm {...props} />);

    expect(container.querySelector('p.MuiFormHelperText-root')).toBeNull();

    rerender(<AuthForm {...props} withEmptyHelperTexts />);

    expect(container.querySelector('p.MuiFormHelperText-root')).toBeInTheDocument();
  });
});
