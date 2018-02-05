import React from 'react';
import PropTypes from 'prop-types';

function ArrowRightIcon({ width = 18, height = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width={width} height={height} version="1.1">
      <g id="surface1" fill="#fff">
        <path d="M 14.699219 5 C 18.898438 7.800781 22.699219 12.199219 22.800781 12.398438 C 23 12.601563 23 12.800781 23 13.101563 C 23 13.300781 22.898438 13.601563 22.800781 13.800781 C 22.699219 14 18.800781 18.398438 14.699219 21.199219 C 14.398438 21.398438 14 21.398438 13.601563 21.300781 C 13.300781 21.101563 13 20.800781 13 20.398438 L 13 16.699219 C 13 16.699219 4.300781 16.199219 3.898438 15.898438 C 3.398438 15.300781 3 14.101563 3 13 C 3 11.898438 3.398438 10.800781 3.898438 10.398438 C 4.300781 10.199219 13 9.5 13 9.5 L 13 5.800781 C 13 5.398438 13.199219 5.101563 13.601563 4.898438 C 13.898438 4.699219 14.300781 4.800781 14.699219 5 Z " />
      </g>
    </svg>
  );
}

ArrowRightIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ArrowRightIcon;