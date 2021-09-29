import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  text: {
    fontSize: '12px',
    color: 'rgb(225, 225, 225)',
  },
  container: {
    marginRight: 0,
    textAlign: 'right',
  },
  linkWrapper: {
    marginLeft: '15px',
  },
  footerLink: {
    marginTop: '9px',
    fontSize: '14px',
    lineHeight: '19px',
    color: '#FFFFFF',
    display: 'block',
  },
  footerTitle: {
    color: '#FFFFFF',
    fontWeight: 'bolt',
    fontSize: '18px',
    lineHeight: '25px',
  },
  footer: {
    backgroundColor: 'rgb(29, 28, 28)',
    padding: '20px 100px',
  },
  footerFirst: {
    backgroundColor: '#292929;',
    padding: '60px',
  },
  multilineColor: {
    marginTop: '20px',
    color: 'white',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiInputLabel-formControl': {
      color: 'white',
    },
  },
}));
