import React from 'react';
import { NavLink } from 'react-router-dom';
import { WrapMenu } from './Page.styled';

export default function NavigatePage() {
  return (
    <WrapMenu>
      <NavLink className="navigate" to="/">
        Home
      </NavLink>
      <NavLink className="navigate" to="/fairbase">
        Formik
      </NavLink>
      <NavLink className="navigate" to="/reader">
        Reader
      </NavLink>
      <NavLink className="navigate" to="/filter">
        Filters
      </NavLink>
      <NavLink className="navigate" to="/basket">
        Basket
      </NavLink>
    </WrapMenu>
  );
}
