'use client'
import { Main, MainContainer } from '@/styles/styles';
import MapComponent from '@/components/Map'
import VeicleListComponent from '../components/Vehicles';
import { useEffect, useState } from 'react';
import { useVehicles } from '@/hooks/useVehicles';

interface Station {
  id: string;
  order: number;
  type: string;
}

interface FeatureProperties {
  name: string | null;
  address: string | null;
  type: string;
}

interface FeatureGeometry {
  type: string;
  coordinates: Coordinates[];
}

interface Feature {
  type: string;
  geometry: FeatureGeometry;
  properties: FeatureProperties;
}

interface GeoJSON {
  type: string;
  features: Feature[];
}

interface Route {
  client_id: string;
  status: string;
  route_title: string;
  code: string;
  distance: number;
  is_active: boolean;
  stations: Station[];
  error: null | string;
  time_zone: string;
  created_at: string;
  updated_at: string;
  geojson: GeoJSON;
  route_id: string;
}

// El tipo para el array de rutas
type RouteArray = Route[];
async function getData(): Promise<RouteArray> {
  const res = await fetch('https://nxflga6y8i.execute-api.us-east-1.amazonaws.com/route/dummy')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
type Coordinates = [number, number];
type CoordinatesMarker = {
  key: string;
  id: number;
  lat: number;
  lng: number;
};

export default async function Home() {

  const data = await getData()
  const coordinates = data[0].geojson.features[6].geometry.coordinates;
  const vehicleCoordinates: number[][] = coordinates.map(([lat, lon], index) => { return [index + 1, lon, lat] })
  const formatted: CoordinatesMarker[] = vehicleCoordinates.map(([id, lng, lat]) => ({
    id,
    lat,
    lng,
    key: JSON.stringify({ id, lat, lng }),
  }));
  console.log(formatted)

  return (
    <Main>
      <MainContainer>
        <MapComponent  />
        <VeicleListComponent {...formatted} />
      </MainContainer>
    </Main>
  )
}
