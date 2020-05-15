import React, { useState } from "react";

import { makeStyles, Grid, Typography } from "@material-ui/core";
import stores from "../data/stores.json";
import { Store } from "./Store";
import { ConfirmDialog } from "./ConfirmDialog";
import { useLocation } from "react-router-dom";

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
  const classes = useStyles();

  const productId = useLocation().state.productId || undefined;

  const [items, setItems] = useState(loadStores());
  const [modaleVisible, setModalVisibible] = useState(false);

  // const onSubmit = (e) => {
  //   console.log("err = " + JSON.parse(e));
  // };

  const onStoreClick = (e) => {
    debugger;
    setModalVisibible(true);
  };

  const handleClose = () => {
    debugger;
    setModalVisibible(false);
  };

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
            <Store key={item.id} {...item} onClick={onStoreClick} />
          ))}
        </Grid>
      </Grid>
      <ConfirmDialog visible={modaleVisible} handleClose={handleClose} />
    </>
  );
};
