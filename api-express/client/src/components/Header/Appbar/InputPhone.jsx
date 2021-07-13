import TextField from "@material-ui/core/TextField";
import { FormControl } from '@material-ui/core';

export default function InputPhone() {
  return (
    <FormControl>
      <TextField
        name="phone"
        type="text"
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
      />
    </FormControl>
  );
}
