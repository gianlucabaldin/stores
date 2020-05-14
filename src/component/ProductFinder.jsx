import React, { useState } from "react";

import {
  Button,
  makeStyles,
  Grid,
  Paper,
  InputBase,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import items from "../data/items.json";
import { Product } from "./Product";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    height: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid lightgrey",
  },
  title: {
    fontSize: 14,
  },
  searchBar: {
    marginTop: 50,
    marginBottom: 10,
  },
});

const loadItems = () => {
  return [...items];
};

export const ProductFinder = () => {
  const [items, setItems] = useState(loadItems());
  const classes = useStyles();

  // const onSubmit = (e) => {
  //   console.log("err = " + JSON.parse(e));
  // };

  return (
    <Grid container>
      <Grid item>
        <Paper component="form" className={classes.root}>
          <SearchIcon style={{ padding: 10 }} />
          <InputBase
            className={classes.input}
            placeholder="Di cosa hai bisogno oggi?"
          />
          <Button size="small" style={{ padding: 10 }}>
            Cerca
          </Button>
        </Paper>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography
            component="div"
            variant="h6"
            className={classes.searchBar}
          >
            Risultati:
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          {items.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
