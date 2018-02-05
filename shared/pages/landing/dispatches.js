import { getPosts } from '../../redux/posts/actions';

export default dispatch => ({
  getPosts: () => dispatch(getPosts()),
});
