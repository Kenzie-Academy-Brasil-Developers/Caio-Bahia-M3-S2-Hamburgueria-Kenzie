import styled from "styled-components"

export const DivCartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: var(--gray-0);
  border-radius: 5px;

  /* @media (min-width: 425px) {
    max-width: 450px;
    flex-shrink: 0;
  }

  @media (min-width: 768px) {
    max-width: 450px;
    min-height: 250px;
  }
  @media (min-width: 950px) {
    justify-content: center;
  } */
`
export const DivCartTitleContainer = styled.div`
  background: #27ae60;
  border-radius: 5px 5px 0px 0px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
`

export const DivCartDisplay = styled.div`
  padding: 20px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }
`
