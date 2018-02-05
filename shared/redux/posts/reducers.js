const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POSTS/SAVE_POST_DATA': {
      return {
        ...state, data: action.data,
      };
    }
    case 'POSTS/SAVE_POST_META_DATA': {
      return {
        ...state,
        total: action.total,
        limit: action.limit,
        skip: action.skip,
      };
    }
    case 'POSTS/FETCHING_SAVE_POST_DATA': {
      return {
        ...state, isFetching: action.isFetching,
      };
    }
    case 'POSTS/FAIL_SAVE_POST_DATA': {
      return {
        ...state, errorMessage: action.errorMessage,
      };
    }
    default: {
      return state;
    }
  }
};
