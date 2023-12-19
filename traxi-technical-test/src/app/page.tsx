'use client'
import { useCallback, useState } from 'react';
import styles from './page.module.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styled from 'styled-components'
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

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
   
      </MainContainer>
    </Main>
  )
}
