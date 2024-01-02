import { useField } from 'formik';
import React from 'react';
import { ErrorMessage, InputWrap } from './Form.styled';

export default function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <InputWrap>
      <label htmlFor={props.id || props.name} className="label-input">
        {label}
      </label>
      <input
        className="my-input"
        {...field}
        {...props}
        error={meta.touched && meta.error}
      />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </InputWrap>
  );
}
