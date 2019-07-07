import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
}));

export default function SimpleTable(props) {
  const classes = useStyles();

  console.log('In table');
  console.log(props.patients);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Firstname</TableCell>
            <TableCell align="left">Lastname</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Insurance card number</TableCell>
            <TableCell align="left">Date of birth</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Complaint</TableCell>
            <TableCell align="left">Level of pain</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.patients.map(row => (
            <TableRow key={row.data.insuranceCard}>
              <TableCell align="left">{row.data.firstName}</TableCell>
              <TableCell align="left">{row.data.lastName}</TableCell>
              <TableCell align="left">{row.data.address}</TableCell>
              <TableCell align="left">{row.data.insuranceCard}</TableCell>
              <TableCell align="left">{row.data.dateBirth}</TableCell>
              <TableCell align="left">{row.data.gender}</TableCell>
              <TableCell align="left">{row.data.complaint}</TableCell>
              <TableCell align="left">{row.data.painlevel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
