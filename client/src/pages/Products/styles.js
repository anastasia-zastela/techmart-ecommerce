import { makeStyles } from '@material-ui/core';
import { border } from '@mui/system';

export const useStyles = makeStyles(() => ({
    productsMainWrapper : {
      display: 'flex',
      },
  testingFilter: {
    width: '276px',
    height: '887px',
    border:'3px solid black'
    },
    productsItemMainWrapper: {
      display: 'flex',
      flexWrap:'wrap'
      },
    producstAdaptive:{
      justifyContent:'center'
    },
    menuStyle: {
      alignItems:'center',
      display:'flex',
      justifyContent:'space-between',
      marginBottom:'30px'
    }
    }));

