import { getPosts } from '../../redux/posts/selectors';

export default (states, props) => ({
  posts: getPosts(states, props),
});
