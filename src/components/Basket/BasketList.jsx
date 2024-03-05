import React, { useContext } from 'react';
import { BasketContext } from './ProductProvider';
import {
  BtDeleteOrder,
  BurgImgOrder,
  BurgNameOrder,
  BurgerCardOrder,
  CostOfGoods,
  GoodsWrap,
  InfoBasketWrap,
} from './Burger.styled';
import { nanoid } from '@reduxjs/toolkit';
import { BsTrash3Fill } from 'react-icons/bs';
import CounterBasket from './CounterBascet';

export default function BasketList() {
  const { goods, setGoods } = useContext(BasketContext);

  const calculateTotal = () => {
    let total = 0;
    goods.forEach(item => {
      total = total + item.count * item.price;
    });
    return total.toFixed(2);
  };

  const handleDeleteLikes = evt => {
    const index = Number(evt.currentTarget.id);
    let arr = goods.filter(item => item.id !== index);
    setGoods(arr);
  };

  const Arr = Array.isArray(goods) && goods.length > 0;
  return (
    <GoodsWrap>
      {Arr &&
        goods.map(item => {
          return (
            <BurgerCardOrder key={nanoid()} id={item.id}>
              <InfoBasketWrap>
                <BtDeleteOrder
                  type="button"
                  onClick={handleDeleteLikes}
                  id={item.id}
                >
                  <BsTrash3Fill className="icon-delete-favor" />
                </BtDeleteOrder>
                <BurgImgOrder src={item.images[0].sm} alt={item.name} />
              </InfoBasketWrap>
              <BurgNameOrder>{item.name}</BurgNameOrder>
              <CounterBasket item={item} />
            </BurgerCardOrder>
          );
        })}
      <CostOfGoods>
        Total cost of goods:{'    '}
        {calculateTotal}
      </CostOfGoods>
    </GoodsWrap>
  );
}
