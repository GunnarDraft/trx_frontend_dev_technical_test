import { DataGrid } from '@mui/x-data-grid'
import styled from 'styled-components'
import { Typography } from '@mui/material';

const Main = styled.div`
    background:#666;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    height: 100vh; 
    width:100vw;
`
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
    height:100%;    
`
const VeicleList = styled.div` 
    position:absolute;
    display:flex;
    flex-flow:column;
    bottom:0; 
    left:calc(50% - 550px);
    min-height: 200px; 
    align-self: stretch;
    width:100%;
    max-width:1100px;
    flex:1;
    margin:32px;  
`
const SearchVeicle = styled.div`   

    padding:8px;
    margin:8px 0 ;
    align-self: stretch;
    flex:1;    
    width:100%; 
    max-width:1082px;
    min-width: min-content;
    background:#afcfcf3f;
    backdrop-filter:blur(18px);
    border-radius:4px;
    display:flex;
    flex-flow:wrap;
    align-items:center;
    justify-content:flex-start; 
    max-height:min-content;
`
const DataGridStyled = styled(DataGrid)`
    background:#cfdada3f;
    backdrop-filter:blur(18px);
    max-width:max-content;
    border-color:#afbaba6f !important;
   & div{
       border-color:#afbaba6f !important;
   } 
`
const MapContainer = styled.div`
    margin:16px;
    height:calc(100vh - 32px);
    width:calc(100vw - 32px); 
    position:absolute;
`
const Text = styled(Typography)`
    font-size: 2rem;
    margin-right:8px; 
    padding-right:8px;
`
const WithoutData = styled.div`
    width:100%; 
    max-width:1082px; 
    height:68px;
    padding:14px;
    font-size:1.6rem;
    background:#cfdada3f;
    backdrop-filter:blur(18px);
    text-align:center;
    border-radius:4px;  
`
export { Main, MainContainer, VeicleList, SearchVeicle, DataGridStyled, MapContainer, Text, WithoutData }