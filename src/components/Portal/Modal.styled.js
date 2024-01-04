import { styled } from 'styled-components';

export const ModalrWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  overflow: hidden;
  width: 240px;
  height: 80px;
  border-radius: 8px;
  background-color: #e0f7fa;
  transform: translate(-50%, -50%);
  transition: transform 300ms cubic-bezier(0.65, 1.43, 0, -1.33);
  padding: 24px;
`;
export const MessageWelkome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  .title {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: #2196f3;
  }
  .text {
    font-size: 16px;
    text-align: center;
    color: #2196f3;
  }
`;
export const BtnClosePopUp = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #e7e9fc;
  color: #2e2f42;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #64b5f6;
    color: white;
  }
  .close-icon {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;
