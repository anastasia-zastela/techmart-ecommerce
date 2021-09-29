import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    title: {
        fontSize: "28px",
        textTransform: "uppercase",
        margin: 0,
        marginLeft: "5px",
        fontFamily: "Rajdhani",
        color: "rgb(62, 192, 221)",
    },
    shoppingCart: {
        '&:hover': {
            stroke: 'rgb(62, 192, 221)'
        }
    },
    header: {
        backgroundColor: "rgb(29, 28, 28)",
        padding: "10px",
    },
    search: {
        color: "black",
        height: '40px',
        width: '500px',
        backgroundColor: "white",
        borderRadius: '0px',
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },
        "& .MuiInputLabel-formControl": {
            color: "grey",
            top: '-7px',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
        }
    },
    buttonSearch: {
        width: '70px',
        height: '40px',
        background: '#f3f0f1',
        position: 'relative',
        background: '#f3f0f1',
        fontSize: '14px',
        marginLeft: '10px',
        borderRadius: '10px',
        border: 'none',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.1s ease-in-out',
        '& span': {
            fontWeight: 'semibold',
        },
        boxShadow: '2px 2px 10px rgba(62, 192, 221, 0.8), 6px 6px 10px rgba(62, 192, 221, 0.2)',
        color: 'black',
        '&:hover': {
            opacity: 0.5,
            boxShadow: '2px 2px 10px rgba(62, 192, 221, 0.8), 6px 6px 10px rgba(62, 192, 221, 0.2)',
        },
        '&:active': {
            opacity: 1,
            boxShadow: 'inset -2px -2px 4px rgba(62, 192, 221, 0.5), inset 2px 2px 8px rgba(62, 192, 221, 0.1)',
            color: 'rgb(62, 192, 221)',
        },
    }
}));