import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BasketPageWrap = styled.div`
  display: block;
  width: 100%;
  height: 100vmax;
  background-color: #ffe082;
  background-image: url(${'https://catherineasquithgallery.com/uploads/posts/2021-03/1614857877_175-p-kulinarnii-fon-242.jpg'});
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 0 auto;
  padding: 0;
`;
// ****************** Header ******************
export const NavigateBasket = styled.div`
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  width: 100%;
  background-color: #754a08;
  padding: 0;
  margin: 0;
  .burgers {
    font-family: 'Prompt', sans-serif;
    font-size: clamp(1rem, 0.724rem + 1.38vw, 1.5rem);
    font-weight: 700;
    color: #64dd17;
    text-decoration: none;
    transition: all 0.3s;
    padding: 0;
    margin: 8px auto 8px 40px;
    &.active {
      color: #ff9800;
    }
  }
  .home {
    font-family: 'Prompt', sans-serif;
    font-size: clamp(1rem, 0.724rem + 1.38vw, 1.5rem);
    font-weight: 700;
    color: #64dd17;
    text-decoration: none;
    transition: all 0.3s;
    padding: 0;
    margin: 8px auto 8px 40px;
    &.active {
      color: #ff9800;
    }
  }
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  color: #64dd17;
  .icon-top-heart {
    width: 34px;
    height: 34px;
    fill: #64dd17;
    padding: 0;
    margin: 10px 40px 6px 0;
  }
  &.active > .icon-top-heart {
    fill: #ff9800;
  }
  .icon-top-basket {
    width: 34px;
    height: 34px;
    fill: #64dd17;
    padding: 0;
    margin: 8px 40px 8px 0;
  }
  &.active > .icon-top-basket {
    fill: #ff9800;
  }
  .count {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    font-size: clamp(1rem, 0.724rem + 1.38vw, 1.5rem);
    font-weight: 700;
    text-decoration: none;
    color: #ff9800;
    border-radius: 8px;
    border: 2px solid #ff9800;
    padding: 0;
    margin: 0 0 0 4px;
  }
`;

// ******************** Burger ***************************
// export const CaseBurger = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   background-color: #ffac33;
//   padding: 0;
//   margin: 0;
// `;
export const BurgersWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: fit-content;
  background-color: #ffac33;
  padding: 8px 0;
  margin: 0;
`;
export const BurgWrap = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  height: 200px;
  border-radius: 8px;
  background-color: white;
  padding: 10px;
`;
export const IconWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 140px;
  height: 32px;
`;
export const BtHeart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  .icon-heart {
    width: 20px;
    height: 20px;
    fill: #ff9800;
  }
  .icon-heart-fill {
    width: 20px;
    height: 20px;
    fill: #ff9800;
  }
`;
export const BtBasket = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  .icon-basket {
    width: 20px;
    height: 20px;
    fill: #ff9800;
  }
  .icon-basket-fill {
    width: 20px;
    height: 20px;
    fill: #ff9800;
  }
`;
export const BurgImages = styled.img`
  display: block;
  width: 140px;
  border-radius: 8px;
  object-fit: cover;
`;
export const BurgName = styled.h3`
  display: flex;
  font-size: clamp(8px, 0.318rem + 0.91vw, 16px);
  text-align: center;
  color: #754a08;
  /* color: #ab5600; */
  padding: 0;
  margin: 0 0 4px 0;
`;
export const BurgPrice = styled.h3`
  font-size: clamp(8px, 0.409rem + 0.45vw, 12px);
  text-align: center;
  color: #754a08;
  padding: 0;
  margin: 0 0 4px 0;
`;
export const BurgVeg = styled.h3`
  font-size: clamp(8px, 0.409rem + 0.45vw, 12px);
  text-align: center;
  color: #754a08;
  padding: 0;
  margin: 0;
`;
// ***********   FavoritesList **************************************
// export const CaseFavor = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100vmax;
//   background-color: #ffd180;
//   padding: 0;
//   margin: 0;
// `;
export const FavoritesWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: fit-content;
  background-color: #ffd180;
  padding: 16px 0;
  margin: 0 auto;
`;
export const BurgerCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 596px;
  height: max-content;
  background-color: white;
  border-radius: 10px;
  padding: 0;
  margin: 0;
`;
export const BurgNameCard = styled.h2`
  position: relative;
  top: 12px;
  left: 16px;
  display: inline-block;
  width: 580px;
  height: 28px;
  text-align: start;
  font-size: clamp(12px, 0.568rem + 0.91vw, 20px);
  font-weight: 700;
  color: #754a08;
  padding: 0;
  margin: 0;
`;
export const BurgImgWrap = styled.div`
  position: relative;
  top: 16px;
  left: 8px;
  right: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 580px;
  height: 140px;
  padding: 0;
  margin: 0;
`;
export const BurgImgCard = styled.img`
  display: block;
  width: 140px;
  height: 140px;
  object-fit: content;
  padding: 0;
  margin: 0;
`;
export const BurgDescrCard = styled.p`
  display: inline-block;
  font-size: clamp(8px, 0.409rem + 0.45vw, 12px);
  padding: 0;
  margin: 0;
  color: #754a08;
  .title-desc {
    font-size: clamp(8px, 0.318rem + 0.91vw, 16px);
    font-weight: 700;
    color: #754a08;
  }
`;
export const BurgIngrTitle = styled.h3`
  position: relative;
  top: 16px;
  left: 16px;
  display: inline-block;
  font-size: clamp(12px, 0.568rem + 0.91vw, 20px);
  font-weight: 500;
  color: #754a08;
  width: 580px;
  height: 32px;
  padding: 0;
  margin: 0;
`;
export const BurgIngrWrap = styled.ul`
  position: relative;
  top: 16px;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 596px;
  height: auto;
  padding: 0;
  margin: 0;
`;
export const BurgIngr = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 120px;
  border: 2px solid #ff9800;
  border-radius: 5px;
  padding: 4px;
  margin: 0;
