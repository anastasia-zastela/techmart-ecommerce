import { makeStyles } from "@material-ui/core";
import { styles } from '../../utils/UserInterfaceConstants';

export const useStyles = makeStyles(() => ({
    linkNavBar: {
        fontSize: "17px",
        textDecoration: "none",
        color: styles.colorLightBlue,
        width: '150px'
    },
    NavBar: {
        backgroundColor: styles.colorDarkGrey,
        padding: "10px",
        marginBottom: "20px",
        display: 'flex',
        justifyContent: 'center'
    },
}));