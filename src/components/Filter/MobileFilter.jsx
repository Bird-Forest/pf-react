import React, { useState } from 'react';
import { BtnFilter, FMWrap, MobileFilterArr } from './Product.styled';
import { createPortal } from 'react-dom';

export default function MobileFilter({ children }) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <MobileFilterArr MobileFilterArr>
      <BtnFilter onClick={() => setIsHidden(!isHidden)}>Filters</BtnFilter>
      {!isHidden &&
        createPortal(
          <FMWrap
            style={{
              transform: isHidden ? 'translate(0, -100%)' : 'translate(0, 0)',
            }}
          >
            {children}
          </FMWrap>,
          document.body
        )}
      {/* {!isHidden && (
        <FilterWrap
          style={{
            transform: isHidden ? 'translate(0, -100%)' : 'translate(0, 0)',
          }}
        >
          {children}
        </FilterWrap>
      )} */}
    </MobileFilterArr>
  );
}
