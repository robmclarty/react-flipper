'use strict';

import React from 'react';

export default React.createClass({
  displayName: 'Back',

  propTypes: {
    name: React.PropTypes.string,
    removeCard: React.PropTypes.func
  },

  defaultProps: {
    name: ''
  },

  onClickRemove: function (e) {
    e.preventDefault();
    this.props.removeCard(this.props.position);
  },

  render: function () {
    return (
      <div className="back-container">
        <p>This is the back for</p>
        <h3>{this.props.name}</h3>
        <p>
          <a
              className="delete-button"
              onClick={this.onClickRemove}>
            Remove this card
          </a>
        </p>
      </div>
    );
  }
});
