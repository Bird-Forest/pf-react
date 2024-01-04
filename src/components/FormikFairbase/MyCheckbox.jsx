import { useField } from 'formik';
import React from 'react';
import { CheckboxWrap, ErrorMessage } from './Form.styled';

export default function MyCheckbox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  // const errorClass = meta.touched && meta.error ? 'error' : '';
  return (
    <CheckboxWrap>
      <input
        name="agreement"
        type="checkbox"
        {...field}
        {...props}
        className="my-checkbox"
      />
      <label htmlFor="agreement" className="label-checkbox">
        {children}
      </label>
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </CheckboxWrap>
  );
}
// {/* <EvaCheckmarkSquare2Fill/> */}
