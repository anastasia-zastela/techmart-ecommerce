import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  topNote: {
    margin: '0 0 1em',
    color: 'rgba(0, 0, 0, 0.54)',
    fontWeight: 'normal',
    '&::before': {
      content: '"* "',
    },
  },
  formBody: {
    padding: '1em',
    borderRadius: '.5em',
    border: '2px solid var(--main-text)',
  },
  // formInput: {
  //   ''
  // }
}));
