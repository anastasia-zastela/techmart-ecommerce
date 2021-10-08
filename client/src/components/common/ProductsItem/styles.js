import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    cardWrapper: {
        width: '242px',
        marginBottom: '25px',
        marginLeft:'25px'   
    },
    cardAdaptiveWrapper: {
        width: '200px',
        marginLeft: '25px',
        marginBottom: '25px',
    },
    cardMediaWrapper: {
        height: '180px',
        width: '133px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '25px'
    },
    cardTitle: {
        color: '#222222',
        marginTop: '20px',
        fontSize: '14px',
        lineHeight: '19px',
    },
    cardLink: {
        textDecoration: 'none',
    },
    cardPrice: {
        color: '#222222',
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '25px',
        marginTop: '28px'
    },
    cardExtraOptions: {
        marginTop: '5px',
    },
    cardButton: {
        width: '100%',
        color: 'white',
        textTransform: 'none',
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: '300',
    },

}));
