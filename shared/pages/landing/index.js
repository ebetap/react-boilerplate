import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withJob } from 'react-jobs';
import PropTypes from 'prop-types';
import states from './states';
import dispatches from './dispatches';

function Landing({ posts }) {
  return (
    <div className="landing">
      <h1>React Server Side Rendering</h1>
    </div>
  );
}

Landing.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    categoryId: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.number,
    id: PropTypes.string,
    title: PropTypes.string,
    userId: PropTypes.string,
  })),
};

export default compose(
  connect(states, dispatches),
  withJob({
    work: ({ getPosts, posts }) => {
      if (posts && posts.length) return true;
      return getPosts();
    },
  }),
)(Landing);
