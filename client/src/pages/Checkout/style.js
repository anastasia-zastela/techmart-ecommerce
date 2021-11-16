import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles(() => ({
  checkoutContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  checkoutForm: {
    backgroundColor: "white",
    boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    width:' 400px',
    height:'200px',
    padding:'50px 20px'
  },
  formTitle:{
    textAlign:'left',
    marginBottom:'40px'
  },
  formAnchor: {
    display:'flex',
  },
  anchorStyle:{
    fontSize:'11px',
    cursor:'pointer',
    marginRight:'20px'
  }

}));
