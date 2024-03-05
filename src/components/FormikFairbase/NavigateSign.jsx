import React from 'react';
import { WrapNavSign } from './Form.styled';
import { NavLink } from 'react-router-dom';

export default function NavigateSign() {
  return (
    <>
      <WrapNavSign>
        <NavLink className="navigate" to="" end>
          My form
        </NavLink>
        <NavLink className="navigate" to="signup">
          Sign Up
        </NavLink>
        <NavLink className="navigate" to="signin">
          Sign In
        </NavLink>
      </WrapNavSign>
    </>
  );
}
