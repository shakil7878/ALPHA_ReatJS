import React from 'react'
import { DataGrid } from '@mui/x-data-grid';



const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
     
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a fullname of the user and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
       
    },
    {field:'email', headerName: 'Email', width:220},
    {field:'phone', headerName: 'Phone', width:220},
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
   
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90,
    // },
   
    
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'user@testmail.com', phone: '+91-0000000000' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'user@testmail.com', phone: '+91-0000000000' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'user@testmail.com', phone: '+91-0000000000' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'user@testmail.com', phone: '+91-0000000000' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'user@testmail.com', phone: '+91-0000000000' },
    { id: 6, lastName: 'Melisandre', firstName: 'Ravi', email: 'user@testmail.com', phone: '+91-0000000000' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'user@testmail.com', phone: '+91-0000000000' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'user@testmail.com', phone: '+91-0000000000' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'user@testmail.com', phone: '+91-0000000000' },
  ];
function GroupPopupTable() {
    return (
        <>

        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
     
        </>
    )
}

export default GroupPopupTable
