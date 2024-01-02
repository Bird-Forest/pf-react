import React from 'react';
import { WrapNavSign } from './Form.styled';
import { NavLink } from 'react-router-dom';

export default function NavigateSign() {
  return (
    <>
      <WrapNavSign>
        <NavLink className="navigate" to="" end>
          Sign Up
        </NavLink>
        <NavLink className="navigate" to="sign">
          Sign In
        </NavLink>
        <NavLink className="navigate" to="myform">
          My form
        </NavLink>
      </WrapNavSign>
    </>
  );
}
