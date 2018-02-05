import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import Container from '@components/container';
import withStyles from '@utils/styles/withStyles';
import PostListItem from './item';
import styles from './styles';

function PostList({ className, posts, classes }) {
  const portalListClass = classNames(classes.root, {
    [className]: className,
  });
  return (
    <div className={portalListClass}>
      <Container>
        <div className={classes.items}>
          {posts &&
            posts.length &&
            posts.map((post, key) => (
              <div className={classes.item} key={key}>
                <PostListItem
                  imageURL={post.thumbnailUri}
                  name={post.title}
                  description={post.description}
                />
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}

PostList.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      categoryId: PropTypes.string,
      content: PropTypes.string,
      created_at: PropTypes.number,
      id: PropTypes.string,
      title: PropTypes.string,
      userId: PropTypes.string,
    }),
  ),
  classes: PropTypes.shape({
    root: PropTypes.string,
    items: PropTypes.string,
    item: PropTypes.string,
  }),
};

export default compose(
  withStyles(styles, {
    name: 'PostList',
  }),
)(PostList);
