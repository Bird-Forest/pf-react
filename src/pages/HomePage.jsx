import React from 'react';
import { HomeHeader } from './Page.styled';
import MobileMenu from 'components/MobileMenu';

export default function HomePage() {
  return (
    <div>
      <HomeHeader>
        <MobileMenu />
        <h3>Welcome!</h3>
      </HomeHeader>
    </div>
  );
}
