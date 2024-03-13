import { createAction } from "@reduxjs/toolkit";
import { LngLatBounds } from "mapbox-gl";

const ACTION_NAMES = {
  SET_BOUNDS: 'SET_BOUNDS',
  SET_PLACES: 'SET_PLACES',
  SET_TYPE: 'SET_TYPE',
  SET_RATING: 'SET_RATING',
  SET_LOADING: 'SET_LOADING',
  SET_AUTOCOMPLETE_RESULTS: 'SET_AUTOCOMPLETE_RESULTS',
  SET_AUTOCOMPLETE_LOADING: 'SET_AUTOCOMPLETE_LOADING',
};

const setBounds = createAction<LngLatBounds | undefined>(ACTION_NAMES.SET_BOUNDS);
const setPlaces = createAction<[]>(ACTION_NAMES.SET_PLACES);

const setType = createAction<string>(ACTION_NAMES.SET_TYPE);
const setRating = createAction<number>(ACTION_NAMES.SET_RATING);

const setLoading = createAction<boolean>(ACTION_NAMES.SET_LOADING);

const setAutoCompleteResults = createAction<object>(ACTION_NAMES.SET_AUTOCOMPLETE_RESULTS);
const setAutoCompleteLoading = createAction<boolean>(ACTION_NAMES.SET_AUTOCOMPLETE_LOADING);

export { 
  ACTION_NAMES, 
  setBounds, 
  setPlaces, 
  setType, 
  setRating, 
  setLoading,
  setAutoCompleteResults,
  setAutoCompleteLoading,
};
