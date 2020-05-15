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
 * Load the local JSON "products" and sort it alphabetically per "name" field
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

  const [products, setProducts] = useState(loadItems());

  const filterProducts = (event) => {
    const text = event.currentTarget.value;
    const initialList = loadItems();
    // if input is empty string, it means the user has previously inserted a filter and then delete it
    if (!text || text === "") {
      return setProducts(initialList);
    }
    const filtered = initialList.filter((product) => {
      debugger;
      return product.name.toUpperCase().includes(text.toUpperCase());
    });
    setProducts(filtered);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Paper component="form" className={classes.root}>
            <SearchIcon style={{ padding: 10 }} />
            <InputBase
              className={classes.input}
              placeholder="Di cosa hai bisogno oggi?"
              onChange={filterProducts}
              // onKeyPress={filterProducts}
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
            {products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* <ConfirmDialog open={modaleVisible} /> */}
    </>
  );
};
