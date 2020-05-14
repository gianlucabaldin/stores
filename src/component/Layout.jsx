import React from "react";

import { Container, Grid } from "@material-ui/core";
import { Header } from "./Header";

export const Layout = (props) => (
  <Container>
    <Header />
    <Grid container>
      <Grid item xs={12}>
        {props.children}
      </Grid>
    </Grid>
  </Container>
);
