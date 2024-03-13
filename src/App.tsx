import { CssBaseline, Grid } from '@mui/material';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
import List from './components/List/List';
import OverviewMap from './components/Map/Map';

import store from './rtk/store';

function App() {
  return (
    <Provider store={ store }>
      <CssBaseline />

      <Header />

      <Grid container spacing={ 3 } sx={{ width: '100%' }}>
        <Grid item xs={ 12 } md={ 4 }>
          <List />
        </Grid>

        <Grid item xs={ 12 } md={ 8 }>
          <OverviewMap />
        </Grid>
      </Grid>
    </Provider>
  )
}

export default App;
