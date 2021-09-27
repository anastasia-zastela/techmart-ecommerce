import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
            stroke: 'grey'
        }
    },
    header: {
        backgroundColor: "rgb(29, 28, 28)",
        padding: "10px",
    },
    search: {
        color: "black",
        height: '30px',
        width: '300px',
        backgroundColor: "white",
        borderRadius: '0px',
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },
        "& .MuiInputLabel-formControl": {
            color: "grey",
            top: '-11px',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
        }
    },
    buttonSearch: {
        color: 'black',
        border: '1px solid white',
        height: '30px',
        textTransform: 'none',
        marginLeft: '10px',
        textAlign: 'center',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'rgb(160, 160, 160)'
        },
    }
}));