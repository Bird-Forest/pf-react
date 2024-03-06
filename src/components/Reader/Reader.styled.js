import styled from 'styled-components';

export const ReaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.body};
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
`;
export const BtnReaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.header};
  width: 100%;
  /* height: 60px; */
  padding: 4px;
  /* margin-bottom: 16px; */
  @media screen and (min-width: 767px) {
    /* height: 80px; */
    padding: 8px;
  }
`;
export const BtnSun = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 24px;
  width: 60px;
  border-radius: 10px;
  margin-right: 10px;
  outline: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.card};
  background-color: ${props => props.theme.card};
  cursor: pointer;
  .icon-sun {
    height: 20px;
    width: 20px;
    fill: #ffeb3b;
  }
  .icon-moon {
    height: 20px;
    width: 20px;
    fill: #3f51b5;
  }
`;
export const BtnLeft = styled.button`
  height: 24px;
  width: 40px;
  border-radius: 10px;
  margin-right: 10px;
  outline: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.card};
  background-color: ${props => props.theme.card};
  cursor: pointer;
  .icon-arrow {
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.text};
  }
`;
export const BtnRight = styled.button`
  height: 24px;
  width: 40px;
  border-radius: 10px;
  outline: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.card};
  background-color: ${props => props.theme.card};
  cursor: pointer;
  .icon-arrow {
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.text};
  }
`;
export const TextReaderWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 80%;
  overflow-y: scroll;
  padding: 16px;
  margin: 8px 0;
  border-radius: 10px;
  background-color: ${props => props.theme.card};
  &::-webkit-scrollbar {
    right: 8px;
    width: 16px;
    /* margin: 20px 50px; */
    background-color: ${props => props.theme.card};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    width: 16px;
    background-color: ${props => props.theme.card};
    margin: 24px 0;
  }
  &::-webkit-scrollbar-thumb {
    width: 16px;
    height: 20px;
    border-top-right-radius: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 10px;
    border-right: 8px solid ${props => props.theme.card};
    background-color: ${props => props.theme.text};
  }
`;
export const CountReader = styled.span`
  font-size: clamp(1rem, 0.909rem + 0.45vw, 1.25rem);
  font-weight: 700;
  color: ${props => props.theme.text};
  padding: 0;
  margin: 0;
`;
// При ширине экрана 1600 высщта шрифта 80рх 1vw=20px 80/20= 4vw
export const TitleReader = styled.h2`
  text-align: center;
  font-size: clamp(1.25rem, 1.068rem + 0.91vw, 1.75rem);
  padding: 0;
  margin: 0 0 16px 0;
  color: ${props => props.theme.text};
`;
export const TextReader = styled.p`
  font-size: clamp(0.75rem, 0.568rem + 0.91vw, 1.25rem);
  color: ${props => props.theme.text};
`;
