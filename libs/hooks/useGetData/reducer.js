export const initState = {
  loading: true,
  error: null,
  current: null,
  daily: [],
  hourly: [],
  minutely: [],
  timezone: 'UTC',
};

const types = {
  GET_DATA: 'GET_DATA',
  GET_SUCCESS: 'GET_SUCCESS',
  GET_FAILED: 'GET_FAILED',
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
        current: payload.current || null,
        hourly: payload?.hourly || [],
        timezone: payload?.timezone || 'UTC',
        daily: payload?.daily || [],
        minutely: payload?.minutely || [],
        loading: false,
        error: null,
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

export const setError = error => {
  return {
    type: types.GET_FAILED,
    payload: error,
  };
};

export const setLoading = () => {
  return {
    type: types.GET_DATA,
  };
};
