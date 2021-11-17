import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainSlider: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    textAlign: 'center',
    '& img': {
      objectFit: 'contain',
    },
    '& .slider-wrapper': {
      height: '480px',
      '& .slider': {
        height: '100%',
        '& .slide': {
          height: '100%',
        },
      },
    },
    '& .carousel': {
      flexBasis: '20%',
    },
    '& .carousel-slider': {
      flexBasis: '80%',
      display: 'flex',
    },

    '& .thumb': {
      opacity: 0.5,
      height: '120px',
    },

    '& .thumbs': {
      padding: '0px',
      display: 'flex',
      flexDirection: 'column ',
      alignAtems: 'center',
    },

    '& .thumb.selected': {
      border: 'none',
      opacity: 1,
    },

    '& .thumbs-wrapper ': {
      margin: '0px 10px',
    },

    '& .control-dots, .control-arrow, .carousel-status, .control-next': {
      display: 'none',
    },


  },

  [theme.breakpoints.down('sm')]: {
    mainSlider: {
      width: '230px',
      height: '530px',
      flexDirection: 'column',

      '& .carousel': {
        width: '100%',
      },

      '& .carousel .slide': {
        marginBottom: '118px',
      },

      '& .thumbs': {
        flexDirection: 'row',
      },
    },
  },

  [theme.breakpoints.down('xs')]: {
    mainSlider: {
      margin: '0 auto',
      width: '190px',
      height: '440px',
      flexDirection: 'column',
      '& .carousel': {
        width: '100%',
      },

      '& .thumbs': {
        flexDirection: 'row',
      },

      '& .carousel .slide': {
        marginBottom: '97px',
      },
    },
  },
}));
export default useStyles;
