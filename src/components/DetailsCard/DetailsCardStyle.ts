import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (_theme) => ({
    subtitleStart: {
      maxWidth: '32%',
      textAlign: 'start',
    },
    subtitleEnd: {
      maxWidth: '65%',
      textAlign: 'end',
    },
    iconReward: {
      maxWidth: '20px',
      maxHeight: '20px',
    },
    chip: {
      margin: '5px 5px',
    },
  })
);

export default useStyles;
