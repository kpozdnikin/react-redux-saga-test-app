import React from 'react';
import PropTypes from 'prop-types';

const BusinessItem = ({ item }) => (
  <div className="list-item-wrapper">
    <li className="list-item">{item.uuid}</li>
  </div>
);

BusinessItem.propTypes = {
  item: PropTypes.any,
};

export default BusinessItem;
