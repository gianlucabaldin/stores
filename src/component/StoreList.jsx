import React, { useState } from "react";

import { makeStyles, Grid, Typography } from "@material-ui/core";
// import stores from "../data/stores.json";
import { Store } from "./Store";
import { ConfirmDialog } from "./ConfirmDialog";
import { useLocation } from "react-router-dom";
import { loadStores, getCountItems } from "../utils/storeUtils";

const useStyles = makeStyles({
  results: {
    marginTop: 50,
    marginBottom: 10,
  },
});

export const StoreList = () => {
  const classes = useStyles();
  const { productId, productName } = useLocation().state;
  const [modalInfo, setModalInfo] = useState({ visible: false });
  const stores = loadStores(productId);

  const onStoreClick = (storeId, storeName) => {
    setModalInfo({
      visible: true,
      product: productName,
      store: storeName,
      count: getCountItems(productId, storeId),
      handleClose,
    });
  };

  const handleClose = () => {
    setModalInfo(false);
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
          {stores.map((item) => (
            <Store key={item.id} {...item} onClick={onStoreClick} />
          ))}
        </Grid>
      </Grid>
      <ConfirmDialog {...modalInfo} />
    </>
  );
};
