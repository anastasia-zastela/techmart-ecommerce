// import React from 'react';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// // eslint-disable-next-line jest/no-mocks-import
// import { mockFieldsInitData, mockValidationSchema } from '../__mocks__';
//
// import AuthForm from '../component';
//
// jest.mock('react-redux', () => {
//   return {
//     ...jest.requireActual('react-redux'),
//     useSelector: jest.fn().mockReturnValue({}),
//   }
// })
//
// const props = {
//   formFieldsData: mockFieldsInitData,
//   initialValues: mockValidationSchema.default(),
//   submitHandler: jest.fn(),
//   validationSchema: mockValidationSchema,
//   withEmptyHelperTexts: true,
//   submitBlockProps: {
//     isSubmitting: true,
//     formClass: '',
//     submitSelector: (state) => state,
//     buttonText: 'Test',
//     buttonAddedStyles: {},
//   },
// };
// describe('AuthForm', () => {
//
//   test('it works',async () => {
//     render(<AuthForm {...props} />);
//   });
// });
