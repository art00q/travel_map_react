import store from '../rtk/store';

interface Params {
  bl_latitude: number | null,
  bl_longitude: number | null,
  tr_longitude: number | null,
  tr_latitude: number | null,
  min_rating?: number,
  // offset?: number,
  // limit?: number,
  // child_rm_ages?: string,
  // currency?: string,
  // pricesmax?: number,
  // pricesmin?: number,
  // subcategory?: string,
  // rooms?: number,
  // zff?: string,
  // hotel_class?: string,
  // amenities?: string,
  // adults?: number,
}

const getUrlBoundsList = (params: Params) => `https://travel-advisor.p.rapidapi.com/${ store.getState().filters.type }/list-in-boundary?bl_latitude=${ params.bl_latitude }&bl_longitude=${ params.bl_longitude }&tr_longitude=${ params.tr_longitude }&tr_latitude=${ params.tr_latitude }`;

const getAutoCompleteUrl = (text: string) => `https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${ encodeURIComponent(text) }&lang=en_US&units=km`;

const getPlacesByNameUrl = (text: string) => `https://travel-advisor.p.rapidapi.com/locations/search?query=${ encodeURIComponent(text) }&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`;

export {
  getUrlBoundsList,
  getAutoCompleteUrl,
  getPlacesByNameUrl,
}
