import React from 'react';
import { useField } from 'formik';
import { ErrorMessage, TextareaWrap } from './Form.styled';

export default function MyTextarea({ label, ...props }) {
  const [field, meta] = useField(props);
  const errorClass = meta.touched && meta.error ? 'error' : '';
  return (
    <TextareaWrap>
      <label htmlFor={props.id || props.name} className="label-textarea">
        {label}
      </label>
      <textarea className={`my-textarea ${errorClass}`} {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </TextareaWrap>
  );
}
