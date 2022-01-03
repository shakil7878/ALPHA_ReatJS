import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CommonButton from '../../components/common/CommonButton/CommonButton'
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import GroupPopupTable from './GroupPopupTable';
import Fab from '@mui/material/Fab';
import MinimizeIcon from '@mui/icons-material/Minimize';
import GroupChildModal from '../Dashboard/GroupChildModal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
     
    {field:'group_name', headerName: 'Group Name', width:220},
    {field:'category', headerName: 'Category', width:220},
    { field: 'phone', headerName: 'Number', width: 130 },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90,
    // },
   
    
  ];

  const tableRow = {
    width: '100%',
    display: 'flex',
    marginBottom: '10px',
    justifyContent: 'space-between'
  }

  const searchText = {
    width: '100%',
    display: 'flex', 
    alignItems: 'flex-end', 
    '&: input[type="text"]':{
        width: '100%',
        backgroundColor:'red'
    }
  }
  
  const modalbtn = {
    marginRight: '5px',
    backgroundColor: '#106cc8',
    color: '#fff',
    borderRadius:'100%',
    minWidth:'50px',
    height:'50px',
    '&:hover':{
        backgroundColor: '#125ca6!important',
    }
  }


  const textRow = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent:'space-between',
    '& h2':{
paddingLeft:'0',
    },
  }
  
  
  const textRow_inner = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent:'right',
    '& button':{
      marginLeft:'10px',
      height: '22px',
      width: '34px',
      borderRadius: '100%!important',
      position: 'relative',
          },
            
  }

  const  button_second = {
    backgroundColor:'red!important',
    '& svg':{
      position:'relative',
      top:'-8px'
          },
        }

  const mrT = {
    marginTop: '10px',
  }
  
  const rows = [
    { id: 1, group_name: 'Lending', category: 'Department',phone: '+91-0000000000' },
    { id: 2, group_name: 'Retail', category: 'Department',phone: '+91-0000000000' },
    { id: 3, group_name: 'Digital', category: 'Department',phone: '+91-0000000000' },
    
  ];


  const currencies = [
    {
      value: 'AUTOMATION',
      label: 'Automation',
    },
    {
      value: 'HR',
      label: 'HR',
    },
    {
      value: 'FINANCE',
      label: 'Finance',
    },
    {
      value: 'DEVELOPMENT',
      label: 'Development',
    },
  ];





const Groups = () => {
  

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

    return (

        
        
        <Grid item xs={12}>
        <div style={{ height: 400, width: '100%', marginLeft: '0px', marginTop: '0px'}}>
      {/* <DashboardMain /> */}
      <Box sx={tableRow}>
       
        <Box sx={searchText} >
        <PersonSearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Search here.." variant="standard" />
      </Box>

  

       <div>
    
      <Button sx={modalbtn} onClick={handleClickOpen}><AddIcon /></Button>

      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>New User</DialogTitle>
        <Divider />
        <DialogContent>
         
          <Box sx={textRow}>
          <TextField
            margin="dense"
            id="name"
            label="Group Name"
            type="text"
            fullWidth
            variant="standard"
          />

          </Box>

<Box sx={textRow}>
  
<TextField
            
            margin="dense"
            id="name"
            
            label="Sort Code"
            type="text"
            fullWidth
            variant="standard"
          />
</Box>


<Box sx={textRow}>
  
<TextField
            
            margin="dense"
            id="name"
            label="Voice Number"
            type="text"
            fullWidth
            variant="standard"
          />
</Box>

<Box sx={textRow}>
  
<TextField
            
            margin="dense"
            id="name"
            label="SMS Number"
            type="text"
            fullWidth
            variant="standard"
          />
</Box>

<Box sx={textRow, mrT}>
<FormControl component="fieldset">
      <FormLabel component="legend">Group Category</FormLabel>
      <RadioGroup
        aria-label="category"
        defaultValue="individual"
        name="radio-buttons-group"
      >
        <FormControlLabel value="department" control={<Radio />} label="Department" />
        <FormControlLabel value="individual" control={<Radio />} label="Individual" />

      </RadioGroup>
    </FormControl>
</Box>

<Divider />
<Box sx={textRow}>
<DialogTitle>List of Employees</DialogTitle>

<Box sx={textRow_inner}>
{/* <Fab color="primary" aria-label="add">
        <AddIcon />
        
      </Fab> */}

      <GroupChildModal />
      {/* <CommonButton onClick={handleOpen}>Open Child Modal</CommonButton> */}
      <Fab sx={button_second} color="secondary" aria-label="add">
        <MinimizeIcon />
      </Fab>
      </Box>
</Box>


<Box sx={textRow}>
<GroupPopupTable />
</Box>
        </DialogContent>
        <Divider />
        <DialogActions>
       
        <Button onClick={handleClose}>Add Group</Button>
          <Button onClick={handleClose}>Cancel</Button>
         
        </DialogActions>
      </Dialog>


    </div>
      </Box>



      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />

      
    </div>
        </Grid>
    )
}

export default Groups
