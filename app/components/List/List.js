import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, sortBy } from 'lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import './style.scss';
import TableItem from './TableItem';

const tableHeader = [
  {
    key: 'id',
    name: 'ID',
  },
  {
    key: 'arrival',
    name: 'Arrival',
  },
  {
    key: 'arrivalTime',
    name: 'Arrival Time',
  },
  {
    key: 'departure',
    name: 'Departure',
  },
  {
    key: 'departureTime',
    name: 'Departure Time',
  },
];

/**
 * List of flights as a functional component with hooks
 * @param  {object} items
 * @return {object} flights list
 */
const List = ({ items }) => {
  const [orderBy, setOrderBy] = useState('id');
  const [order, setOrder] = useState('desc');
  function reorder(type) {
    setOrderBy(type);
    setOrder(order === 'desc' ? 'asc' : 'desc');
  }
  /* function filter() {
  
  } */
  // @todo ATTENTION!!! Sorting of string values is not the same as expected, need custom sorting for strings
  const listItems = sortBy(items.all, [order === 'desc' ? orderBy : -orderBy]);
  console.log('items', items, 'listItems', listItems);
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHeader.map(headerItem => (
            <TableCell
              className="flight-cell"
              sortDirection={orderBy === headerItem.key ? order : false}
              align="right"
            >
              <TableSortLabel
                active={orderBy === headerItem.key}
                direction={order}
                onClick={() => reorder(headerItem.key)}
              >
                {headerItem.name}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {!isEmpty(listItems) &&
          listItems.map(elem => <TableItem key={elem.id} item={elem} />)}
      </TableBody>
    </Table>
  );
};

List.propTypes = {
  items: PropTypes.object,
};

export default List;
