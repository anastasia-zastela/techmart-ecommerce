import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  img: {
    width: 22,
    height: 22,
  },
  title: {
    fontSize: '28px',
    margin: 0,
    marginLeft: '5px',
    fontWeight: '600',
    color: 'rgb(62, 192, 221)',
  },
  titleLast: {
    fontWeight: '300',
  },
}));
