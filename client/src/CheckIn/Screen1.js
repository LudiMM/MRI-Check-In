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

  button: {
    fontSize: '45px'
  },
  button_lang: {
    fontSize: '25px'
  }, 
  Box3: {
    position: "absolute",
    top: 15,
    left: 15
  }
}));

export default function Screen1(props) {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.container}>
        <Grid item className={classes.item}>
          <Typography variant="h1" color="black">
            Welcome to MRI!
          </Typography>
        </Grid>
        <Grid item className={classes.item}>
          <Typography variant="h3" color="black">
            This is the start of your checkin in our emergency department.
          </Typography>
        </Grid>
        <Grid item className={classes.item}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={props.Next}
            size="large"
          >
            Check in now
          </Button>
          <Box className={classes.Box3}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={props.storeLanguage} value={"EN"}
            >
              EN
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={props.storeLanguage} value={"DE"}
            >
              DE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
