import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function Signup() {
  const box={
    
    backgroundColor:"#FFB9B9",
    padding:"100px",
    height:'400px'
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <>
     <div >
     <div>
      <Button onClick={handleClickOpen}>
       SIGN UP
      </Button>
      <Dialog
       style={{textAlign:"center"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"SIGN UP"}
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
        
          <div><TextField id="first "  variant="outlined" label="First Name"type="First"/></div>
          <br />
          <div><TextField id="first "  variant="outlined" label="Last Name"type="First"/></div>
          <br />
          <div><TextField id="first "  variant="outlined" label="Email" type="First"/></div>
          <br />
          <div><TextField id="first "  variant="outlined" label="Password"type="First"/></div>
          <br />
          <div><TextField id="first "  variant="outlined" label="Confirm Password"type="First"/></div>
          <br />
          
          </DialogContentText>
        </DialogContent>
        <DialogActions  >
          <Button   style={{marginLeft:"80px"}} onClick={handleClose} variant="controlled">Cancel</Button>
          <Button  style={{marginRight:"100px"}} onClick={handleClose} autoFocus variant="contained">
            SIGN UP
          </Button>
         
        </DialogActions>
        <Button style={{marginLeft:"10px"}}><Link to='/'> Already have an account ? Login </Link></Button>
      </Dialog>
    </div>
    </div>

    
  
    
    {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="first " label="First Name" variant="standard" type="First"/>
      <TextField id="last " label="Last Name" variant="standard" type="Last"/>
      <TextField id="number" label="Mobile Number" variant="standard" type="number"/>
      <TextField id="email" label="Email" variant="standard" type="Email"/>
      </Box>
      <div>
      <TextField id="password" label="password" variant="standard" type="Password"/>
      <div><TextField id=" cpassword" label="confirm password" variant="standard" type="Confirm Password"/>
      </div>
      </div>
     */}
   
    </>
  );
}