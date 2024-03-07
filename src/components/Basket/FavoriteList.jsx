import React, { useContext } from 'react';
import { FavoritesContext } from './ProductProvider';
import { FavoritesWrap } from './Burger.styled';
import { nanoid } from '@reduxjs/toolkit';
import EmptyPage from './EmptyPage';
import FavoriteBurger from './FavoriteBurger';

export default function FavoriteList() {
  const { likes } = useContext(FavoritesContext);

  const Arr = Array.isArray(likes) && likes.length > 0;
  return (
    <FavoritesWrap>
      {Arr ? (
        likes.map(item => {
          return <FavoriteBurger key={nanoid()} item={item} />;
        })
      ) : (
        <EmptyPage />
      )}
    </FavoritesWrap>
  );
}
