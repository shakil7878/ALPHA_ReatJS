import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';

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

  const textRow = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent:'space-between',
  }

  // child modal start here
  function GroupChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
          <Fab onClick={handleOpen} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
        {/* <Button onClick={handleOpen}>Open Child Modal</Button> */}
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            
         
        <DialogTitle>New User</DialogTitle>
        <Divider />
     
        
          <Box sx={textRow}>
          <TextField
            
            margin="dense"
            
            id="name"
            label="First Name"
            type="email"
            fullWidth
            variant="standard"
          />

          </Box>

<Box sx={textRow}>
  
<TextField
            
            margin="dense"
            id="name"
            
            label="Last Name"
            type="email"
            fullWidth
            variant="standard"
          />
</Box>


<Box sx={textRow}>
  
<TextField
            
            margin="dense"
            id="name"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
          />
</Box>


{/*       
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add User</Button>
        </DialogActions> */}
      

            <Button onClick={handleClose}>Close Child Modal</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
  // child modal end here

export default GroupChildModal
