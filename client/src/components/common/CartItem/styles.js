import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    cardWrapper: {
        display: 'flex',
        borderRadius: '0'
    },
    cardMediaWrapper: {
        height: '130px',
        width: '120px',
        margin: '20px 10px',
      
    },
    cardTitle: {
        color: '#222222',
        fontSize: '18px',
        fontWeight: "600"
    },
    cardId: {
        color: '#222222',
        fontSize: '14px',
        marginTop: '28px'
    },
    cardPrice: {
        color: '#222222',
        fontWeight: '600',
        fontSize: '18px',
        marginTop: '28px'
    },
    cardButton: {
        padding: '0',
        minWidth: '30px',
        color: 'black',
        textTransform: 'none',
    },
    сardContent: {
        marginTop: "20px",
        marginLeft: "10px",
        marginRight: "50px",
        padding: "0"
    },
    cardQuantity :{
        display: 'flex',
        alignItems: 'end',
        margin: '40px 50px'
},
    cartQuantity : {
        padding: '4px 10px'
},
    cartTotalSum : {
        padding: '0',
        margin: '0 50px 28px',
        display: 'flex',
        alignItems: 'end',
        flexDirection: 'column',
        justifyContent: 'space-between'
}
}));
