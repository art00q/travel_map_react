import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (_theme) => ({
    details: {
      padding: '25px',
    },
    detailsSelect: {
      marginBottom: _theme.spacing(4),
    },
    detailsForm: {
      margin: _theme.spacing(1),
      minWidth: '120px',
    },
    list: {
      maxHeight: '65vh',
      marginTop: '30px',
      overflow: 'auto',
    },
  })
);

export default useStyles;
