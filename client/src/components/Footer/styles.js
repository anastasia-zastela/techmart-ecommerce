import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    text: {
        fontSize: "12px",
        color: '#A6A6A6',
        lineHeight: '3',
    },
    container: {
        marginRight: 0,
        textAlign: "right",
    },
    linkWrapper: {
        marginLeft: "15px",
    },
    footerLink: {
        marginTop: "9px",
        fontSize: "14px",
        lineHeight: "19px",
        color: '#A6A6A6',
        display: "block",
    },
    footerTitle: {
        color: '#A6A6A6',
        fontWeight: "bolt",
        fontSize: "18px",
        lineHeight: "25px",
    },
    footer: {
        backgroundColor: "rgb(29, 28, 28)",
        padding: "20px 100px",
    },
    footerFirst: {
        backgroundColor: "#292929;",
        padding: "60px",
    },
    multilineColor: {
        marginTop: "10px",
        height: '40px',
        color: '#A6A6A6',
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A6A6A6",
        },
        "& .MuiInputLabel-formControl": {
            color: "#A6A6A6",
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#A6A6A6'
        },
    },
    footerEmailInputButton: {
        position: 'absolute',
        top: '22px',
        right: '1px',
    },
}));