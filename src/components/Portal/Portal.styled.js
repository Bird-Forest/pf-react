import styled from 'styled-components';
export const ErrorMessageWrap = styled.div`
  position: fixed;
  top: 60%;
  left: 57%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 240px;
  height: 80px;
  padding: 20px;
  border-radius: 8px;
  border: 4px solid #ff1744;
  background-color: #fafafa;
  transform: translate(-50%, -50%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  .link-page {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: #424242;
    list-style: none;
  }
`;
export const BtnError = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: none;
  /* border-radius: 50%; */
  background-color: #fafafa;
  cursor: pointer;
  padding: 0;
  margin: 0;
  .close-icon {
    width: 24px;
    height: 24px;
    fill: #424242;
  }
`;
export const ErrorText = styled.p`
  font-size: 20px;
  text-align: center;
  color: #424242;
`;
