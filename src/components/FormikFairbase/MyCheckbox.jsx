import { useField } from 'formik';
import React from 'react';
import { CheckboxWrap, ErrorMessage } from './Form.styled';

export default function MyCheckbox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <CheckboxWrap>
      <label className="lable-checkbox">
        <input type="checkbox" {...field} {...props} className="my-checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </CheckboxWrap>
  );
}
