'use client'
import { useCallback, useState } from 'react'; 
import { Main, MainContainer, VeicleList, SearchVeicle, DataGridStyled, MapContainer } from '@/styles/styles';
import carMock from '../../../assets/carMock.json'
import { TextField } from '@mui/material';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'placa', headerName: 'Placa', width: 90 },
  {
    field: 'numero economico',
    headerName: 'Número Económico',
    width: 120,
    editable: false,
  },
  {
    field: 'vim',
    headerName: 'VIM',
    width: 150,
    editable: false,
  },
  {
    field: 'asientos',
    headerName: 'Asientos',
    width: 70,
    editable: false,
  },
  {
    field: 'seguro',
    headerName: 'Seguro',
    editable: false,
    width: 180,
  },

  {
    field: 'segure numebr',
    headerName: 'Número de seguro',
    editable: false,
    width: 120,
  },
  {
    field: 'BRAND',
    headerName: 'Marca',
    width: 90,
    editable: false,
  },

  {
    field: 'MODEL',
    headerName: 'Modelo',
    editable: false,
    width: 110,
  },
  {
    field: 'YEAR',
    headerName: 'Año',
    type: 'number',
    width: 60,
    editable: false,
  },
  {
    field: 'COLOR',
    headerName: 'Color',
    type: 'number',
    width: 90,
    editable: false,
  },
];

const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

interface IVehiculo {
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

export default function Home() { 

  const vehiculoConIDs = carMock.map((objeto, indice) => ({
    id: indice + 1,
    ...objeto,
  }));
  const [vehicleList] = useState<IVehiculo[]>(vehiculoConIDs)
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

  return (
    <Main>
      <MainContainer>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_API_KEY as string}>
          <MapContainer>
            <Map
              zoom={3}
              center={{ lat: 22.54992, lng: 0 }}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              mapId={'9be83f7a4c774553'}
            />
          </MapContainer>
        </APIProvider>
        <VeicleList>

          <SearchVeicle>
            Lista de veiculos &nbsp;

            <TextField
              id="Buscar"
              label="Buscar"
              variant="outlined"
              value={filter}
              onChange={handleFilterChange} />
          </SearchVeicle>
          {filteredVehicles.length > 0 ?
            <DataGridStyled
              rows={filteredVehicles}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
            />
            : <div>Sin Resultados</div>}

        </VeicleList>
      </MainContainer>
    </Main>
  )
}
