'use client'
import { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Main, MainContainer, VeicleList, SearchVeicle, DataGridStyled } from '@/styles/styles';
import carMock from '../../../assets/carMock.json'
import { Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TextField } from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

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
    width: 110,
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
    width: 70,
    editable: false,
  },

  {
    field: 'MODEL',
    headerName: 'Modelo',
    editable: false,
    width: 80,
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
    width: 80,
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
  const [map, setMap] = useState(null)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY || ""
  })
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredVehicles.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
 

  return (
    <Main>
      <MainContainer>
        {isLoaded ? <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
        </GoogleMap> : <></>}
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
          
        </VeicleList>
      </MainContainer>
    </Main>
  )
}
