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
  let language = props.language
  let header = "Welcome to MRI!"
  let text = "This is the start of your check-in in our emergency department."
  let button = "Check-In now"
  if (language == "DE") {
    header = "Willkommen am MRI!";
    text = "Registrieren Sie sich hier in unserer Notaufnahme.";
    button = "Jetzt anmelden";
  } else if (language == "TR") {
    header = "MRI`ya Hosgeldiniz!"
    text = "Acil servis check-ininize buradan baslayin."
    button = "Simdi basla"
  } else if (language == "AL") {
    header = "Miresevini ne MRI!"
    text = "Ky eshte fillimi i regjistrimit ne sistemin tone te emergjences."
    button = "Regjistrohu tani"
  }

  return (
    <Container>
      <Grid container className={classes.container}>
        <Grid item className={classes.item}>
          <Typography variant="h1" color="black">
            {header}
          </Typography>
        </Grid>
        <Grid item className={classes.item}>
          <Typography variant="h3" color="black">
            {text}
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
            {button}
          </Button>
          <Box className={classes.Box3}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={props.storeLanguage } value="EN"
            >
              EN
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={props.storeLanguage } value="DE"
            >
              DE
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={props.storeLanguage } value="TR"
            >
              TR
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={props.storeLanguage } value="AL"
            >
              AL
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
