import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const BusinessItem = ({ item }) => (
  <TableRow>
    <TableCell className="flight-cell" align="right">{item.uuid}</TableCell>
    <TableCell className="flight-cell" align="right">{item.flight.split('->')[0]}</TableCell>
    <TableCell className="flight-cell" align="right">{item.arrival}</TableCell>
    <TableCell className="flight-cell" align="right">{item.flight.split('->')[1]}</TableCell>
    <TableCell className="flight-cell" align="right">{item.departure}</TableCell>
  </TableRow>
);

BusinessItem.propTypes = {
  item: PropTypes.any,
};

export default BusinessItem;
