import NavigatePage from 'pages/NavigatePage';
import { BtnHome, MobileBox, WrapMobile } from 'pages/Page.styled';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { IoHome } from 'react-icons/io5';

export default function MobileMenu() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <MobileBox>
      <BtnHome onClick={() => setIsHidden(!isHidden)}>
        <IoHome className="icon-home" />
      </BtnHome>
      {!isHidden &&
        createPortal(
          <WrapMobile
            style={{
              transform: isHidden ? 'translate(0, -100%)' : 'translate(0, 0)',
            }}
          >
            <NavigatePage />
          </WrapMobile>,
          document.body
        )}
    </MobileBox>
  );
}
