import React, { useContext, useEffect } from 'react';
import { BasketContext } from './ProductProvider';
import { CostOfGoods, GoodsWrap } from './Burger.styled';
import { nanoid } from '@reduxjs/toolkit';
import EmptyPage from './EmptyPage';
import BasketBurger from './BasketBurger';

export default function BasketList() {
  const { goods } = useContext(BasketContext);

  // const getTotal = () => {
  //   let total = 0;
  //   goods.forEach(item => {
  //     total = total + item.count * item.price;
  //   });
  //   return total.toFixed(2);
  // };

  const calculateTotal = goods => {
    return goods.reduce((total, item) => {
      return total + Number(item.price * item.count);
    }, 0);
  };

  useEffect(() => {
    calculateTotal(goods);
  }, [goods]);
  // const totalAll = useMemo(() => calculateTotal(goods), [goods]);

  // console.log(totalAll);

  const Arr = Array.isArray(goods) && goods.length > 0;
  return (
    <GoodsWrap>
      {Arr ? (
        goods.map(item => {
          return <BasketBurger key={nanoid()} item={item} />;
        })
      ) : (
        <EmptyPage />
      )}
      <CostOfGoods>
        Total cost of goods: {calculateTotal(goods).toFixed(2)}
      </CostOfGoods>
    </GoodsWrap>
  );
}
