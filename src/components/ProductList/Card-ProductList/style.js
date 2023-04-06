import styled from "styled-components"

export const LiCardProductListStyled = styled.li`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 300px;
  height: 353px;
  border: 2px solid var(--gray-20);
  border-radius: 5px;
  flex-shrink: 0;

  img {
    width: 177px;
    height: 177px;
  }

  button {
    cursor: pointer;
    height: 40px;
    width: 107px;
    border-radius: 8px;
    padding: 0px 20px 0px 20px;
    color: var(--white);
    background: var(--color-primary);
    border: none;

    :active {
      background-color: var(--color-primary-50);
    }
  }
`
export const DivImgContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-0);
  height: 45%;
  width: 100%;
`
export const DivTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  padding-bottom: 15px;
  gap: 14px;
  background-color: #ffffff;

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--gray-100);
  }
  small {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--gray-50);
  }
  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-primary);
  }
`
