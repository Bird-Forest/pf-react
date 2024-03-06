import React, { useContext } from 'react';
import {
  BtBasketFavor,
  BtDeleteFavor,
  BurgDescrCard,
  BurgImgCard,
  BurgImgWrap,
  BurgInfoWrap,
  BurgIngr,
  BurgIngrImg,
  BurgIngrName,
  BurgIngrTitle,
  BurgIngrWrap,
  BurgNameCard,
  BurgPriceCard,
  BurgVegCard,
  WrapBurgerCard,
} from './Burger.styled';
import { nanoid } from '@reduxjs/toolkit';
import { BsTrash3Fill, BsBasket3Fill } from 'react-icons/bs';
import { BasketContext, FavoritesContext } from './ProductProvider';

export default function BurgerCard({ item }) {
  const { likes, setLikes } = useContext(FavoritesContext);
  const { goods, setGoods } = useContext(BasketContext);

  const handleAddToBasket = evt => {
    const nameLike = evt.currentTarget.name;
    const index = Number(evt.currentTarget.id);
    const hasNameItem = goods.some(item => item.name === nameLike);

    if (hasNameItem) {
      alert(`${nameLike} is already in basket`);
      return;
    }
    let like = likes.find(like => like.id === index);
    like.count = 1;
    setGoods([...goods, like]);
    // console.log('ON GOODS', goods);
  };

  const handleDeleteLikes = evt => {
    const index = Number(evt.currentTarget.id);
    let newlikes = likes.filter(like => like.id !== index);
    setLikes(newlikes);
    // console.log('ON DISLIKE', newlikes);
  };
  return (
    <WrapBurgerCard id={item.id}>
      <BurgNameCard>{item.name}</BurgNameCard>
      <BurgImgWrap>
        <BurgImgCard src={item.images[0].sm} alt={item.name} />
        <BurgDescrCard>
          <h6 className="title-desc">Description: </h6>
          <p className="descript">{item.desc}</p>
        </BurgDescrCard>
      </BurgImgWrap>
      <BurgIngrTitle>Ingredients</BurgIngrTitle>
      <BurgIngrWrap>
        {item.ingredients.map(el => {
          return (
            <BurgIngr key={nanoid()} id={el.id}>
              <BurgIngrImg src={el.img} alt={el.name} />
              <BurgIngrName>{el.name}</BurgIngrName>
            </BurgIngr>
          );
        })}
      </BurgIngrWrap>
      <BurgInfoWrap>
        {item.veg === false ? (
          <BurgVegCard>Vegan: NO</BurgVegCard>
        ) : (
          <BurgVegCard>Vegan: YES</BurgVegCard>
        )}
        <BurgPriceCard>Price: {item.price}</BurgPriceCard>

        <BtBasketFavor
          type="button"
          onClick={handleAddToBasket}
          id={item.id}
          name={item.name}
        >
          <BsBasket3Fill className="icon-basket-favor" />
        </BtBasketFavor>
        <BtDeleteFavor type="button" onClick={handleDeleteLikes} id={item.id}>
          <BsTrash3Fill className="icon-delete-favor" />
        </BtDeleteFavor>
      </BurgInfoWrap>
    </WrapBurgerCard>
  );
}
