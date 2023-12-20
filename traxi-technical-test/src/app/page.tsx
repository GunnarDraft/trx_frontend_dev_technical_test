'use client'
import { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Main, MainContainer, VeicleList, SearchVeicle } from '@/styles/styles';
import carMock from '../../../assets/carMock.json'
import { Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
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
  const [vehicleList] = useState<IVehiculo[]>(carMock)
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
        <SearchVeicle> 
          <input
            type="text"
            placeholder="Buscar"
            value={filter}
            onChange={handleFilterChange}
          />
        </SearchVeicle>
        <VeicleList>
          lista de veiculos 
          {filteredVehicles.length > 0 ?
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Placa</TableCell>
                    <TableCell align="right">Número Económico</TableCell>
                    <TableCell align="right">VIM</TableCell>
                    <TableCell align="right">Asientos</TableCell>
                    <TableCell align="right">Seguro</TableCell>
                    <TableCell align="right">Número de seguro</TableCell>
                    <TableCell align="right">Marca</TableCell>
                    <TableCell align="right">Modelo</TableCell>
                    <TableCell align="right">Año</TableCell>
                    <TableCell align="right">Color</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? filteredVehicles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : filteredVehicles
                  ).map((row) => (
                    <TableRow key={row.placa}>
                      <TableCell component="th" scope="row">
                        {row.placa}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row['numero economico']}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.vim}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.asientos}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.seguro}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row["segure numebr"]}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.BRAND}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.MODEL}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.YEAR}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.COLOR}
                      </TableCell>
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={10} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                      colSpan={10}
                      count={filteredVehicles.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: {
                          'aria-label': 'rows per page',
                        },
                        native: true,
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
            : <div>Sin Resultados</div>}
        </VeicleList>
      </MainContainer>
    </Main>
  )
}
