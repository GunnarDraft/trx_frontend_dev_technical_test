import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-flow:column;
    flex:1;
    align-content: stretch;
    justify-items:stretch;
    align-items: center;
    font-size: 0.85rem;
    max-width: var(--max-width);
    width: 100%;
    z-index: 2;
    font-family: var(--font-mono);
    border: 1px solid red;
    height:100%;
`
const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 6rem;
    min-height: 100vh;
    border: 1px solid blue;
`
const VeicleList = styled.div`
    min-height: 200px;
    border: 1px solid cyan;
    align-self: stretch;
    flex:1;
`
export { Main, MainContainer, VeicleList }