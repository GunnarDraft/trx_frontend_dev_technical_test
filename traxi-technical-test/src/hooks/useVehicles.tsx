
import carMock from '../../../assets/carMock.json'
import { useState } from 'react';

export const useVehicles = () => {

    const [filter, setFilter] = useState('')

    const vehicleWithIDs = carMock.map((objeto, indice) => ({
        id: indice + 1,
        ...objeto,
    }));

    const filteredVehicles = vehicleWithIDs.filter((vehicle) => {
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

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setFilter(event.target.value);
    };

    return { filter, handleFilterChange, filteredVehicles }
}