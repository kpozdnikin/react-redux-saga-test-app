import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, sortBy, filter } from 'lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TextField from '@material-ui/core/TextField';

import './style.scss';
import TableItem from './TableItem';
import TablePaginationActions from './TablePaginationActions';

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
  const [page, setPage] = useState(1);
  const [searchText, startSearch] = useState('');

  function reorder(type) {
    setOrderBy(type);
    setOrder(order === 'desc' ? 'asc' : 'desc');
  }

  function search(value) {
    startSearch(value);
  }

  let listItems = items.all;
  if (searchText) {
    listItems = filter(
      listItems,
      item =>
        item.id.toString().indexOf(searchText) !== -1 ||
        item.arrival.indexOf(searchText) !== -1 ||
        item.arrivalTime.indexOf(searchText) !== -1 ||
        item.departure.indexOf(searchText) !== -1 ||
        item.departureTime.indexOf(searchText) !== -1,
    );
  }

  // @todo ATTENTION!!! Sorting of string values is not the same as expected, need custom sorting for strings
  listItems = sortBy(listItems, [order === 'desc' ? orderBy : -orderBy]);

  return (
    <React.Fragment>
      <TextField
        id="flights-filter"
        label="filter"
        className="test-search"
        value={searchText}
        onChange={e => search(e.target.value)}
        margin="normal"
      />
      {!isEmpty(listItems) && (
        <Table>
          <TableHead>
            <TableRow>
              {tableHeader.map(headerItem => (
                <TableCell
                  key={headerItem.key}
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
            {listItems.slice(page * 5, page * 5 + 5).map(elem => (
              <TableItem key={elem.id} item={elem} />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5]}
                colSpan={5}
                count={listItems.length}
                rowsPerPage={5}
                page={page || 1}
                SelectProps={{
                  native: true,
                }}
                onChangePage={setPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </React.Fragment>
  );
};

List.propTypes = {
  items: PropTypes.object,
};

export default List;
