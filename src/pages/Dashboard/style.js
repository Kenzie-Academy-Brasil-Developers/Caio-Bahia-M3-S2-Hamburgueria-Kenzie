import styled from "styled-components"

export const DivHtmldad = styled.div`
  width: 100vw;
  height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    margin: 16px;
    max-width: 1248px;
    @media (min-width: 750px) {
      flex-direction: row;
    }
    aside {
      width: 100%;
      display: flex;
      justify-content: center;
      @media (min-width: 750px) {
        justify-content: flex-end;
      }
    }
  }
`
export const DivMainContainerAux = styled.div``
