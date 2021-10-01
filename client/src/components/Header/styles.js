import { makeStyles } from "@material-ui/core";
import { styles } from '../../utils/UserInterfaceConstants';

export const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "28px",
        textTransform: "uppercase",
        margin: 0,
        marginLeft: "5px",
        fontFamily: "Rajdhani",
        color: styles.colorLightBlue,
    },
    shoppingCart: {
        '&:hover': {
            stroke: styles.colorLightBlue
        }
    },
    header: {
        backgroundColor: styles.colorDark,
        padding: "10px",
    },
    search: {
        color: styles.colorBlack,
        height: '40px',
        width: '100%',
        backgroundColor: styles.colorWhite,
        borderRadius: '0px',
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.colorWhite,
        },
        "& .MuiInputLabel-formControl": {
            color: styles.colorGrey,
            top: '-7px',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: styles.colorWhite
        }
    },
    buttonSearch: {
        width: '70px',
        height: '40px',
        background: styles.colorWhite,
        position: 'relative',
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
        color: styles.colorBlack,
        '&:hover': {
            opacity: 0.5,
        },
        '&:active': {
            opacity: 1,
            boxShadow: 'inset -2px -2px 4px rgba(62, 192, 221, 0.5), inset 2px 2px 8px rgba(62, 192, 221, 0.1)',
            color: styles.colorLightBlue,
        },
    },
    containerInput: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 7,
        paddingLeft: 20
    },
    [theme.breakpoints.down("sm")]: {
        gridLogo: {
            order: 1,
        },
        gridCart: {
            order: 2,
        },
        gridInput: {
            order: 3,
        },
        containerInput: {
            paddingLeft: 70,
            paddingRight: 70
        }
    },
    [theme.breakpoints.down("xs")]: {
        containerInput: {
            paddingLeft: 20,
            paddingRight: 0
        }
    },
}));