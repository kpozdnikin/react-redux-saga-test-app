import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import './style.scss';
import CheapItem from './CheapItem';
import BusinessItem from './BusinessItem';

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
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell
            className="flight-cell"
            sortDirection={orderBy === 'id' ? 'id' : false}
            align="right"
          >
            <TableSortLabel
              active={orderBy === 'id'}
              direction={order}
              onClick={() => reorder('id')}
            >
              id
            </TableSortLabel>
          </TableCell>
          <TableCell
            className="flight-cell"
            sortDirection={orderBy === 'Arrival' ? 'Arrival' : false}
            align="right"
          >
            <TableSortLabel
              active={orderBy === 'arrival'}
              direction={order}
              onClick={() => reorder('arrival')}
            >
              Arrival
            </TableSortLabel>
          </TableCell>
          <TableCell
            className="flight-cell"
            sortDirection={orderBy === 'arrivalTime' ? 'arrivalTime' : false}
            align="right"
          >
            <TableSortLabel
              active={orderBy === 'arrivalTime'}
              direction={order}
              onClick={() => reorder('arrivalTime')}
            >
              Arrival Time
            </TableSortLabel>
          </TableCell>
          <TableCell
            className="flight-cell"
            sortDirection={orderBy === 'departure' ? 'departure' : false}
            align="right"
          >
            <TableSortLabel
              active={orderBy === 'departure'}
              direction={order}
              onClick={() => reorder('departure')}
            >
              Departure
            </TableSortLabel>
          </TableCell>
          <TableCell
            className="flight-cell"
            sortDirection={orderBy === 'departureTime' ? 'departureTime' : false}
            align="right"
          >
            <TableSortLabel
              active={orderBy === 'departureTime'}
              direction={order}
              onClick={() => reorder('departureTime')}
            >
              Departure Time
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!isEmpty(items.cheap) &&
          items.cheap.map(elem => (
            <CheapItem key={elem.id} item={elem} />
          ))}
        {!isEmpty(items.business) &&
          items.business.map(elem => (
            <BusinessItem key={elem.uuid} item={elem} />
          ))}
      </TableBody>
    </Table>
  );
};

List.propTypes = {
  items: PropTypes.object,
};

export default List;
