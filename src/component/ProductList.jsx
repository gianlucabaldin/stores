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
    height: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid lightgrey",
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  searchBar: {
    display: "flex",
    flexGrow: 1,
  },
  results: {
    marginTop: 50,
    marginBottom: 10,
  },
  buttonSearch: {
    backgroundColor: "#F5A623",
    color: "white",
    margin: 10,
  },
  input: {
    flexGrow: 1,
  },
});

const loadItems = () => {
  return [...items];
};

export const ProductList = () => {
  const [items, setItems] = useState(loadItems());
  const classes = useStyles();

  // const onSubmit = (e) => {
  //   console.log("err = " + JSON.parse(e));
  // };

  return (
    <Grid container>
      <Grid item className={classes.searchBar}>
        <Paper component="form" className={classes.root}>
          <SearchIcon style={{ padding: 10 }} />
          <InputBase
            className={classes.input}
            placeholder="Di cosa hai bisogno oggi?"
          />
          <Button
            size="medium"
            variant="contained"
            className={classes.buttonSearch}
          >
            Cerca
          </Button>
        </Paper>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography component="div" variant="h6" className={classes.results}>
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
