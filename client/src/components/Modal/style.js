import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    modal__admin: {
        width: 500,
        display: 'flex',
        flexDirection: 'column'

    },
    modal__admin___category: {
        display: "flex",

    },
    modal__category__selector: {
        marginBottom:15
    },
    propertyForm: {
        display: 'flex',
        justifyContent: 'space-around',
    }

}));
