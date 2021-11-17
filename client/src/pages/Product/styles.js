import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    margin: '0 0 30px',
    padding: "2rem",
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '40vh',
  },
  coloredBtn: {
    marginRight: '10px',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    border: '0.5px solid #A6A6A6',
  },
  item: {
    textAlign: 'left',
  },
  productName: {
    fontSize: '2.5rem',
    fontWeight: 600,
    margin: '20px auto 10px',
    width: 'fit-content',
    height: 'min-content',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  productPhotosSection: {
    padding: '15px',
    boxShadow: '0px 0px 5px -1px rgb(0 0 0 / 10%)',
    borderRadius: '10px',
  },
  productPhotos: {
    height: '480px',
  },
  productInfoSection: {
    padding: '0 4rem !important',
  },
  price: {
    fontWeight: 600,
    marginBottom: '3.5rem',
    fontSize: '2rem',
  },
  container: {
    marginBottom: '3.5rem',
    fontSize: '1.5rem !important',
  },
  text: {
    margin: '2.5rem 0',
    fontSize: '1.5rem',
  },
  badges: {
    display: 'flex',
    gap: '1.5rem',
    margin: '2.5rem 0',
    fontSize: '1.5rem',
  },
  badge: {
    display: 'flex',
    gap: '0.5rem',
  },
  exist: {
    fontSize: '1.2rem',
    color: 'rgb(87,174,0)',
  },
  noExist: {
    fontSize: '1.2rem',
    color: 'red',
  },
  garanty: {
    fontSize: '1.2rem',
    marginright: '1.5rem',
  },
  productButton: {
    display: 'block',
    margin: '0 auto',
    color: '#3ec0dd',
    fontSize: '18px',
    backgroundColor: 'white',
    width: 'fit-content',
    borderRadius: '5px',
    border: '1px solid  #3ec0dd',
    padding: '10px 20px',

    '&:hover': {
      color: 'white',
      backgroundColor: '#3ec0dd',
    },
  },

  [theme.breakpoints.down('sm')]: {
    price: {
      marginBottom: '3rem',
    },
    container: {
      marginBottom: '3rem',
    },
    text: {
      margin: '3rem 0 ',
    },
  },

  [theme.breakpoints.down('xs')]: {
    price: {
      marginBottom: '2rem',
    },
    container: {
      marginBottom: '2rem',
    },
    text: {
      margin: '2rem 0 ',
    },
  },
}));

export default useStyles;
