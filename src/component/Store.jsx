import React from "react";
import PropTypes from "prop-types";

import { Button, Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
    border: "1px solid lightgrey",
    boxShadow: "none",
    padding: "10px 20px",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#7ED321",
    color: "white",
  },
  distanceBox: {
    minWidth: 150,
  },
});

export const Store = ({ id, name, distance, onClick }) => {
  const classes = useStyles();
  const handleClick = () => onClick(id, name);

  return (
    <Grid container className={classes.root}>
      <Grid item md={5} xs={4}>
        <Typography className={classes.title} gutterBottom>
          {name}
        </Typography>
      </Grid>
      <Grid item md={5} xs={4}>
        {/* <Box className={classes.distanceBox}> */}
        <Typography component="span" variant="body2" color="textSecondary">
          Distanza:{" "}
        </Typography>
        <Typography component="span" className={classes.title} gutterBottom>
          {distance} km
        </Typography>
      </Grid>
      <Grid item md={2} xs={4} style={{ textAlign: "right" }}>
        <Button
          size="medium"
          variant="contained"
          className={classes.button}
          onClick={handleClick}
        >
          Seleziona
        </Button>
      </Grid>
    </Grid>
  );
};

Store.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  distance: PropTypes.number,
  onClick: PropTypes.func,
};
