import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/slices/callsSlice';

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Status({ id, detectedStatus}) {
  const classes = useStyles();
	const dispatch = useDispatch();
  const [status, setStatus] = React.useState(detectedStatus);
  const handleChange = (event) => {
    setStatus(event.target.value);
		dispatch(changeStatus(id, event.target.value));
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Status</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={status}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Ok'}>Ok</MenuItem>
          <MenuItem value={'Progress'}>Progress</MenuItem>
          <MenuItem value={'Error'}>Error</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
