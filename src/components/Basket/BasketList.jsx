import React, { useContext } from 'react';
import { BasketContext } from './ProductProvider';
import {
  BtDeleteOrder,
  BtnAdd,
  BtnDash,
  BurgImgOrder,
  BurgNameOrder,
  BurgPriceOrder,
  BurgerCardOrder,
  CostOfGoods,
  CountBasketWrap,
  CounterOrder,
  GoodsWrap,
  InTotalItem,
  InfoBasketWrap,
} from './Burger.styled';
import { nanoid } from '@reduxjs/toolkit';
import { BsCartDashFill, BsCartPlusFill, BsTrash3Fill } from 'react-icons/bs';

export default function BasketList() {
  const { goods, setGoods } = useContext(BasketContext);

  const calculateTotal = () => {
    let total = 0;
    goods.forEach(element => {
      total = total + element.count * element.price;
    });
    return total.toFixed(2);
  };

  const onChangeValue = (item, value) => {
    const ind = goods.indexOf(item);
    goods[ind].count = item.count + value;
    setGoods([...goods]);
  };

  const handleDeleteLikes = evt => {
    const index = Number(evt.currentTarget.id);
    let newItem = goods.filter(item => item.id !== index);
    setGoods(newItem);
    // console.log('ON DISGOODS', newItem);
  };

  const Arr = Array.isArray(goods) && goods.length > 0;
  return (
    // <CaseBasket>
    <GoodsWrap>
      {Arr &&
        goods.map(item => {
          const totalItem = (item.price * item.count).toFixed(2);
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
                <BurgNameOrder>{item.name}</BurgNameOrder>
              </InfoBasketWrap>
              <CountBasketWrap>
                <BurgPriceOrder>{item.price.toFixed(2)}</BurgPriceOrder>
                <BtnAdd onClick={() => onChangeValue(item, +1)}>
                  <BsCartPlusFill className="icon-add-order" />
                </BtnAdd>
                <CounterOrder>{item.count}</CounterOrder>
                <BtnDash
                  type="button"
                  disabled={item.count === 1}
                  onClick={() => onChangeValue(item, -1)}
                >
                  <BsCartDashFill className="icon-delete-order" />
                </BtnDash>
                <InTotalItem>{totalItem}</InTotalItem>
              </CountBasketWrap>
            </BurgerCardOrder>
          );
        })}
      <CostOfGoods>
        Total cost of goods:{'    '}
        {calculateTotal()}
      </CostOfGoods>
    </GoodsWrap>
    // </CaseBasket>
  );
}
