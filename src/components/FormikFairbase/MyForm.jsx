import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyStyled } from './Form.styled';
import MyTextInput from './MyTextInput';
import MySelect from './MySelect';
import MyTextarea from './MyTextarea';
import MyRating from './MyRating';
import MyCheckbox from './MyCheckbox';
import MyPassword from './MyPassword';

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
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
  review: Yup.string().required('This field is required'),
  rating: Yup.number().required('This field is required'),
  agreement: Yup.boolean().required('This field is required'),
  jobType: Yup.string().oneOf(jobType).required('Please select a job type'),
  date: Yup.date().default(() => new Date()),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  jobType: '',
  review: '',
  rating: '0',
  agreement: false,
  date: new Date(),
};

export default function MyForm() {
  return (
    <MyStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
            setSubmitting(true);
            resetForm();
          }, 400);
        }}
      >
        {props => (
          <Form className="my-form" autoComplete="off">
            <h3 className="my-title">Registration</h3>
            <MyTextInput label="Name*" name="name" type="text" />
            <MyTextInput label="Email*" name="email" type="email" />
            <MyPassword label="Password*" name="password" type="password" />
            <MySelect label="Job Type" name="jobType">
              <option value="" className="my-option">
                Select a job type
              </option>
              {jobType.map((type, idx) => (
                <option value={type} key={idx} className="my-option">
                  {type}
                </option>
              ))}
            </MySelect>
            <MyTextarea label="About me" name="review" type="text" />
            <MyRating
              label="Experience"
              name="rating"
              type="number"
              min={0}
              max={10}
            />
            <MyCheckbox label="Agreement" name="agreement" type="checkbox">
              I accept the terms and conditions
            </MyCheckbox>
            <button type="submit" className="button">
              {props.isSubmitting ? 'loading...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </MyStyled>
  );
}