`;
export const BurgIngrImg = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  padding: 0;
  margin: 0;
`;
export const BurgIngrName = styled.p`
  display: inline-block;
  font-size: 12px;
  text-align: center;
  color: #754a08;
  padding: 0;
  margin: 0;
`;
export const BurgInfoWrap = styled.div`
  position: relative;
  top: 8px;
  left: 8px;
  right: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 580px;
  height: 76px;
  margin: 0;
  padding: 0;
`;
export const BurgVegCard = styled.h3`
  display: inline-block;
  font-size: clamp(8px, 0.318rem + 0.91vw, 16px);
  font-weight: 700;
  color: #754a08;
  padding: 0;
  margin: 0 24px;
`;
export const BurgPriceCard = styled.h3`
  display: inline-block;
  font-size: clamp(8px, 0.318rem + 0.91vw, 16px);
  font-weight: 700;
  color: #754a08;
  padding: 0;
  margin: 0 200px 0 0;
`;
export const BtBasketFavor = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 0 40px 0 0;
  padding: 0;
  .icon-basket-favor {
    width: 32px;
    height: 32px;
    fill: #ff9800;
  }
  .icon-basket-favor:hover,
  .icon-basket-favor:focus {
    fill: #e65100;
  }
`;
export const BtDeleteFavor = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 0 24px 0 0;
  padding: 0;
  &:hover,
  &:focus {
    color: #e65100;
  }
  .icon-delete-favor {
    width: 32px;
    height: 32px;
    fill: #ff9800;
  }
  .icon-delete-favor:hover,
  .icon-delete-favor:focus {
    fill: #e65100;
  }
`;
// ****************  BasketList  ***********************
// export const CaseBasket = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100vmax;

//   padding: 0;
//   margin: 0;
// `;
export const GoodsWrap = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  background-color: #ffd180;
  padding: 8px;
  margin: 0;
`;
export const BurgerCardOrder = styled.li`
  /* position: relative; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  /* width: 100%; */
  width: 80vw;
  /* margin: 0 10vw; */
  height: max-content;
  background-color: white;
  border-radius: 8px;
  padding: 0 16px;
  margin: 0;
  /* @media screen and (min-width: 844px) {
    width: 80px;
  } */
`;
export const InfoBasketWrap = styled.div`
  display: flex;
  width: 100px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 0;
`;
export const BtDeleteOrder = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  .icon-delete-favor {
    width: 24px;
    height: 24px;
    fill: #ff9800;
  }
  .icon-delete-favor:hover,
  .icon-delete-favor:focus {
    fill: #e65100;
  }
`;
export const BurgImgOrder = styled.img`
  display: block;
  width: 52px;
  height: 52px;
  object-fit: content;
  padding: 0;
  margin: 0;
`;
export const BurgNameOrder = styled.h2`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  font-size: clamp(12px, 0.568rem + 0.91vw, 20px);
  font-weight: 700;
  color: #754a08;
  padding: 0;
  margin: 0;
`;

export const CountBasketWrap = styled.div`
  display: flex;
  width: 160px;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  margin: 0;
  .wrap-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
  .btn-counter {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 28px;
    height: 14px;
    border: 2px solid #ff9800;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }
  .icon-count {
    width: 12px;
    stroke: #754a08;
  }
`;
export const BurgPriceOrder = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 32px;
  font-size: clamp(8px, 0.318rem + 0.91vw, 16px);
  color: #754a08;
  border-radius: 8px;
  border: 2px solid #ff9800;
  padding: 0;
  margin: 0;
`;
export const CounterOrder = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  font-size: clamp(8px, 0.318rem + 0.91vw, 16px);
  color: #754a08;
  border-radius: 8px;
  border: 2px solid #ff9800;
  padding: 0;
  margin: 0;
`;
export const InTotalItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 32px;
  font-size: clamp(8px, 0.318rem + 0.91vw, 16px);
  color: #754a08;
  border-radius: 8px;
  border: 2px solid #ff9800;
  padding: 0;
  margin: 0;
`;
export const CostOfGoods = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #ffac33;
  border-radius: 8px;
  font-size: clamp(12px, 0.568rem + 0.91vw, 20px);
  font-weight: 700;
  color: #754a08;
  width: 720px;
  height: 60px;
  border-radius: 8px;
  padding: 0 16px;
  margin: 0;
`;
// "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McChicken-1:1-4-product-tile-desktop"
