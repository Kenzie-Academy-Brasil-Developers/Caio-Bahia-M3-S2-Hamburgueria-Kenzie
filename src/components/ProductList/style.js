import styled from "styled-components"

export const UlProductListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  gap: 20px;
  margin-bottom: 20px;
  @media (min-width: 750px) {
    flex-direction: column;
  }
  @media (min-width: 950px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media (min-width: 1381px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`
