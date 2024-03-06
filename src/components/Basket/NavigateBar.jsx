import React, { useContext } from 'react';
import { NavigateBasket, WrapCustomPage, WrapNavPage } from './Burger.styled';
import { NavLink } from 'react-router-dom';
import { BsBasket3Fill, BsHeartFill } from 'react-icons/bs';
import { BasketContext, FavoritesContext } from './ProductProvider';

export default function NavigateBar() {
  const { goods } = useContext(BasketContext);
  const { likes } = useContext(FavoritesContext);

  const Arr1 = Array.isArray(likes) && likes.length > 0;
  const Arr2 = Array.isArray(goods) && goods.length > 0;
  return (
    <NavigateBasket>
      <WrapNavPage>
        <NavLink className="home" to="" end>
          Home
        </NavLink>
        <NavLink className="burgers" to="burger">
          Burgers
        </NavLink>
      </WrapNavPage>
      <WrapCustomPage>
        {Arr1 ? <span className="count">{likes.length}</span> : ' '}
        <NavLink to="favorites" className="like">
          <BsHeartFill className="icon-top-heart" />
        </NavLink>
        {Arr2 ? <span className="count">{goods.length}</span> : ' '}
        <NavLink to="order" className="good">
          <BsBasket3Fill className="icon-top-basket" />
        </NavLink>
      </WrapCustomPage>
    </NavigateBasket>
  );
}
