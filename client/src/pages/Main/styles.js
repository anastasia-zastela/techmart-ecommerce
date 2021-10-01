import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  pageTitle: {
    marginTop: '30px',
    textAlign: 'center',
  },
  loadingWrapper: {
    minHeight: '100vh',
  },
  errorText: {
    color: 'red',
  },
}));
