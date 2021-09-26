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
    link: {
        fontSize: "17px",
        textDecoration: "none",
        color: "rgb(62, 192, 221)",
    },
    header: {
        backgroundColor: "rgb(29, 28, 28)",
        padding: "10px",
    },
    search: {
        color: "white",
        height: '30px',
        width: '300px',
        borderRadius: '0px',
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },
        "& .MuiInputLabel-formControl": {
            color: "white",
            top: '-11px',
        },
    },
    buttonSearch: {
        color: 'white',
        border: '1px solid white',
        height: '30px',
        textTransform: 'none',
        marginLeft: '10px',
        textAlign: 'center'
    }
}));