import React, { useEffect, useState } from 'react';
import {
  BtnAdd,
  BtnDash,
  CountBasketWrap,
  CounterOrder,
  InTotalItem,
} from './Burger.styled';
import { BsCartDashFill, BsCartPlusFill } from 'react-icons/bs';
// import { BasketContext } from './ProductProvider';

export default function CounterBasket({ item, calculateTotal }) {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
  // const [result, setResult] = useState(item.price);
  // let total = Number(item.price * count).toFixed(2);
  const handleIncrement = () => {
    setCount(prevState => prevState + 1);
  };
  const handleDecrement = () => {
    setCount(prevState => prevState - 1);
  };
  //  total = Number(item.price * count).toFixed(2);
  useEffect(() => {
    setTotal(() => (item.price * count).toFixed(2));
    calculateTotal(total);
  }, [count, item.price, total, calculateTotal]);

  // let result = (item.price * count).toFixed(2);
  return (
    <CountBasketWrap>
      <BtnAdd onClick={handleIncrement}>
        <BsCartPlusFill className="icon-add-order" />
      </BtnAdd>
      <CounterOrder>{count}</CounterOrder>
      <BtnDash type="button" disabled={count === 1} onClick={handleDecrement}>
        <BsCartDashFill className="icon-delete-order" />
      </BtnDash>
      <InTotalItem>{total}</InTotalItem>
    </CountBasketWrap>
  );
}
