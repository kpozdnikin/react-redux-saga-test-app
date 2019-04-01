import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import './style.scss';
import CheapItem from './CheapItem';
import BusinessItem from './BusinessItem';

const List = ({ items }) => {
  console.log('items', items);
  return (
    <div className="list-wrapper">
      {!isEmpty(items.cheap) &&
        items.cheap.map(elem => <CheapItem key={elem.id} item={elem} />)}
      {!isEmpty(items.business) &&
        items.business.map(elem => <BusinessItem key={elem.uuid} item={elem} />)}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.object,
};

export default List;
