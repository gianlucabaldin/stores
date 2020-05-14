import React, { useState } from "react";

import { Button, makeStyles, Grid, Paper, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import items from "../data/items.json";
import { useEffect } from "react";
import { Product } from "./Product";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
  },
});

const loadItems = () => {
  return [...items];
};

export const ProductFinder = () => {
  const [items, setItems] = useState(loadItems());
  const classes = useStyles();

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

      {items.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </Grid>
  );
};
