import React from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters?.map((monster) => (
        <div key={monster?.id}>
          <Card monster={monster} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
