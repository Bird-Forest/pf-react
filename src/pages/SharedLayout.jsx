import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from 'components/Loader/Loading';

export default function SharedLayout() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}
