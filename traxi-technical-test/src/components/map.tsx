'use client'
import { MapContainer } from '@/styles/styles';
import { APIProvider, Map } from '@vis.gl/react-google-maps';  
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import type { Marker } from '@googlemaps/markerclusterer';
export default function MapComponent() {
    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_API_KEY as string}>
            <MapContainer>
                <Map
                    zoom={14}
                    center={{
                        lat: 19.432,
                        lng: -99.133
                    }}
                    mapId={'9be83f7a4c774553'}
                >
                    {/* <Marker/> */}
                </Map>
            </MapContainer>
        </APIProvider>
    )
}