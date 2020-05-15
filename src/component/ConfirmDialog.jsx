import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    //   minWidth: 275,
    //   display: "flex",
    //   justifyContent: "space-between",
    //   marginBottom: 20,
    //   border: "1px solid lightgrey",
    //   boxShadow: "none",
  },
  field: {
    fontSize: 16,
    fontWeight: "bold",
    color: "sec",
  },
  value: {
    //   backgroundColor: "#7ED321",
    //   color: "white",
    fontSize: 16,
  },
});

export const ConfirmDialog = ({ visible, handleClose }) => {
  const classes = useStyles();
  return (
    <Dialog
      open={visible}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Azione Confermata</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography
            className={classes.field}
            color={"textSecondary"}
            gutterBottom
          >
            Azione Confermata
          </Typography>
          <Typography className={classes.field} gutterBottom>
            Prodotto
          </Typography>
          <Typography
            className={classes.field}
            color={"textSecondary"}
            gutterBottom
          >
            Magazzino
          </Typography>
          <Typography className={classes.value} gutterBottom>
            Articoli inviati
          </Typography>
          <Button
            size="medium"
            variant="contained"
            className={classes.button}
            onClick={handleClose}
          >
            Chiudi
          </Button>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Chiudi
        </Button>
      </DialogActions>
    </Dialog>
  );
};
