import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (_theme) => ({
    map: {
      width: '100%',
      height: '80vh',
    },
    marker: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '100px',
      width: '100px',
      padding: _theme.spacing(1),
      cursor: 'pointer',
    },
    markerTitle: {
      wordBreak: 'break-all',
    },
    markerIcon: {
      maxWidth: '80px',
      maxHeight: '60px',
      width: '80px',
      height: '60px',
      marginBottom: _theme.spacing(1),
    },
    markerRating: {

    },
  })
);

export default useStyles;
