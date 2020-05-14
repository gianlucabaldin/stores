import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
  },
});

export const Product = ({ ide, name, description }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            variant="h4"
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Name: {name}
          </Typography>
          <Typography variant="body2" component="p">
            Desc: {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Seleziona</Button>
        </CardActions>
      </Card>
    </div>
  );
};
