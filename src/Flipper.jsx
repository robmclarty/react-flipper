'use strict';

import React from 'react';
import Front from './Front';
import Back from './Back';

export default React.createClass({
  displayName: 'Flipper',

  propTypes: {
    name: React.PropTypes.string,
    removeCard: React.PropTypes.func
  },

  defaultProps: {
    name: ''
  },

  getInitialState: function () {
    return {
      flipped: false
    };
  },

  onClickFlip: function (e) {
    e.preventDefault();
    this.setState({ flipped: !this.state.flipped });
  },

  render: function () {
    return (
      <div className={`flipper-container ${ this.state.flipped ? 'flipped' : '' }`}>
        <div className="flipper">
          <div className="flipper-front">
            <button
                className="flipper-flip-button"
                onClick={this.onClickFlip}>
              flip
            </button>

            <Front name={this.props.name} />
          </div>

          <div className="flipper-back">
            <button
                className="flipper-back-button"
                onClick={this.onClickFlip}>
              back
            </button>

            <Back
                name={this.props.name}
                position={this.props.position}
                removeCard={this.props.removeCard}
            />
          </div>
        </div>
      </div>
    );
  }
});
