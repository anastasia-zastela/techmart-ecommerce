import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';

const SigninModal = () => {
  const [open, setOpen] = useState(true);
  return (

    <Dialog open={open} style={{width: '200px', height: '200px' }}>
      {/* <DialogTitle>Subscribe</DialogTitle> */}
      {/* <DialogContent> */}
      {/*  <DialogContentText> */}
      {/*    To subscribe to this website, please enter your email address here. We */}
      {/*    will send updates occasionally. */}
      {/*  </DialogContentText> */}
      {/*  <TextField */}
      {/*    autoFocus */}
      {/*    margin="dense" */}
      {/*    id="name" */}
      {/*    label="Email Address" */}
      {/*    type="email" */}
      {/*    fullWidth */}
      {/*    variant="standard" */}
      {/*  /> */}
      {/* </DialogContent> */}
      {/* <DialogActions> */}
      <button onClick={() => setOpen(false)}>Close</button>
      {/* </DialogActions> */}
    </Dialog>
  );
};

export default SigninModal;
