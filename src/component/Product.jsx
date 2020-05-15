import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
    border: "1px solid lightgrey",
    boxShadow: "none",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#7ED321",
    color: "white",
  },
});

export const Product = ({ id, name, description, handleClick }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions style={{ padding: 20 }}>
          <Link
            to={{
              pathname: "/store-list",
              state: {
                productId: id,
              },
            }}
          >
            <Button
              size="medium"
              variant="contained"
              className={classes.button}
              // onClick={handleClick}
            >
              Seleziona
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
