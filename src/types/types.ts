interface Bounds {
  _sw: {
    lat: number | null,
    lng: number | null,
  },
  _ne: {
    lat: number | null,
    lng: number | null,
  },
}

interface InitialState {
  bounds: Bounds,
  places: object[],
  filters: {
    type: string,
    rating: number,
  },
  fetching: {
    isLoading: boolean,
  },
  autocomplete: {
    results: object[],
    loading: boolean,
  }
}

export type {
  Bounds,
  InitialState,
};
