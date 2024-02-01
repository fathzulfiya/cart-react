import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Login() {
  const box = {

    backgroundColor: "#FFB9B9",
    padding: "100px",
    height: '400px'
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

      <div>

        <Button onClick={handleClickOpen}>
          Login
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Enter Email Id"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <TextField id="outlined-basic" label="email" variant="outlined" type="email" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} autoFocus>
              ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>





      
    </>
  );
}