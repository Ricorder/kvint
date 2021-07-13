import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from "react-redux";
import Call from './Call';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export default function Tables() {
  const calls = useSelector((state) => state.calls);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>Call Date</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {calls?.length ? (
            calls.map((call, index) => (
              <Call
                index={index + 1}
                key={call._id}
                phone={call.phone}
                id={call._id}
                date={call.createdAt}
                status={call.status}
              />
            ))
          ) : (
            <p>There's nothing calls</p>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
