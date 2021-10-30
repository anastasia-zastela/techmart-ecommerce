import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({

    cartTitle: {
        padding: "10px 34px",
        color: "rgb(0, 0, 0)",
    },
    cartButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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