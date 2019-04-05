import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const TableItem = ({ item }) => (
  <TableRow>
    <TableCell className="flight-cell" align="right">
      {item.id}
    </TableCell>
    <TableCell className="flight-cell" align="right">
      {item.arrival}
    </TableCell>
    <TableCell className="flight-cell" align="right">
      {item.arrivalTime}
    </TableCell>
    <TableCell className="flight-cell" align="right">
      {item.departure}
    </TableCell>
    <TableCell className="flight-cell" align="right">
      {item.departureTime}
    </TableCell>
  </TableRow>
);

TableItem.propTypes = {
  item: PropTypes.object,
};

export default TableItem;
