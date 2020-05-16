import React from "react";

import { Button, Card, Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
    height: 50,
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
    <div>
      <Card className={classes.root}>
        <Typography className={classes.title} gutterBottom>
          {name}
        </Typography>
        <Box className={classes.distanceBox}>
          <Typography component="span" variant="body2" color="textSecondary">
            Distanza:{" "}
          </Typography>
          <Typography component="span" className={classes.title} gutterBottom>
            {distance} km
          </Typography>
        </Box>
        <Button
          size="medium"
          variant="contained"
          className={classes.button}
          onClick={handleClick}
        >
          Seleziona
        </Button>
      </Card>
    </div>
  );
};
