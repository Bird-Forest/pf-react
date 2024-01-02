import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { AuthForm, BtnForm, InputBox, WrapFormUp } from './Form.styled';
import FormError from './FormError';

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const initialValues = {
  email: '',
  password: '',
};

export default function FormikSignIn({ onAutorization }) {
  const handleSubmit = (values, { resetForm }) => {
    const email = values.email;
    const password = values.password;
    onAutorization(email, password);
    console.log(values);
    resetForm();
  };
  return (
    <WrapFormUp>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off" className="form">
          <AuthForm>
            <h3 className="title-auth">Autorization</h3>
            <InputBox>
              <Field
                name="email"
                type="text"
                placeholder=""
                className="input"
              />
              <label htmlFor="email" className="label">
                Email*
              </label>
              <FormError name="email" />
            </InputBox>
            <InputBox>
              <Field
                name="password"
                type="text"
                placeholder=""
                className="input"
              />
              <label htmlFor="password" className="label">
                Password*
              </label>
              <FormError name="password" />
            </InputBox>
          </AuthForm>
          <BtnForm type="submit">Submit</BtnForm>
        </Form>
      </Formik>
    </WrapFormUp>
  );
}

// https://github.com/luxplanjay/react-41/blob/04-forms/src/components/ProductReviewForm/ProductReviewForm.jsx
