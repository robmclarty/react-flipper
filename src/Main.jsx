'use strict';

import React from 'react';
import Flipper from './Flipper';

export default React.createClass({
  displayName: 'Main',

  getInitialState: function () {
    return {
      cards: ['Card One', 'Card Two', 'Card Three', 'Card Four', 'Card Five']
    };
  },

  removeCard: function (index) {
    this.setState(this.state.cards.splice(index, 1));
  },

  render: function () {
    return (
      <div className="main-container">
        <ul>
          {
            this.state.cards.map((cardName, index) => {
              const cardKey = cardName.replace(/\s/, '') + index;

              return (
                <li key={cardKey}>
                  <Flipper
                      name={cardName}
                      position={index}
                      removeCard={this.removeCard}
                  />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
});
