import React, { useContext } from 'react';
import { FavoritesContext } from './ProductProvider';
import { FavoritesWrap } from './Burger.styled';
import { nanoid } from '@reduxjs/toolkit';
import BurgerCard from './BurgerCard';

export default function FavoritesList() {
  const { likes } = useContext(FavoritesContext);

  const Arr = Array.isArray(likes) && likes.length > 0;
  return (
    <FavoritesWrap>
      {Arr &&
        likes.map(item => {
          return <BurgerCard key={nanoid()} item={item} />;
        })}
    </FavoritesWrap>
  );
}
