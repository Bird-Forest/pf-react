import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  AreaFormWrap,
  AuthForm,
  BtnForm,
  CheckboxFormWrap,
  InputBox,
  RatingFormWrap,
  SelectFormWrap,
  WrapFormUp,
} from './Form.styled';
import FormError from './FormError';

const jobType = [
  'Design UI/UX',
  'Fullstack',
  'Project Manager',
  'Data Analyst',
  'Sysadmin',
];

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Please enter your name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string().required('Please enter your password'),
  review: Yup.string().required('This field is required'),
  rating: Yup.number().required('This field is required'),
  toggle: Yup.boolean().required('This field is required'),
  jobType: Yup.string().required('Please select a job type').oneOf(jobType),
  date: Yup.date().default(() => new Date()),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  jobType: '',
  review: '',
  rating: 0,
  toggle: false,
  date: new Date(),
};

export default function FormikSignUp({ onRegistration }) {
  const handleSubmit = (values, { resetForm }) => {
    const email = values.email;
    const password = values.password;
    onRegistration(email, password);
    // console.log(values);
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
            <h3 className="title-auth">Registration</h3>
            <InputBox>
              <Field name="name" type="text" placeholder="" className="input" />
              <label htmlFor="name" className="label">
                Name*
              </label>
              <FormError name="name" />
            </InputBox>
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
          <SelectFormWrap>
            <label htmlFor="jobType" className="title-select">
              Job Type
            </label>
            <Field name="jobType" as="select" className="form-select">
              <option value="" className="option">
                Select a job type
              </option>
              {jobType.map((type, idx) => (
                <option value={type} key={idx} className="option">
                  {type}
                </option>
              ))}
            </Field>
            <FormError name="jobType" />
          </SelectFormWrap>
          <AreaFormWrap>
            <label htmlFor="review" className="title-area">
              About Me
            </label>
            <Field
              name="review"
              as="textarea"
              placeholder=""
              className="textarea"
            />
            <FormError name="review" />
          </AreaFormWrap>
          <RatingFormWrap>
            <label htmlFor="rating" className="title-rating">
              Experience
            </label>
            <Field
              name="rating"
              type="number"
              min={0}
              max={10}
              className="rating"
            />
            <FormError name="rating" />
          </RatingFormWrap>
          <CheckboxFormWrap>
            <Field type="checkbox" name="toggle" className="checkbox" />
            <label htmlFor="toggle" className="title-checkbox">
              I accept the terms and conditions
            </label>
            <FormError name="toggle" />
          </CheckboxFormWrap>
          <BtnForm type="submit">Submit</BtnForm>
        </Form>
      </Formik>
    </WrapFormUp>
  );
}

// https://github.com/luxplanjay/react-41/blob/04-forms/src/components/ProductReviewForm/ProductReviewForm.jsx
