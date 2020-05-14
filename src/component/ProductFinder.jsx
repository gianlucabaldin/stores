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
  },
  title: {
    fontSize: 14,
  },
  searchBar: {
    height: 80,
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
          <SearchIcon />
          <InputBase
            className={classes.input}
            placeholder="Di cosa hai bisogno oggi?"
          />
          <Button size="small">Cerca</Button>
        </Paper>
      </Grid>
      <Grid container className={classes.searchBar}>
        <Grid item>
          <Typography variant="div">Risultati:</Typography>
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
