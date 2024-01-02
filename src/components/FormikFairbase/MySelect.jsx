import React from 'react';
import { useField } from 'formik';
import { ErrorMessage, SelectWrap } from './Form.styled';
// import FormError from './FormError';

// const jobType = [
//   'Design UI/UX',
//   'Fullstack',
//   'Project Manager',
//   'Data Analyst',
//   'Sysadmin',
// ];

export default function MySelect({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <SelectWrap>
      <label htmlFor={props.id || props.name} className="label-select">
        {label}
      </label>
      <select {...field} {...props} className="my-select" />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </SelectWrap>
  );
}

//  const MySelect = ({ label, ...props }) => {
//    const [field, meta] = useField(props);
//    return (
//      <div>
//        <label htmlFor={props.id || props.name}>{label}</label>
//        <select {...field} {...props} />
//        {meta.touched && meta.error ? (
//          <div className="error">{meta.error}</div>
//        ) : null}
//      </div>
//    );
//  };

// {/* <MySelect>
//   <label htmlFor="jobType" className="label">
//     Job Type
//   </label>
//   <select name="jobType" as="select" className="select">
//     <option value="" className="option">
//       Select a job type
//     </option>
//     {jobType.map((type, idx) => (
//       <option value={type} key={idx} className="option">
//         {type}
//       </option>
//     ))}
//   </select>
//   <FormError name="jobType" />
// </MySelect>; */}
