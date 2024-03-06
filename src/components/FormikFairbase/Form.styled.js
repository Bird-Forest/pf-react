import styled from 'styled-components';
import myAgree from '../../img/3check.png';

export const FormikPageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  /* margin: 40px 0; */
  /* padding: 8vh 0 0 0; */
`;
export const WrapNavSign = styled.nav`
  top: 0;
  right: 0;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #757575;
  gap: 8px;
  width: 100%;
  margin: 0;
  padding: 0;
  .navigate {
    font-family: 'Prompt', sans-serif;
    font-size: clamp(0.75rem, 0.568rem + 0.91vw, 1.25rem);
    font-weight: 700;
    margin: 0;
    color: #212121;
    text-decoration: none;
    transition: all 0.3s;
    cursor: pointer;
    padding: 8px 0;
    &.active {
      color: white;
    }
  }
  @media screen and (min-width: 767px) {
    gap: 20px;
    width: 85vw;
    padding-left: 15vw;
  }
`;
// *******  All form **************
export const WrapFormUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* width: 100%;
  height: fit-content;
  background-color: #fafafa;
  margin: 0;
  padding: 24px 0 0 0; */
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0;
  }
`;
// ******** Auth form **************
export const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  border: 2px solid #eeeeee;
  width: 360px;
  height: max-content;
  margin: 0;
  padding: 8px;
  .title-auth {
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    color: #616161;
    margin-bottom: 4px;
  }
`;
export const InputBox = styled.div`
  position: relative;
  padding: 0;
  margin: 8px auto 8px auto;
  .input {
    width: 300px;
    height: 20px;
    font-size: 12px;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 4px 8px;
    &:focus + label,
    &:not(:placeholder-shown) + label {
      transform: translateY(-20px);
      font-size: 12px;
      text-align: center;
      color: #616161;
      outline: #616161;
    }
  }
  .label {
    position: absolute;
    top: 32%;
    left: 28px;
    transform: translateY(-32%);
    font-size: 12px;
    text-align: center;
    color: #616161;
    background-color: white;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
    padding: 0;
    margin: 0;
  }
`;
// ************ Select form ***********
export const SelectFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  border: 2px solid #eeeeee;
  width: 360px;
  height: 68px;
  padding: 8px;
  margin: 0;
  .title-select {
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    color: #616161;
    margin-bottom: 4px;
  }
  .form-select {
    width: 316px;
    height: 36px;
    font-size: 12px;
    font-weight: 400;
    color: #616161;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;

    margin: 0;
  }
  .option {
    font-size: 12px;
    color: #616161;
  }
`;
// *********** Textarea form *************
export const AreaFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  border: 2px solid #eeeeee;
  width: 360px;

  margin: 0;
  padding: 8px;
  .title-area {
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin-bottom: 8px;
  }
  .textarea {
    width: 308px;
    height: 40px;
    font-size: 16px;
    font-weight: 400;
    color: #616161;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 8px;
    margin: 0;
  }
`;
// ************  Rating ********************
export const RatingFormWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: white;
  border-radius: 16px;
  border: 2px solid #eeeeee;
  width: 200px;
  height: 24px;
  padding: 8px;
  margin: 0;
  .title-rating {
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin-bottom: 8px;
  }
  .rating {
    width: 32px;
    height: 24px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #616161;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 0;
    margin: 0;
  }
`;
// ************  Checkbox ********************
export const CheckboxFormWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: white;
  border-radius: 16px;
  border: 2px solid #eeeeee;
  width: 300px;
  height: 20px;
  margin: 0;
  padding: 8px;
  .title-checkbox {
    display: flex;
    justify-content: ctnter;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: #616161;
  }
  .checkbox {
    width: 20px;
    height: 20px;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 0;
    margin: 0;
  }
