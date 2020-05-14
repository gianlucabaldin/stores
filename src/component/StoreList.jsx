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
import stores from "../data/stores.json";
import { Store } from "./Store";

const useStyles = makeStyles({
  results: {
    marginTop: 50,
    marginBottom: 10,
  },
});

const loadStores = () => {
  return [...stores];
};

export const StoreList = () => {
  const [items, setItems] = useState(loadStores());
  const classes = useStyles();

  // const onSubmit = (e) => {
  //   console.log("err = " + JSON.parse(e));
  // };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography component="div" variant="h6" className={classes.results}>
            Risultati:
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          {items.map((item) => (
            <Store key={item.id} {...item} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};
