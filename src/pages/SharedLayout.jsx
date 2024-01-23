import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from 'components/Loader/Loading';
import {
  Container,
  WrapLeft,
  // WrapMenu,
  // WrapMobile,
  WrapRight,
} from './Page.styled';
import NavigatePage from './NavigatePage';
// import WindowWidth from './WindowWidth';

export default function SharedLayout() {
  return (
    <Container>
      <WrapLeft>
        <NavigatePage />
      </WrapLeft>
      <WrapRight>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </WrapRight>
    </Container>
  );
}
