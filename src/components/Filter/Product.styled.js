import styled from 'styled-components';
// *************** Filters ************************
export const FilterBar = styled.div`
  top: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 44px;
  background-color: #0d47a1;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 844px) {
    height: 60px;
  }
`;
export const BtnFilter = styled.div`
  display: block;
  width: 60px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: white;
  padding: 0;
  margin: 12px 0 8px 0;
  cursor: pointer;
  padding: 0;
  @media screen and (min-width: 844px) {
    display: none;
  }
`;
export const FilterMobileWrap = styled.div`
  position: absolute;
  top: 44px;
  left: 0;
  width: 100%;
  height: fit-content;
  background-color: #0d47a1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 8px;
  /* margin: 0; */
`;
export const FilterWrap = styled.div`
  @media screen and (min-width: 844px) {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: #0d47a1;
    width: 100%;
    height: 60px;
    gap: 4px;
    padding: 4px;
    margin: 0;
  }
`;
export const FilterForm = styled.form`
  display: inline-block;
  padding: 0;
  margin: 0;
`;
export const SelectForm = styled.select`
  display: flex;
  width: 84px;
  height: 40px;
  font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
  font-weight: 500;
  color: white;
  background-color: #0d47a1;
  border-color: #0d47a1;
  text-align: left;
  outline: #0d47a1;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
export const OptionForm = styled.option`
  font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
  font-weight: 400;
`;
export const RangeWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 0;
  margin: 0;
`;
export const LabelRange = styled.label`
  font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
  font-weight: 500;
  color: white;
  padding: 0;
  margin: 0;
`;
export const InputRange = styled.input`
  width: 120px;
  height: 40px;
  padding: 0;
  margin: 0;
`;
export const SpanRange = styled.span`
  text-align: left;
  font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
  font-weight: 500;
  color: white;
  padding: 0;
  margin: 0;
`;
export const BtnClear = styled.button`
  width: 60px;
  height: 40px;
  background-color: #0d47a1;
  outline: #5c6bc0;
  border-color: #0d47a1;
  border: none;
  font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
  font-weight: 700;
  color: white;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
// ********** Products ********************************

export const FriendsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: fit-content;
  background-color: #e8eaf6;
  padding: 20px 0;
  margin: 0;
`;
export const ItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  background-color: white;
  box-shadow: 0px 2px 4px 2px rgba(132, 147, 224, 0.9);
  border-radius: 5px;
  width: 200px;
  height: 270px;
  padding: 8px;
  margin: 0;
`;
export const ItemImg = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid white;
  box-shadow: 0px 1px 4px 1px rgba(132, 147, 224, 0.9);
`;
export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0;
`;
export const ItemName = styled.p`
  font-size: 16px;
  font-weight: 700;
  align-items: center;
  color: #3f51b5;
  padding: 0;
  margin: 0;
`;
export const ItemCountry = styled.p`
  font-size: 12px;
  font-weight: 700;
  align-items: center;
  color: #1a237e;
  padding: 0;
  margin: 0;
`;
export const ItemElement = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #1a237e;
  text-align: center;
  padding: 0;
  margin: 0;
`;
