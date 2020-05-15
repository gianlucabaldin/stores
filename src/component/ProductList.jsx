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
import { ConfirmDialog } from "./ConfirmDialog";

const useStyles = makeStyles({
  root: {
    height: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid lightgrey",
  },
  results: {
    marginTop: 50,
    marginBottom: 10,
  },
  buttonSearch: {
    backgroundColor: "#F5A623",
    color: "white",
    margin: "10px 20px",
  },
  input: {
    flexGrow: 1,
  },
});

/**
 * Load the local JSON "items" and sort it alphabetically per "name" field
 */
const loadItems = () => {
  const products = [...items];
  return products.sort((a, b) =>
    // uppercase to ignore case
    a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
  );
};

export const ProductList = () => {
  const classes = useStyles();

  const [items, setItems] = useState(loadItems());

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
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
            <Typography
              component="div"
              variant="h6"
              className={classes.results}
            >
              Risultati:
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            {items.map((item) => (
              <Product key={item.id} {...item} />
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* <ConfirmDialog open={modaleVisible} /> */}
    </>
  );
};
