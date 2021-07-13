import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Status from './Status';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function Call({ index, phone, id, date, status }) {
  return (
    <StyledTableRow>
      <StyledTableCell>{index}</StyledTableCell>
      <StyledTableCell>{phone}</StyledTableCell>
      <StyledTableCell>{date}</StyledTableCell>
      <StyledTableCell><Status id={id} detectedStatus={status}/></StyledTableCell>
    </StyledTableRow>
  );
}
