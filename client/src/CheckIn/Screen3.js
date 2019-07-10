//Screen3 is gonna be added for scanning the insurance card.
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
    'text-align': 'left',
    'border-radius': '5px',
    'margin-top': '30px'
  },
  Button: {
    fontSize: '45px'
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
  }
}));

export default function Screen3(props) {
  const classes = useStyles();
  let language = props.language;
  let text = "Do you have your insurance card?";
  let button1 = "Yes, scan";
  let button2 = "No, manual input";
  if (language == "DE") {
    text = "Haben Sie Ihre Krankenversichertenkarte dabei?";
    button1 = "Ja, scannen";
    button2 = "Nein, manuelle Eingabe"
  } else if (language == "TR") {
    text = "";
    button1 = "";
    button2 = ""
  } else if (language == "AL") {
    text = "";
    button1 = "";
    button2 = ""
  }
  return (
    <Container>
      <Grid container className={classes.container}>
        <Grid item className={classes.item}>
          <Typography variant="h3" color="black" align="center">
            {text}
          </Typography>
        </Grid>

        <Grid item className={classes.item} sm={6}>
          <Box className={classes.Box2}>
            <Button
              variant="contained"
              color="primary"
              onClick={props.Next}
              className={classes.Button}
            >
              {button1}
            </Button>
          </Box>
        </Grid>
        <Grid item className={classes.item} sm={6}>
          <Box className={classes.Box3}>
            <Button
              variant="contained"
              color="primary"
              onClick={props.Next}
              className={classes.Button}
            >
              {button2}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
