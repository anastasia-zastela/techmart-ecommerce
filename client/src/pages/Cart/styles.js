import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    cartTitle: {
        padding: "10px 34px",
        color: "rgb(0, 0, 0)",
       
    },
    cartItems: {
        padding: "10px",
        marginBottom: "50px",
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    cartButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '20px 0',
        alignItems: 'center',
      
    },
    btnChekout: {
        backgroundColor: 'rgb(62, 192, 221)'
    }
}));
