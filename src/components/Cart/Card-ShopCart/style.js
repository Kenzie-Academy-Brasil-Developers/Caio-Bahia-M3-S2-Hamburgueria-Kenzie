import styled from "styled-components"
export const LiCartCard = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  max-width: 343px;
`
export const DivCartleftSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`
export const DivCartRightSideStyled = styled.div`
  p {
    padding-top: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #bdbdbd;
    :hover {
      color: red;
    }
  }
`
export const DivImgCartContainer = styled.div`
  width: 90px;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gray-20);
  border-radius: 5px;
  img {
    height: 80px;
  }
`
export const DivTxtCartContainer = styled.div`
  /* width: 170px; */
  h3 {
    /* background-color: red; */
    /* width: 105px; */
    padding: 5px 0px;
    font-weight: 700;
    font-size: 18px;
    line-height: px;
    color: #333333;
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
  }
  small {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #828282;
  }
`
