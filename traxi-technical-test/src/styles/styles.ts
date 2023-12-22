import { DataGrid } from '@mui/x-data-grid'
import styled from 'styled-components'
import { Typography } from '@mui/material';

const Main = styled.div`
    background:#E7F3F3;
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
    left:calc(50% - 582px);
    @media (max-width: 1228px) {
        left:0; 
  }
    min-height: 200px;  
    width:1100px;
    max-width:calc(100vw - 64px); 
    margin:32px;  
`
const SearchVeicle = styled.div`   
    padding:8px;
    margin:8px 0 ;
    align-self: stretch;
    flex:1;    
    width:1100px; 
    max-width:calc(100vw - 64px);
    background:#effafa6f; 
    backdrop-filter:blur(18px) contrast(130%) saturate(140%);
    border-radius:4px;
    display:flex;
    flex-flow:wrap;
    align-items:center;
    justify-content:flex-start; 
    max-height:69px;
    box-shadow: 1px 1px 4px #6f6f6f3f;
`
const DataGridStyled = styled(DataGrid)`
    background:#effafa6f;
    backdrop-filter:blur(18px) contrast(130%) saturate(140%);
    max-width:100vw;
    border-color:#afbaba6f !important;
   & div{
       border-color:#afbaba6f !important;
   } 
    box-shadow: 1px 1px 4px #6f6f6f3f;

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
    max-width:1100px; 
    height:68px;
    padding:14px;
    font-size:1.6rem;
    background:#cfdada3f;
    backdrop-filter:blur(18px);
    text-align:center;
    border-radius:4px;  
`
export { Main, MainContainer, VeicleList, SearchVeicle, DataGridStyled, MapContainer, Text, WithoutData }