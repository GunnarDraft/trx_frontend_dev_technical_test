'use client'
import { MapContainer } from '@/styles/styles';
import { APIProvider, AdvancedMarker, Map, useMap, useMapsLibrary } from '@vis.gl/react-google-maps'; 
import { useEffect, useState } from 'react';
import { useVehicles } from '@/hooks/useVehicles' 


export default function MapComponent() {
    const { position } = useVehicles();

    useEffect(() => {
        console.log(position)
    }, [position])
    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_API_KEY as string}>
            <MapContainer>
                <Map
                    zoom={14}
                    center={{
                        lat: 19.63247,
                        lng: -99.09175
                    }}
                    mapId={'9be83f7a4c774553'}
                >
                    <Directions />
                    {position ?
                        <AdvancedMarker position={position} key={position?.key}  >
                            <span style={{ fontSize: '5rem' }} >🚗</span>
                        </AdvancedMarker>
                        : <></>}
                </Map>
            </MapContainer>
        </APIProvider>
    )
}

// type Point = google.maps.LatLngLiteral & { key: string }
// type Props = { points: Point[] }

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


