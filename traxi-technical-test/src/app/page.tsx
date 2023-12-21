'use client'
import { Main, MainContainer} from '@/styles/styles';
import MapComponent from '../components/map'
import VeicleListComponent  from '../components/Veicles';

async function getData() {
  const res = await fetch('https://nxflga6y8i.execute-api.us-east-1.amazonaws.com/route/dummy')

  if (!res.ok) { 
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default function Home() {
  // const data = await getData()
  // console.log(data[0].geojson.features[0].geometry.coordinates)
  return (
    <Main>
      <MainContainer>
        <MapComponent/> 
        <VeicleListComponent/>
      </MainContainer>
    </Main>
  )
}
