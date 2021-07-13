import { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputPhone from './Appbar/InputPhone';
import SelectStatus from './Appbar/SelectStatus';
import ButtonSubmit from './Appbar/ButtonSubmit';
import ButtonFind from './Appbar/ButtonFind';
import { sendCalltoServer } from '../../redux/slices/callsSlice';
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ButtonAppBar() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const valuesOfFields = Object.fromEntries(
      new FormData(formRef.current).entries()
    );
    if (Object.values(valuesOfFields).every((values) => values.trim())) {
      dispatch(sendCalltoServer(valuesOfFields));
      formRef.current.reset();
    }
  };

  const classes = useStyles();
  return (
    <AppBar position="relative" color="inherit" className={classes.root}>
      <Toolbar>
        <form ref={formRef} onSubmit={submitForm} className={classes.root}>
          <InputPhone />
          <SelectStatus />
          <ButtonSubmit />
          &nbsp;
        </form>
        <ButtonFind />
      </Toolbar>
    </AppBar>
  );
}
