import styled from 'styled-components';
// import clock from '../img/clock1.png';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
`;
export const MobileBox = styled.div`
  display: block;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const BtnHome = styled.button`
  display: block;
  width: 60px;
  height: 60px;
  cursor: pointer;
  .icon-home {
    width: 40px;
    height: 40px;
    fill: white;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const WrapMobile = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  display: flex;
  width: 240px;
  height: 600px;
  background-color: red;
`;
export const WrapLeft = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    top: 0;
    left: 0;
    display: block;
    width: 15vw;
    height: 100vmax;
    padding: 0 8px;
    background-color: #1a237e;
    margin: 0 0 auto 0;
    padding: 0 16px;
  }
`;

export const WrapMenu = styled.div`
  /* top: 0;
  left: 0; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* width: 15vw;
  height: 100vmax; */
  /* background-color: #1a237e;
  margin: 0 0 auto 0;
  padding: 0 16px; */
  .navigate {
    font-family: 'Prompt', sans-serif;
    display: block;
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    &.active {
      color: #304ffe;
    }
  }
`;
export const WrapRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vmax;
  /* overflow-y: scroll; */
  margin: 0;
  padding: 0;
  @media screen and (min-width: 767px) {
    width: 85vw;
  }
`;
export const HomeHeader = styled.div`
  top: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0;
  margin: 0;
  background-color: aliceblue;
  @media screen and (min-width: 767px) {
    height: 80px;
  }
`;
