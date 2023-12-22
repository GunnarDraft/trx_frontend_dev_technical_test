'use client'
import { MapContainer } from '@/styles/styles';
import { APIProvider, AdvancedMarker, InfoWindow, Map, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import formatted from "../../../assets/data";
import { useVehicles } from '@/hooks/useVehicles'

type MapComponentProps = {
    markerPosition: number;
};
  
export default function MapComponent({ markerPosition }: MapComponentProps) { 
    
    const [vehicle, setVehicle] = useState(formatted[1]);
    const [open, setOpen] = useState(false)
    const { vehicleWithIDs } = useVehicles();

    useEffect(() => {
        setVehicle(formatted[markerPosition])
    }, [markerPosition])

    const Directions = () => {
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

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_API_KEY as string}>
            <MapContainer>
                <Map
                    zoom={14}
                    maxZoom={17}
                    minZoom={10}
                    center={vehicle}
                    mapId={'9be83f7a4c774553'}
                >
                    <Directions /> 
                    <AdvancedMarker
                        position={vehicle}
                        key={vehicle.key}
                        onClick={() => setOpen(true)}
                    >
                        <span style={{ fontSize: "3rem" }}>🚗</span>
                    </AdvancedMarker>
                    {
                        open && <InfoWindow position={vehicle} onCloseClick={() => setOpen(false)}>
                            Placa: {vehicleWithIDs[markerPosition]?.placa}   <br />
                            Color: {vehicleWithIDs[markerPosition]?.COLOR}   <br />
                            Modelo: {vehicleWithIDs[markerPosition]?.MODEL}
                        </InfoWindow>
                    }
                </Map>
            </MapContainer>
        </APIProvider>
    )
} 