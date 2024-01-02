import React from 'react';
import { useField } from 'formik';
import { ErrorMessage, RatingWrap } from './Form.styled';

export default function MyRating({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <RatingWrap>
      <label htmlFor={props.id || props.name} className="label-rating">
        {label}
      </label>
      <input
        className="my-rating"
        {...field}
        {...props}
        error={meta.touched && meta.error}
      />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </RatingWrap>
  );
}
