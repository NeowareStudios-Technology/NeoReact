// ======================================
//	NeoPakApp
//  ZipSign.jsx
//  Copyright (c) 2019 NeoWare, Inc. All rights reserved.
// ======================================
// jshint esversion: 6 

import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// ====================================
//  ZipSign
// ====================================

class ZipSign extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10} lg={8}>
          <Card>
            <form className={classes.form}>
              <CardHeader color="primary" className={classes.cardHeader}>
                <h4>Create Signed Zip File</h4>
              </CardHeader>
              <CardBody>
                <TextField
                  // className={styles.textField}
                  className={{
                    marginRight: 10,
                  }}
                  id="filename1"
                  label="TextField"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <Button simple color="primary" size="lg">
                  Get started
                </Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
    );
  }
}

// ====================================
//  Styles
// ====================================

const Styles = theme => ({
  container: {
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#000000"
  },
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
});

export default withStyles(Styles)(ZipSign);
