import { Container } from 'pages/Page.styled';
import SideBar from 'pages/SideBar';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const SharedLayout = lazy(() => import('pages/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage'));
const FormikPage = lazy(() => import('pages/FormikPage'));
const SignIn = lazy(() => import('components/FormikFairbase/SignIn'));
const SignUp = lazy(() => import('components/FormikFairbase/SignUp'));
const MyForm = lazy(() => import('components/FormikFairbase/MyForm'));
const ReaderPage = lazy(() => import('pages/ReaderPage'));
const FilterPage = lazy(() => import('pages/FilterPage'));
const BasketPage = lazy(() => import('pages/BasketPage'));
const HomeBurger = lazy(() => import('components/Basket/HomeBurger'));
const BurgerList = lazy(() => import('components/Basket/BurgerList'));
const FavoriteList = lazy(() => import('components/Basket/FavoriteList'));
const BasketList = lazy(() => import('./components/Basket/BasketList'));

export default function App() {
  return (
    <Container>
      <SideBar />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="fairbase" element={<FormikPage />}>
            <Route path="" element={<MyForm />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
          <Route path="reader" element={<ReaderPage />} />
          <Route path="filter" element={<FilterPage />} />
          <Route path="basket" element={<BasketPage />}>
            <Route path="" element={<HomeBurger />} />
            <Route path="burger" element={<BurgerList />} />
            <Route path="favorites" element={<FavoriteList />} />
            <Route path="order" element={<BasketList />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}
