import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  title: {
    color: "blue",
    fontSize: "2rem",
  },
  field: {
    fontSize: "1.5rem",
    color: "grey",
  },
  content: {
    margin: "0 auto",
  },
  box: {
    textAlign: "left",
  },
  textBlack: {
    color: "black",
  },
  footer: {
    justifyContent: "center",
  },
});

export const ConfirmDialog = ({ visible, handleClose }) => {
  const classes = useStyles();
  return (
    <Dialog
      open={visible}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.root}
      fullWidth={true}
    >
      <DialogTitle id="alert-dialog-title" className={classes.title}>
        Azione Confermata
      </DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText
          id="alert-dialog-description"
          style={{ textAlign: "center" }}
        >
          <Box component="div" className={classes.box}>
            <Typography className={classes.field} color="">
              Prodotto:{" "}
              <Box className={classes.textBlack} component="span">
                xxx
              </Box>
            </Typography>
            <Typography className={classes.field}>
              Magazzino:{" "}
              <Box className={classes.textBlack} component="span">
                yyy
              </Box>
            </Typography>
            <Typography className={classes.field}>
              Articoli inviati:{" "}
              <Box className={classes.textBlack} component="span">
                zzz
              </Box>
            </Typography>
          </Box>
        </DialogContentText>
        <DialogActions className={classes.footer}>
          <Button size="medium" variant="outlined" onClick={handleClose}>
            Chiudi
          </Button>
        </DialogActions>
        {/* </DialogContentText> */}
      </DialogContent>
    </Dialog>
  );
};
