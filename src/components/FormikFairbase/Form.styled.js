import styled from 'styled-components';
import myAgree from '../../img/3check.png';

export const FormikPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  margin: 0 auto;
  padding: 0;
`;
export const WrapNavSign = styled.nav`
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #757575;
  gap: 8px;
  width: 100%;
  height: 60px;
  margin: 0;
  padding: 0;
  .navigate {
    font-family: 'Prompt', sans-serif;
    font-size: clamp(1rem, 0.724rem + 1.38vw, 1.5rem);
    font-weight: 700;
    margin: 0;
    color: #212121;
    text-decoration: none;
    transition: all 0.3s;
    cursor: pointer;
    &.active {
      color: white;
    }
  }
  @media screen and (min-width: 768px) {
    min-height: 80px;
    gap: 40px;
  }
`;
// *******  All form **************
export const WrapFormUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0;
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 20px;
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
  padding: 0 0 8px 0;
  .title-auth {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 8px;
  }
`;
export const InputBox = styled.div`
  position: relative;
  padding: 0;
  margin: 8px auto 8px auto;
  .input {
    width: 300px;
    height: 24px;
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 8px;
    margin: 0;
    &:focus + label,
    &:not(:placeholder-shown) + label {
      transform: translateY(-28px);
      font-size: 16px;
      text-align: center;
      color: #616161;
      outline: #616161;
    }
  }
  .label {
    position: absolute;
    top: 32%;
    left: 28px;
    /* transform: translateY(-50%); */
    transform: translateY(-32%);
    font-size: 16px;
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
  height: 104px;
  padding: 0 0 8px 0;
  margin: 0;
  .title-select {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin: 8px 0 8px 0;
  }
  .form-select {
    width: 316px;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    color: #616161;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 8px;
    margin: 0;
  }
  .option {
    font-size: 16px;
    color: #616161;
    border-radius: 8px;
    outline: #616161;
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
  height: 192px;
  margin: 0;
  .title-area {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin: 8px 0 8px 0;
  }
  .textarea {
    width: 308px;
    height: 100px;
    font-size: 16px;
    font-weight: 500;
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  border: 2px solid #eeeeee;
  width: 200px;
  height: 88px;
  padding: 0;
  margin: 0;
  .title-rating {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin: 8px 0 8px 0;
  }
  .rating {
    width: 60px;
    height: 28px;
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
  width: 360px;
  height: 48px;
  margin: 0;
  padding: 0;
  .title-checkbox {
    display: flex;
    justify-content: ctnter;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
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
  height: 48px;
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
  font-size: 16px;
  color: #ff1744;
  padding: 0;
  margin: 0;
`;
// ***************    MyForm  *****************
export const MyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  border: 2px solid #eeeeee;
  margin: 40px auto;
  .my-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }
  .my-title {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin: 8px 0 8px 0;
  }
  .button {
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
    width: 300px;
    height: 48px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    &:hover,
    :focus {
      background-color: #757575;
    }
  }
`;
export const ErrorMessage = styled.div`
  color: #ff1744;
  font-size: 16px;
`;
export const InputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 8px auto 8px auto;
  .my-input {
    width: 300px;
    height: 24px;
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 8px;
    margin: 0;
  }
  .my-input.error {
    border: 2px solid #ff1744;
  }
  .label-input {
    position: absolute;
    top: -24%;
    left: 28px;
    font-size: 16px;
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
    width: 300px;
    height: 24px;
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 8px;
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
  width: 360px;
  height: 80px;
  padding: 0 0 8px 0;
  margin: 0;
  .label-select {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin: 8px 0 8px 0;
  }
  .my-select {
    width: 316px;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    color: #616161;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 8px;
    margin: 0;
  }
  .my-select.error {
    border: 2px solid #ff1744;
  }
  .my-option {
    font-size: 16px;
    color: #616161;
    border-radius: 8px;
    outline: #616161;
  }
`;
export const TextareaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 360px;
  height: 160px;
  margin: 0;
  .label-textarea {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin: 8px 0 8px 0;
  }
  .my-textarea {
    width: 308px;
    height: 100px;
    font-size: 16px;
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  height: 88px;
  padding: 0;
  margin: 0;
  .label-rating {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin: 8px 0 8px 0;
  }
  .my-rating {
    width: 60px;
    height: 28px;
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
  .my-rating.error {
    border: 2px solid #ff1744;
  }
`;
export const CheckboxWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 48px;
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
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #616161;
    margin: 0 8px 0 8px;
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
