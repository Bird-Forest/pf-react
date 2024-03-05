import React, { useState } from 'react';
import {
  BurgPriceOrder,
  CountBasketWrap,
  CounterOrder,
  InTotalItem,
} from './Burger.styled';
import { FiMinus, FiPlus } from 'react-icons/fi';

export default function CounterBasket({ item }) {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <CountBasketWrap>
      <div className="wrap-btn">
        <button className="btn-counter" onClick={handleIncrement}>
          <FiPlus className="icon-count" />
        </button>
        <button
          className="btn-counter"
          type="button"
          disabled={count === 1}
          onClick={handleDecrement}
        >
          <FiMinus className="icon-count" />
        </button>
      </div>
      <CounterOrder>{count}</CounterOrder>
      <BurgPriceOrder>{item.price.toFixed(2)}</BurgPriceOrder>
      <InTotalItem>{(item.price.toFixed(2) * count).toFixed(2)}</InTotalItem>
    </CountBasketWrap>
  );
}
