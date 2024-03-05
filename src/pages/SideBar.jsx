import React, { useState } from 'react';
import {
  BtnHome,
  WrapBird,
  WrapLeftDeck,
  WrapLeftMob,
  WrapNavigate,
} from './Page.styled';
import NavigatePage from './NavigatePage';
import { IoHome } from 'react-icons/io5';
import WindowWidth from 'components/WindowWidth';
import { FaEarlybirds } from 'react-icons/fa';

export default function SideBar() {
  const [isHidden, setIsHidden] = useState(true);

  const width = WindowWidth();
  return (
    <>
      {width < 767 ? (
        <>
          <BtnHome onClick={() => setIsHidden(!isHidden)}>
            <IoHome className="icon-home" />
          </BtnHome>
          {!isHidden && (
            <WrapLeftMob
              style={{
                display: isHidden ? 'none' : 'block',
              }}
            >
              <NavigatePage />
            </WrapLeftMob>
          )}
        </>
      ) : (
        <WrapLeftDeck>
          <WrapNavigate>
            <NavigatePage />
            <WrapBird>
              <FaEarlybirds className="icon-bird" />
            </WrapBird>
          </WrapNavigate>
        </WrapLeftDeck>
      )}
    </>
  );
}
