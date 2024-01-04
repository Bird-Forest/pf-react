import React from 'react';
import { useField } from 'formik';
import { ErrorMessage, SelectWrap } from './Form.styled';

export default function MySelect({ label, ...props }) {
  const [field, meta] = useField(props);
  const errorClass = meta.touched && meta.error ? 'error' : '';
  return (
    <SelectWrap>
      <label htmlFor={props.id || props.name} className="label-select">
        {label}
      </label>
      <select {...field} {...props} className={`my-select ${errorClass}`} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </SelectWrap>
  );
}
