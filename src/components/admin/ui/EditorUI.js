import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop:"2.5rem"
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function EditorUI() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
        <Typography variant="h4" align="center" style={{fontWeight:700}}>Editors List</Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell ></TableCell>
            <TableCell>Editor Name</TableCell>
            <TableCell >Editor Email</TableCell>
            <TableCell ></TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
            
              </TableCell>
              <TableCell >{row.calories}</TableCell>
              <TableCell >{row.fat}</TableCell>
              <TableCell >{row.fat}</TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}