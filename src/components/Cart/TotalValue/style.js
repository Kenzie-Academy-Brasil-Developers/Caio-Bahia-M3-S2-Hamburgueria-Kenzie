import styled from "styled-components"
export const DivTotalMoney = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-top: 20px;
  border-top: 2px #e0e0e0 solid;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    height: 60px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #828282;

    :hover {
      background-color: green;
    }
  }
`
export const DivTotalMoneyTexts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  small {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
  }

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #828282;
  }
`
