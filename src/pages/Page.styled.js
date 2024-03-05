import styled from 'styled-components';
// import clock from '../img/clock1.png';

export const Container = styled.div`
  /* position: relative; */
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
// export const MobileBox = styled.div`
//   display: block;
//   padding: 0;
//   margin: 0;
//   @media screen and (min-width: 767px) {
//     display: none;
//   }
// `;

export const BtnHome = styled.button`
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 2px 20px;
  .icon-home {
    width: 24px;
    height: 24px;
    fill: #2196f3;
  }
  @media screen and (min-width: 767px) {
    display: none;
  }
`;
export const WrapLeftMob = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 1;
  display: block;
  width: 100%;
  background-color: #2196f3;
`;
export const WrapLeftDeck = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 15vw;
    background-color: #2196f3;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;
export const WrapRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  /* overflow-y: scroll; */
  margin: 0;
  padding: 0;
  @media screen and (min-width: 767px) {
    width: 85vw;
  }
`;

export const WrapNavigate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`;
export const WrapMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  height: fit-content;
  /* margin: 0 0 100px 0; */
  /* margin-bottom: auto; */
  padding: 0;
  margin: 60px 0;
  /* background-color: #2196f3; */
  .navigate {
    font-family: 'Prompt', sans-serif;
    display: block;
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    &.active {
      color: #0d47a1;
    }
  }
`;
export const WrapBird = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
  /* margin-top: 80px; */
  .icon-bird {
    width: 80px;
    height: 80px;
    fill: white;
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
  /* @media screen and (min-width: 767px) {
    height: 80px;
  } */
`;
