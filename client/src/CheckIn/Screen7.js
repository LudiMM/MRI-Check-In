import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3)
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1)
  },
  container: {
    alignItems: 'center',
    // background: 'white',
    border: 'black',
    'border-width': 'medium',
    'margin-top': '80px',
    background: 'rgba(255, 255, 255, 0.8)',
    'border-radius': '20px'
  },
  item: {
    // background: 'red',
    width: '100%',
    //background: 'white',
    'text-align': 'center',
    'border-radius': '5px',
    'margin-top': '30px'
  },
  Box1: {
    'text-align': 'left',
    margin: 'auto'
  },
  Box2: {
    'text-align': 'left',
    margin: 'auto'
  },
  Box3: {
    'text-align': 'right',
    margin: 'auto'
  },
  Button: {
    fontSize: '45px'
  }
}));

export default function Screen7(props) {
  const classes = useStyles();
  let language = props.language
  let text = "Please choose your gender:"
  let button1 = "male"
  let button2 = "female"
  let button3 = "Cancel"
  if (language == "DE") {
    text = "Bitte wählen Sie Ihr Geschlecht:"
    button1 = "männlich"
    button2 = "weiblich"
    button3 = "Abbruch"
  } else if (language == "TR") {
    text = "Cinsiyetinizi seciniz:"
    button1 = "erkek"
    button2 = "kadin"
    button3 = "Iptal"
  } else if (language == "AL") {
    text = "Zgjidhni gjinine tuaj:"
    button1 = "mashkull"
    button2 = "femer"
    button3 = "Anullo"
  }
  return (
    <Container>
      <Grid
        container
        className={classes.container}
        justify="center"
        spacing={3}
      >
        <Grid item className={classes.item}>
          <Typography variant="h3" color="black">
            {text}
            <Box className={classes.Box} />
          </Typography>
        </Grid>
        <Grid item sm={3} />
        <Grid item className={classes.item} sm={3} justify="center">
          <Box className={classes.Box2} justify="center">
            <Button
              variant="contained"
              color="primary"
              onClick={props.storeGender}
              className={classes.Button}
              value="male"
            >
              {button1}
            </Button>
          </Box>
        </Grid>
        <Grid item className={classes.item} sm={3} justify="center">
          <Box className={classes.Box3}>
            <Button
              variant="contained"
              color="primary"
              onClick={props.storeGender}
              className={classes.Button}
              value="female"
            >
              {button2}
            </Button>
          </Box>
        </Grid>
        <Grid item sm={3} />
        <Grid item className={classes.item} sm={6}>
          <Box className={classes.Box2}>
            <Button
              variant="contained"
              color="primary"
              onClick={props.storeGender}
              className={classes.Button}
            >
              {button3}
            </Button>
          </Box>
        </Grid>
        {/* <Grid item className={classes.item} sm={6}>
          <Box className={classes.Box3}>
            <Button
              variant="contained"
              color="primary"
              onClick={props.Next}
              className={classes.Button}
            >
              Continue
            </Button>
          </Box>
        </Grid> */}
      </Grid>
    </Container>
  );
}
