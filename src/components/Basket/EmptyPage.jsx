import React from 'react';
import { FaEarlybirds } from 'react-icons/fa';
import { WrapEmpty } from './Burger.styled';

export default function EmptyPage() {
  return (
    <WrapEmpty>
      <h2 className="title">There's nothing here yet</h2>
      <FaEarlybirds className="icon-empty" />
    </WrapEmpty>
  );
}
