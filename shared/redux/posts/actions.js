const savePostData = data => ({
  type: 'POSTS/SAVE_POST_DATA',
  data,
});

const setFetchingFlag = isFetching => ({
  type: 'POSTS/FETCHING_SAVE_POST_DATA',
  isFetching,
});

const setErrorMessage = errorMessage => ({
  type: 'POSTS/FAIL_SAVE_POST_DATA',
  errorMessage,
});

// eslint-disable-next-line
export function getPosts() {
  return async (dispatch) => {
    try {
      // feathersjs instance is available on app
      dispatch(setFetchingFlag(true));
      const data = await import('./posts__mock.json');
      dispatch(setFetchingFlag(false));
      dispatch(savePostData(data));
      return true;
    } catch (e) {
      dispatch(setFetchingFlag(false));
      dispatch(setErrorMessage(e.message));
      throw e;
    }
  };
}
