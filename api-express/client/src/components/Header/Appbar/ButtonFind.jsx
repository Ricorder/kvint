import { Icon } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { findndCalltoServer } from '../../../redux/slices/callsSlice';

export default function ButtonFind() {

  const dispatch = useDispatch();

  const findHandler = async () => {
    dispatch(findndCalltoServer());
  };

  return (
    <div>
      <Button
        type="click"
        variant="contained"
        color="secondary"
        size="large"
        endIcon={<Icon>send</Icon>}
        onClick={() => findHandler()}
      >
        Find all Calls
      </Button>
    </div>
  );
}
