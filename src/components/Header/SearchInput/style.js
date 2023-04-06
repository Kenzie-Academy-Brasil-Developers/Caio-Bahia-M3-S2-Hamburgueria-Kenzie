import styled from "styled-components"

export const FormSearchStyled = styled.form`
  display: flex;
  width: 87.5%;
  height: 60px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 0px 10px 0px 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  input {
    height: 100%;
    border: none;
    width: 70%;
    padding: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    ::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: #e0e0e0;
    }
  }
  @media (min-width: 600px) {
    width: 60%;
    max-width: 365px;
  }
`
export const ButtonSubmitStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  background: #27ae60;
  border: 2px solid #27ae60;
  width: 107px;
  height: 40px;
  padding: 0px 20px;
  border-radius: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
`
