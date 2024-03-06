import React, { Suspense } from 'react';
import ProductProvider from 'components/Basket/ProductProvider';
import { Outlet } from 'react-router-dom';
import { Loading } from 'components/Loader/Loading';
import NavigateBar from 'components/Basket/NavigateBar';
import { WrapRight } from './Page.styled';
import { CaseBurger } from 'components/Basket/Burger.styled';

export default function BasketPage() {
  return (
    <ProductProvider>
      <WrapRight>
        <CaseBurger>
          <NavigateBar />
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </CaseBurger>
      </WrapRight>
    </ProductProvider>
  );
}
