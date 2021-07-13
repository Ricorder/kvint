import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectStatus() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    status: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Status</InputLabel>
        <Select
          native
          value={state.status}
          onChange={handleChange}
          label="Status"
          inputProps={{
            name: "status",
          }}
        >
          <option aria-label="None" value="" />
          <option value={'Ok'}>Ok</option>
          <option value={'Progress'}>Progress</option>
          <option value={'Error'}>Error</option>
        </Select>
      </FormControl>
    </div>
  );
}
