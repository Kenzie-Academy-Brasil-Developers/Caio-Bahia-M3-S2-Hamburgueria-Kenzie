import styled from "styled-components"

export const HeaderStyled = styled.header`
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    max-width: 1280px;
    padding: 14px 0px;

    gap: 14px;

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
      padding: 16px;
    }
  }

  img {
    width: 158.94px;
    height: 36.83px;
  }
`
