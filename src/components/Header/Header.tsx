import React, { useEffect, useState, FormEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
  AppBar, 
  Autocomplete, 
  Box, 
  TextField, 
  Toolbar, 
  Typography 
} from '@mui/material';

import useStyles from './HeaderStyle';
import { setAutocompleteResultsAsync, setPlacesAsync } from '../../rtk/async-actions';
import { RootState, AppDispatch } from '../../rtk/store';
import { useDebounce } from 'use-debounce';
import { getPlacesByNameUrl } from '../../api-requests/URLS';

function Header() {
  const [value, setValue] = useState<string>('');
  const autoCompleteResults = useSelector((state: RootState) => state.autocomplete.results);
  const places = useSelector((state: RootState) => state.places);
  const dispatch = useDispatch<AppDispatch>();

  const { classes } = useStyles();

  const [text] = useDebounce(value, 500);

  useEffect(() => {
    // dispatch(setAutocompleteResultsAsync(text));
  }, [text]);

  return (
    <AppBar position="static">
      <Toolbar className={ classes.toolbar }>
        <Typography variant="h5" className={ classes.title }>
          Travel Advisor
        </Typography>
        <Box display="flex" alignItems="center" >
          <Typography variant="h6" className={ classes.title }>
            Explore new places
          </Typography>
          <form className={ classes.search } onSubmit={ (event) => {
            event.preventDefault();

            // dispatch(setPlacesAsync(getPlacesByNameUrl(value)));
            setValue('');
          } }>
            <Autocomplete
              freeSolo
              disableClearable
              options={ 
                autoCompleteResults.map((option: { 
                  text?: string, 
                  detailsV2?: { names?: { name?: string, } } 
                }) => 
                  option.text ? option.text : option?.detailsV2?.names?.name
                ) 
              }
              onChange={ (event, value) => setValue(value) }
              renderInput={ (params) => (
                <TextField
                  { ...params }
                  value={ value }
                  onChange={ (event) => setValue(event.target.value) }
                  placeholder="Search..." 
                  label="" 
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                    className: classes.searchInput,
                    classes: { 
                      focused: classes.inputFocused,
                      root: classes.inputOutlineRoot,
                    } }}
                />
              ) }
            />
          </form>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