`;
// ********** Button- submit ***************
export const BtnForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 700;
  background-color: #bdbdbd;
  border-radius: 16px;
  border: 1px solid #bdbdbd;
  outline: #bdbdbd;
  width: 360px;
  height: 40px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #757575;
  }
`;
// ********** Erorr ************************
export const ErrorText = styled.div`
  display: flex;
  justify-content: centr;
  align-items: center;
  text-align: center;
  width: 300px;
  font-size: 12px;
  color: #ff1744;
  padding: 0;
  margin: 0;
`;
// ***************    MyForm  *****************
export const MyStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  margin: 0;
  padding: 0;

  .my-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    background-color: white;
    border-radius: 16px;
    border: 2px solid #eeeeee;
    margin: 8px auto;
    gap: 4px;
    padding: 8px;
  }
  .my-title {
    font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin: 0;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    color: white;
    font-size: 16px;
    font-weight: 700;
    background-color: #bdbdbd;
    border-radius: 16px;
    border: 1px solid #bdbdbd;
    outline: #bdbdbd;
    height: 40px;
    margin: 0;
    padding: 0 100px;
    cursor: pointer;
    &:hover,
    :focus {
      background-color: #757575;
    }
    @media screen and (min-width: 767px) {
      margin: 8px auto;
    }
  }
`;
export const ErrorMessage = styled.div`
  color: #ff1744;
  font-size: 12px;
`;
export const InputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 8px auto 8px auto;
  .my-input {
    display: flex;
    flex-grow: 1;
    /* height: 20px; */
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 4px 8px;
    margin: 0;
  }
  .my-input.error {
    border: 2px solid #ff1744;
  }
  .label-input {
    position: absolute;
    top: -24%;
    left: 28px;
    font-size: 14px;
    text-align: center;
    color: #616161;
    background-color: white;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
    padding: 0;
    margin: 0;
  }
  .label-input.error {
    color: #ff1744;
  }
  .my-password {
    display: flex;
    flex-grow: 1;
    /* height: 20px; */
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 4px 8px;
    margin: 0;
  }
  .my-password.error {
    border: 2px solid #ff1744;
  }
`;
export const ShowPasswordButton = styled.button`
  position: absolute;
  top: 45%;
  right: 0;
  transform: translateY(-45%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  .icon-eye {
    width: 24px;
    height: 24px;
    fill: #616161;
  }
`;
export const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* width: 360px; */
  max-width: 400px;
  /* height: 80px; */
  padding: 0;

  .label-select {
    font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin: 0 0 8px 0;
  }
  .my-select {
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    font-size: 14px;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 4px 12px;
    margin: 0;
  }
  .my-select.error {
    border: 2px solid #ff1744;
  }
  .default {
  }
  .my-option {
    font-size: 14px;
    color: #616161;
    padding: 0;
    margin: 0;
  }
`;
export const TextareaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* width: 360px; */
  max-width: 400px;
  /* height: 100px; */
  margin: 0;
  .label-textarea {
    font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin: 0 0 8px 0;
  }
  .my-textarea {
    display: flex;
    /* width: 308px; */
    display: flex;
    flex-grow: 1;
    /* height: 100px; */
    font-size: 14px;
    font-weight: 500;
    color: #616161;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 8px;
    margin: 0;
  }
  .my-textarea.error {
    border: 2px solid #ff1744;
  }
`;
export const RatingWrap = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0;
  margin: 0;
  .label-rating {
    font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin: 4px 0;
  }
  .my-rating {
    width: 40px;
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: #616161;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 0;
    margin: 0;
  }
  .my-rating.error {
    border: 2px solid #ff1744;
  }
`;
export const CheckboxWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 360px;
  height: 28px;
  margin: 0;
  padding: 0;
  .my-checkbox {
    position: absolute;
    opacity: 0;
    left: 47px;
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 0;
  }
  .label-checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: #616161;
    margin: 0;
  }
  .label-checkbox::before {
    /* z-index: 1; */
    display: block;
    width: 18px;
    height: 18px;
    border: 2px solid #ff1744;
    border-radius: 4px;
    background: white;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    content: '';
    margin-right: 8px;
  }
  .my-checkbox:hover + .label-checkbox::before,
  .my-checkbox:focus + .label-checkbox::before {
    border: 2px solid #616161;
  }
  .my-checkbox:checked + .label-checkbox::before {
    display: block;
    opacity: 1;
    cursor: pointer;
    content: '';
    width: 20px;
    height: 20px;
    border: transparent;
    background-image: url(${myAgree});
    background-size: cover;
  }
`;
