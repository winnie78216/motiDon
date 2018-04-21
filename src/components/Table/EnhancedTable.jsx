import React from "react";
import {
  withStyles,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Checkbox,
  Tooltip,
  IconButton,
  TableFooter,
  TablePagination
} from "material-ui";
import { EnhancedTableHead, EnhancedTableToolbar } from "./EnhancedTableHead";
import EditIcon from 'material-ui-icons/Edit';
import PropTypes from "prop-types";

import tableStyle from "variables/styles/tableStyle";



class EnhancedTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      snackOpen: false,
      openWarning: false,
      order: 'asc',
      orderBy: 'date',
      selected: [],
      page: 0,
      rowsPerPage: 10,
      editModalOpen: false,
      dataForEdit: { date: null, title: null, caseNumber: null, location: null, members: null, summary: null },
      dataEditIndex: null,
    };
  }

  handleClickEditModalOpen = (event, id) => {
    const dataForEdit = this.props.data.find(entry => entry.id === id)
    const dataEditIndex = this.props.data.findIndex(entry => entry.id === id)
    this.setState({ dataForEdit: dataForEdit, dataEditIndex: dataEditIndex })
    this.setState({ editModalOpen: true });
  };

  handleClickDelete = () => {
    const selected = this.state.selected
    const data = this.props.data
    selected.forEach(entry => {
      let index = data.findIndex(entry => entry.id === entry)
      this.props.removeMeetingNote(index, entry)
    })
    this.setState({ selected: [], openWarning: false })
    this.props.fetch();
  }

  handleCloseWarning = () => {
    this.setState({ openWarning: false })
  }

  handleOpenWarning = () => {
    this.setState({ openWarning: true })
  }

  handleCloseEditModal = () => {
    this.setState({ editModalOpen: false });
  };


  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const tableData =
      order === 'desc'
        ? this.props.tableData.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.props.tableData.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ tableData, order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({ selected: this.props.tableData.map((n, key) => key) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangeTitle = (title) => {
    let oldData = this.state.dataForEdit
    oldData.title = title
    this.setState({ dataForEdit: oldData })
  }

  handleChangeCaseNumber = (caseNumber) => {
    let oldData = this.state.dataForEdit
    oldData.caseNumber = caseNumber
    this.setState({ dataForEdit: oldData })
  }

  handleChangeLocation = (location) => {
    let oldData = this.state.dataForEdit
    oldData.location = location
    this.setState({ dataForEdit: oldData })
  }

  handleChangeMembers = (members) => {
    let oldData = this.state.dataForEdit
    oldData.members = members
    this.setState({ dataForEdit: oldData })
  }

  handleChangeSummary = (summary) => {
    let oldData = this.state.dataForEdit
    oldData.summary = summary
    this.setState({ dataForEdit: oldData })
  }

  handleChangeDate = (date) => {
    let oldData = this.state.dataForEdit
    oldData.date = date
    this.setState({ dataForEdit: oldData })
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  submitEditData = () => {
    this.props.editMeetingNote(this.state.dataEditIndex, this.state.dataForEdit)
    this.handleCloseEditModal()
    this.setState({ snackOpen: true })
  }

  handleCloseSnack = () => {
    this.setState({ snackOpen: false });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes, tableHead, tableData, tableHeaderColor } = this.props;
    const { order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);
    return (
      <div className={classes.tableResponsive}>
        <EnhancedTableToolbar
          numSelected={this.state.selected.length}
          handleClickEditModalOpen={this.handleClickEditModalOpen}
          handleClickDelete={this.handleOpenWarning}
          editEntry={this.editEntry}
        />
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <EnhancedTableHead
              numSelected={this.state.selected.length}
              order={this.state.order}
              orderBy={this.state.orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              tableHead={tableHead}
              rowCount={tableData.length}
              handle

            />
          ) : null}
          <TableBody>
            {tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((prop, key) => {
              const isSelected = this.isSelected(key);
              return (
                <TableRow key={key}>
                  <TableCell padding="checkbox">
                    <Checkbox checked={isSelected} onClick={event => this.handleClick(event, key)} />
                  </TableCell>
                  {prop.map((prop, key) => {
                    return (
                      <TableCell padding='none' className={classes.tableCell} key={key}>
                        {prop}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                    <Tooltip title="Edit">
                      <IconButton aria-label="Edit" style={{ display: 'inline' }} onClick={event => this.handleClickEditModalOpen(event, key)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={6}
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                  'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                  'aria-label': 'Next Page',
                }}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}

EnhancedTable.defaultProps = {
  tableHeaderColor: "gray"
};

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(EnhancedTable);
