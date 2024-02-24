export const initState = {
  loading: true,
  error: null,
  current: null,
  hourly: [],
  timezone: 'UTC',
};

const types = {
  GET_DATA: 'GET_DATA',
  GET_SUCCESS: 'GET_SUCCESS',
  GET_FAILED: 'GET_FAILED',
};

export const errorCodes = {
  CITY_ERROR: 1,
  GETTING_ERROR: 2,
};

export default function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        current: payload.current,
        hourly: payload.hourly,
        timezone: payload.timezone,
      };

    case types.GET_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      throw new Error('Invalid type!');
  }
}

export const setData = data => {
  return {
    type: types.GET_SUCCESS,
    payload: data,
  };
};

export const setError = (code, error) => {
  return {
    type: types.GET_FAILED,
    payload: {
      code,
      error,
    },
  };
};

export const setLoading = () => {
  return {
    type: types.GET_DATA,
  };
};
