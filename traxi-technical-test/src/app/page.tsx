'use client'
import { useState } from 'react'; 
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Main, MainContainer, VeicleList, SearchVeicle } from '@/styles/styles';
import carMock from '../../../assets/carMock.json'
const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};


// async function getData() {
//   const res = await fetch('')

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }


export default function Home() {
  // const data = await getData()
  const [map, setMap] = useState(null)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY || "AIzaSyCByFHPYqmrJIPJKDzyw2sEbYz4jZR2YVE"
  })
  
  return (
    <Main>
      <MainContainer>
        {isLoaded ? <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
        </GoogleMap> : <></>}
        <SearchVeicle>
          componente de busqueda
        </SearchVeicle>
        <VeicleList> 
          lista de veiculos

          {carMock.map((car) => <div id={car.placa}>{car.placa}</div>)}
        </VeicleList>
      </MainContainer>
    </Main>
  )
}
