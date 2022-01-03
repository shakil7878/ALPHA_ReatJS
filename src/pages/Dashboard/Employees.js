import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const columns = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "employee_name",
    headerName: "Full name",
    description: "This column has a fullname of the user and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
  { field: "email", headerName: "Email", width: 220 },
  { field: "phone", headerName: "Phone", width: 220 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },

  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
];

const tableRow = {
  width: "100%",
  display: "flex",
  marginBottom: "10px",
  justifyContent: "space-between",
};

const searchText = {
  width: "100%",
  display: "flex",
  alignItems: "flex-end",
  '&: input[type="text"]': {
    width: "100%",
    backgroundColor: "red",
  },
};

const modalbtn = {
  marginRight: "5px",
  backgroundColor: "#106cc8",
  color: "#fff",
  borderRadius: "100%",
  minWidth: "50px",
  height: "50px",
  "&:hover": {
    backgroundColor: "#125ca6!important",
  },
};

const modalbtn02 = {
  marginRight: "5px",
  backgroundColor: "#106cc8",
  color: "#fff",
  width: "140px",
  height: "40px",
  marginLeft: "10px",
  "&:hover": {
    backgroundColor: "#125ca6!important",
  },
};

const textRow = {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
};

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    email: "user213@testmail.com",
    phone: "+91-0000000000",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    email: "us324er@testmail.com",
    phone: "+91-0000000000",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    email: "user8tr@testmail.com",
    phone: "+91-0000000000",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    email: "user4tr@testmail.com",
    phone: "+91-0000000000",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    email: "user2tr@testmail.com",
    phone: "+91-0000000000",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Ravi",
    email: "usgfder@testmail.com",
    phone: "+91-0000000000",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    email: "usefr@testmail.com",
    phone: "+91-0000000000",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    email: "usekr@testmail.com",
    phone: "+91-0000000000",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    email: "uselr@testmail.com",
    phone: "+91-0000000000",
  },
];

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CommonButton onClick={handleOpen}>Open Child Modal</CommonButton>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const currencies = [
  {
    value: "AUTOMATION",
    label: "Automation",
  },
  {
    value: "HR",
    label: "HR",
  },
  {
    value: "FINANCE",
    label: "Finance",
  },
  {
    value: "DEVELOPMENT",
    label: "Development",
  },
];

const Employees = () => {
  // const [userData, setUserData] = useState();
  const [lookup, setLookup] = useState(false);
  const [nameField, setNameField] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [currency, setCurrency] = React.useState("EUR");

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const getSingleUserData = (userEmail) => {
    rows.map((item) => {
      if (item.email === userEmail) {
        setUserData({
          ...userData,
          email: item.email,
          firstName: item.firstName,
          lastName: item.lastName,
          mobile: item.phone,
        });
      }
    });
  };
  // useEffect(() => {
  //   axios
  //     .get("http://dummy.restapiexample.com/api/v1/employees")
  //     .then((response) => {
  //       console.log(response.data);
  //       setUserData(response.data.data);
  //     });
  // }, []);
  // console.log(userData, "asdsd");

  return (
    <Grid item xs={12}>
      <div
        style={{
          height: 400,
          width: "100%",
          marginLeft: "0px",
          marginTop: "0px",
        }}
      >
        {/* <DashboardMain /> */}
        <Box sx={tableRow}>
          <Box sx={searchText}>
            <PersonSearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Search here.."
              variant="standard"
            />
          </Box>

          <div>
            <Button
              sx={modalbtn}
              onClick={() => {
                handleClickOpen();
                setLookup(false);
                setUserData({
                  ...userData,
                  email: "",
                  firstName: "",
                  lastName: "",
                  mobile: "",
                });
                setNameField(false);
              }}
            >
              <AddIcon />
            </Button>

            <Dialog fullWidth open={open} onClose={handleClose}>
              <DialogTitle>New User</DialogTitle>
              <Divider />
              <DialogContent>
                {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
                <Box sx={textRow}>
                  {/* <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    disabled={lookup}
                    value={userData.email}
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    helperText=" Search the employees by typing e-mail address above."
                  /> */}
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    size="small"
                    disableClearable
                    fullWidth
                    style={{ height: 55 }}
                    value={userData.email}
                    disabled={lookup}
                    options={rows.map((option) => option.email)}
                    onChange={(event, newValue) => {
                      console.log(newValue);
                      setNameField(true);
                      getSingleUserData(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Search email"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                  />

                  <Button disabled={lookup} sx={modalbtn02}>
                    Look-Up
                  </Button>
                </Box>
                {/* 
     <DialogContentText style={{marginTop:'10px', marginBottom:'10px'}}>
            Search the employees name above.
          </DialogContentText>

          <Divider /> */}
                <Box sx={textRow}>
                  <TextField
                    margin="dense"
                    disabled={nameField}
                    id="name"
                    value={userData.firstName}
                    label="First Name"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                </Box>

                <Box sx={textRow}>
                  <TextField
                    margin="dense"
                    disabled={nameField}
                    id="name"
                    value={userData.lastName}
                    label="Last Name"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                </Box>

                <Box sx={textRow}>
                  <TextField
                    margin="dense"
                    id="name"
                    value={userData.mobile}
                    onChange={(e) => {
                      setUserData({ ...userData, mobile: e.target.value });
                    }}
                    label="Phone Number"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                </Box>

                <Box sx={textRow}>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={currency}
                    fullWidth
                    onChange={handleChange}
                    helperText="Please select department."
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Add User</Button>
              </DialogActions>
            </Dialog>
          </div>
        </Box>

        <DataGrid
          onRowClick={(e) => {
            setUserData({
              ...userData,
              firstName: e.row.firstName,
              lastName: e.row.lastName,
              email: e.row.email,
              mobile: e.row.phone,
            });
            setLookup(true);
            setNameField(true);
            handleClickOpen();
          }}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Grid>
  );
};

export default Employees;
