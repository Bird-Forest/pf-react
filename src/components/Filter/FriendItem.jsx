import React from 'react';
import {
  ItemCountry,
  ItemElement,
  ItemImg,
  ItemName,
  ItemWrap,
  WrapInfo,
} from './Product.styled';

export default function FriendItem({ item }) {
  return (
    <ItemWrap id={item.id}>
      <ItemImg src={item.avatar} alt={item.name} />
      <WrapInfo>
        <ItemName>{item.name}</ItemName>
        <ItemCountry>From: {item.country}</ItemCountry>
        <ItemElement>Job: {item.job}</ItemElement>
        <ItemElement>Years old: {item.age}</ItemElement>
        <ItemElement>Pet: {item.animal}</ItemElement>
        <ItemElement>Music: {item.music}</ItemElement>
      </WrapInfo>
    </ItemWrap>
  );
}
