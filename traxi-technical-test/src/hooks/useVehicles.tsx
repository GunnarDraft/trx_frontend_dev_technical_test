'use client'
import carMock from '../../../assets/carMock.json'
import { useEffect, useState } from 'react';

interface IVehicle {
    placa: string;
    "numero economico": string;
    vim: string;
    asientos: number;
    seguro: string;
    "segure numebr": string;
    BRAND: string;
    MODEL: string;
    YEAR: number;
    COLOR: string;
}

type CoordinatesMarker = {
    key: string;
    id: number;
    lat: number;
    lng: number;
};

export const useVehicles = () => {

    const vehicleWithIDs = carMock.map((objeto, indice) => ({
        id: indice + 1,
        ...objeto,
    }));

    const [vehicleList] = useState<IVehicle[]>(vehicleWithIDs)
    const [filter, setFilter] = useState('')
    const [vehicleSelected, setVehicleSelected] = useState<number>(0)

    const [positionCoordinate, setPositionCoordinate] = useState<CoordinatesMarker[]>()
    const [position, setPosition] = useState<CoordinatesMarker>({ id: 2, lat: -99.09187, lng: 19.63213, key: '{"id":2,"lat":-99.09187,"lng":19.63213}' })

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setFilter(event.target.value);
    };

    useEffect(() => {
        if (vehicleSelected && positionCoordinate) {
            setPosition(positionCoordinate[vehicleSelected])
            console.log('vehicleCoordinates', positionCoordinate[vehicleSelected])
        }
        console.log('vehicleSelected',vehicleSelected)
    }, [vehicleSelected])

    // const handlePositionCoordinate = () => {

    //     setPositionCoordinate(vehicleCoordinates)

    // }

    const filteredVehicles = vehicleList.filter((vehicle) => {
        return (
            vehicle.placa.toLowerCase().includes(filter.toLowerCase()) ||
            vehicle['numero economico'].toLowerCase().includes(filter.toLowerCase()) ||
            vehicle.asientos.toString().includes(filter.toLowerCase()) ||
            vehicle.seguro.toLowerCase().includes(filter.toLowerCase()) ||
            vehicle['segure numebr'].toLowerCase().includes(filter.toLowerCase()) ||
            vehicle.BRAND.toLowerCase().includes(filter.toLowerCase()) ||
            vehicle.MODEL.toLowerCase().includes(filter.toLowerCase()) ||
            vehicle.YEAR.toString().includes(filter.toLowerCase()) ||
            vehicle.COLOR.toLowerCase().includes(filter.toLowerCase())
        )
    });

    return { filter, handleFilterChange, filteredVehicles, setVehicleSelected, vehicleSelected, setPositionCoordinate, position }
}