import React from 'react';
import PropTypes from 'prop-types';

const CheapItem = ({ item }) => (
  <div className="list-item-wrapper">
    <li className="list-item">{item.id}</li>
  </div>
);

CheapItem.propTypes = {
  item: PropTypes.object,
};

export default CheapItem;
