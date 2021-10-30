import { makeStyles } from "@material-ui/core";

<<<<<<< HEAD
export const useStyles = makeStyles(() => ({

    cartTitle: {
        padding: "10px 34px",
        color: "rgb(0, 0, 0)",
=======
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
>>>>>>> 2ffdb414adcfb8e746c80674d6703c1ba85185ed
    },
    cartButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
<<<<<<< HEAD
        alignItems: 'center',
        margin: '20px 0',
    },
    btnChekout: {
        backgroundColor: 'rgb(62, 192, 221)',
        marginTop: '20px'
    },
    cartItems:{
        marginBottom: '50px'
    }
}));
=======
        margin: '20px 0',
        alignItems: 'center',
      
    },
    btnChekout: {
        backgroundColor: 'rgb(62, 192, 221)'
    }
}));
>>>>>>> 2ffdb414adcfb8e746c80674d6703c1ba85185ed
