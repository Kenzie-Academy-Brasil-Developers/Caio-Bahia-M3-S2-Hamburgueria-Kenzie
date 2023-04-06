import styled from "styled-components"

export const LiCardProductListStyled = styled.li`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 300px;
  height: 346px;
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
