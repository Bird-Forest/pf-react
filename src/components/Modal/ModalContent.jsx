import React from 'react';
import { BtnClosePopUp, MessageWelkome, ModalrWrap } from './Modal.styled';
import { IoClose } from 'react-icons/io5';

export default function ModalContent({ title, text, onClose }) {
  return (
    <ModalrWrap>
      <BtnClosePopUp onClick={onClose} type="button">
        <IoClose className="close-icon" />
      </BtnClosePopUp>
      <MessageWelkome>
        <h className="title">Welcome !</h>
        <p className="text">You have successfully registered !</p>
      </MessageWelkome>
    </ModalrWrap>
  );
}
