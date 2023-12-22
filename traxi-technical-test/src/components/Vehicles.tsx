'use client'
import { VeicleList, SearchVeicle, DataGridStyled, WithoutData } from '@/styles/styles';
import { TextField } from '@mui/material';
import { useVehicles } from '@/hooks/useVehicles'
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

type VeicleListComponentProps = {
    onRowClick: (rowId: number) => void;
};
export default function VeicleListComponent({ onRowClick }: VeicleListComponentProps) {

    const { filter, handleFilterChange, filteredVehicles } = useVehicles();

    return (<>

        <VeicleList>
            <SearchVeicle>
                <TextField
                    fullWidth
                    id="Buscar"
                    label="Busqueda avanzada"
                    variant="outlined"
                    value={filter}
                    onChange={handleFilterChange} />
            </SearchVeicle>
            {filteredVehicles.length > 0 ?
                <DataGridStyled
                    density='compact'
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
                    onRowClick={(row) => onRowClick(row.id as number)}
                    disableRowSelectionOnClick
                />
                : <WithoutData>Sin Resultados</WithoutData>}
        </VeicleList>
    </>
    )
}
