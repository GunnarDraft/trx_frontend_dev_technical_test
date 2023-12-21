'use client'
import { MapContainer } from '@/styles/styles';
import { APIProvider, Map, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import type { Marker } from '@googlemaps/markerclusterer';
import { useEffect, useState } from 'react';
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
                    <Directions />
                </Map>
            </MapContainer>
        </APIProvider>
    )
}
function Directions() {
    const map = useMap();
    const routesLibrary = useMapsLibrary('routes');
    const [directionsService, setDirectionService] = useState<google.maps.DirectionsService>();
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();
    const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([])
    useEffect(() => {
        if (!routesLibrary || !map) return;
        setDirectionService(new routesLibrary.DirectionsService())
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))

    }, [routesLibrary, map])
    useEffect(() => {
        if (!directionsService || !directionsRenderer) return;
        directionsService.route({
            origin: "Manuel gonzalez 146 tlatelolco",
            destination: "zocalo cdmx",
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true
        }).then(response => {
            directionsRenderer.setDirections(response);
            setRoutes(response.routes);
        });
    }, [directionsService, directionsRenderer])
    return null
}