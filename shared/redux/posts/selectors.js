import { createSelector } from 'reselect';

const getPostState = state => state.postState;

// eslint-disable-next-line
export const getPosts = createSelector(
  getPostState,
  postState => postState.data,
);
