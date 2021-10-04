import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  // page: {
  //   margin: '-20px auto 0',
  //   padding: '10px clamp(1em, calc(8vw+1em), 5em) 30px',
  // },
  wrapper: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: 'calc(2vw + .5em)',
  },
  title: {
    margin: '0 0 .5em',
  },
  note: {
    margin: '0 0 1em',
    color: 'rgba(0, 0, 0, 0.54)',
    fontWeight: 'normal',
    '&::before': {
      content: '"* "',
    },
  },
}));
