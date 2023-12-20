import { DataGrid } from '@mui/x-data-grid'
import styled from 'styled-components'

const Main = styled.main`
    background:#666;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 6rem;
    min-height: 100vh; 
`
const MainContainer = styled.div`
    background:#333;
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
    height:100%; 
    padding:4px;
`

const VeicleList = styled.div`
    margin:4px;
    min-height: 200px; 
    align-self: stretch;
    flex:1;
`
const SearchVeicle = styled.div`  
    margin:4px;
    align-self: stretch;
    flex:1; 
`
const DataGridStyled = styled(DataGrid)`
    background:#ccc;
`
const MapContainer = styled.div`
height:600px;
width:600px;
`
export { Main, MainContainer, VeicleList, SearchVeicle, DataGridStyled, MapContainer }