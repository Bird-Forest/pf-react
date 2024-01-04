import React from 'react';
import { BtnError, ErrorMessageWrap, ErrorText } from './Portal.styled';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function AuthError({ message, onClose }) {
  return (
    <ErrorMessageWrap>
      <BtnError type="button" onClick={onClose}>
        <IoClose className="close-icon" />
      </BtnError>
      {message === 'Firebase: Error (auth/email-already-in-use).' && (
        <>
          <ErrorText>
            This user already exists. Please follow the link
          </ErrorText>
          <Link to="/fairbase/signin" className="link-page">
            Sign In
          </Link>
        </>
      )}
      {message === 'Firebase: Error (auth/invalid-login-credentials).' && (
        <>
          <ErrorText>You are not registered. Please follow the link</ErrorText>
          <Link to="/fairbase/signup" className="link-page">
            Sign Up
          </Link>
        </>
      )}
    </ErrorMessageWrap>
  );
}

//  {
//    message === 'Firebase: Error (auth/email-already-in-use).' ? (
//      <>
//        <ErrorText>This user already exists. Please follow the link</ErrorText>
//        <Link to="/fairbase/signin" className="link-page">
//          Sign In
//        </Link>
//      </>
//    ) : (
//      <ErrorText>Something went wrong</ErrorText>
//    );
//  }
//  {
//    message === 'Firebase: Error (auth/invalid-login-credentials).' ? (
//      <>
//        <ErrorText>You are not registered. Please follow the link</ErrorText>
//        <Link to="/fairbase/signup" className="link-page">
//          Sign Up
//        </Link>
//      </>
//    ) : (
//      <ErrorText>Something went wrong</ErrorText>
//    );
//  }
