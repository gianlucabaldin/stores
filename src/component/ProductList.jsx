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
import { Product } from "./Product";
import { loadItems } from "../utils/productUtils";
import { filterProducts } from "../utils/productUtils";
import { Layout } from "./Layout";

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

const ProductList = () => {
  const classes = useStyles();

  const [products, setProducts] = useState(loadItems());

  const handleChange = (event) => {
    const text = event.currentTarget.value;
    setProducts(filterProducts(text));
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
              onChange={handleChange}
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
            {products && products.length > 0 ? (
              products.map((product) => (
                <Product key={product.id} {...product} />
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">
                Nessun risultato trovato
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default () => (
  <Layout>
    <ProductList />
  </Layout>
);
