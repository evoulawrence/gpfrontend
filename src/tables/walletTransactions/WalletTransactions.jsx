import "./walletTransactions.css";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 20 },
  {
    field: 'description',
    headerName: 'Desc',
    width: 150,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, description: 'Gas', date: '05/03/2022', amount: 35 },
  { id: 2, description: 'Burger', date: '04/03/2022', amount: 42 },
  { id: 3, description: 'Pizza', date: '03/03/2022', amount: 45 },
  { id: 4, description: 'Gas', date: '01/03/2022', amount: 16 },
  { id: 5, description: 'Banku', date: '25/02/2022', amount: 200 },
  { id: 6, description: 'Tilapia', date: '20/02/2022', amount: 150 },
  { id: 7, description: 'Gas', date: '11/02/2022', amount: 44 },
  { id: 8, description: 'Food', date: '09/02/2022', amount: 36 },
  { id: 9, description: 'Gas', date: '05/01/2022', amount: 65 },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}