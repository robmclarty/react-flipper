'use strict';

import React from 'react';

export default React.createClass({
  displayName: 'Front',

  propTypes: {
    name: React.PropTypes.string
  },

  defaultProps: {
    name: ''
  },

  render: function () {
    return (
      <div className="front-container">
        <p>This is the front for</p>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
});
