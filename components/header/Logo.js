import Link from 'next/link';
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      border: 0,
    },
  },
}))(TableRow);
export default function Logo({ setIsMenuOpen }) {
  return (
    <StyledTableRow>
      <TableCell>
    <Link href="/">
      <a onClick={() => setIsMenuOpen(false)}>
        <img src="/img/Logo_GKJW.jpg" alt="website logo" width="70" height="70" className="logo" />
      </a>
    </Link> 
    </TableCell>
    <TableCell>
    <Typography gutterBottom className="Tittle">
        GKJW PROBOLINGGO
    </Typography>
    </TableCell>
    </StyledTableRow>
    
  )
}
