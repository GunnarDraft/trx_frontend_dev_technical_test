'use client'
import { Main, MainContainer } from '@/styles/styles'; 
import VeicleListComponent from '../components/Vehicles'; 
import MapComponent from '@/components/Map';
import { useState } from 'react';

export default function Home() {

  const [markerPosition, setMarkerPosition] = useState(0); 

  return (
    <Main> 
        <MainContainer>
        <MapComponent markerPosition={markerPosition} />
        <VeicleListComponent onRowClick={setMarkerPosition} />
        </MainContainer> 
    </Main>
  )
}
 