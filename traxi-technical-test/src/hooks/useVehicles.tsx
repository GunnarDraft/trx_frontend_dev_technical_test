import carMock from '../../../assets/carMock.json'
import { useState } from 'react';

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

export const useVehicles = () => {
    const vehicleWithIDs = carMock.map((objeto, indice) => ({
        id: indice + 1,
        ...objeto,
    }));
    const [vehicleList] = useState<IVehicle[]>(vehicleWithIDs)
    const [filter, setFilter] = useState('')

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setFilter(event.target.value);
    };

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

    return { filter, handleFilterChange, filteredVehicles }
}