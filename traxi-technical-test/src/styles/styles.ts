import { DataGrid } from '@mui/x-data-grid'
import styled from 'styled-components'
import { Typography } from '@mui/material';
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
     padding:8px;
     margin:8px 0 ;
    align-self: stretch;
    flex:1; 
    background: #bbb;
    border-radius:4px;
    display:flex;
    flex-flow:wrap;
    align-items:center;
    justify-content:flex-start;
     
`
const DataGridStyled = styled(DataGrid)`
    background:#ccc;
`
const MapContainer = styled.div`
height:1084px;
width:1084px;
`

const Text = styled(Typography)`
font-size: 2rem ;
margin-right:8px; 
padding-right:8px;
`
export { Main, MainContainer, VeicleList, SearchVeicle, DataGridStyled, MapContainer, Text }