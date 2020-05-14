import React from "react";

import { Typography, makeStyles, Grid, Box } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    color: "blue",
    lineHeight: "50px",
  },
  subTitle: {
    fontSize: 40,
    lineHeight: "50px",
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item>
          <Box className={classes.title}>GestioneMagazzini</Box>
          <Box className={classes.subTitle}>
            Gestione ristoccaggio magazzino
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
