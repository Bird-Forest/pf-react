import React from 'react';
import Burger from './Burger';
import { nanoid } from '@reduxjs/toolkit';
import { BurgersWrap } from './Burger.styled';
import data from './data.json';

const burgers = data;
// console.log(burgers);

export default function ShowcaseBurgers() {
  const Arr = Array.isArray(burgers) && burgers.length > 0;
  return (
    // <CaseBurger>
    <BurgersWrap>
      {Arr &&
        burgers.map(item => {
          return <Burger key={nanoid()} item={item} />;
        })}
    </BurgersWrap>
    // </CaseBurger>
  );
}
