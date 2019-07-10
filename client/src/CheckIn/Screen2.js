import React from 'react';
import { withRouter } from 'react-router';
import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  Button
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';

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
    margin: 'auto',
    display: 'flex',
    'justify-content': 'center' /* center ul horizontally */
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

export default function Screen2(props) {
  const classes = useStyles();
  let language = props.language
  let text = "If you have any of the following, please press 'cancel' and go to the Check-In Desk.";
  let list = <ul>
          <li>Headache</li>
          <li>Chest Pain</li>
          <li>Difficulty with speech</li>
          <li>Shortness of breath</li>
          <li>Sudden weakness in arms or legs</li>
          <li>Severe Bleeding</li>
        </ul>
  let button1 = "Cancel"
  let button2 = "Continue"
  if (language == "DE") {
    console.log({language})
    text = "Falls Sie eine der folgenden Beschwerden haben, klicken Sie bitte auf 'Abbruch' und gehen Sie zur Patientenanmeldung.";
    list = <ul>
            <li>Kopfschmerzen</li>
            <li>Schmerzen in der Brust</li>
            <li>Artikualationsprobleme</li>
            <li>Atemnot</li>
            <li>Plötzlich auftretende Schwäche in Armen oder Beinen</li>
            <li>Starke Blutung</li>
          </ul>;
    button1 = "Abbruch";
    button2 = "Weiter";
  } else if (language == "TR") {
    console.log({language})
    text = "Asagidaki sikayetlerden herhangi birine sahipseniz, lutfen islemi 'iptal' edip resepsiyona gidiniz.";
    list = <ul>
            <li>Basagrisi</li>
            <li>Gogus Agrisi</li>
            <li>Konusma zorlugu</li>
            <li>Nefes alma zorlugu</li>
            <li>El, ayak uyusuklugu</li>
            <li>Kanama</li>
          </ul>;
    button1 = "Iptal";
    button2 = "Devam";
  } else if (language == "AL") {
    console.log({language})
    text = "Nese keni ndonje nga keto simptoma ju lutem shtypni 'anullo' dhe  shkoni ne zyren e recepsionit per tu regjistruar.";
    list = <ul>
          <li>Dhimbje Koke</li>
          <li>Dhimbje Kraharori</li>
          <li>Veshtiresi per te folur</li>
          <li>Probleme me frymemarjen</li>
          <li>Pandjeshmeri ne kembe ose duar</li>
          <li>Gjakderdhje te shumte</li>
        </ul>;
  button1 = "Anullo";
  button2 = "Vashdo";
}
  return (
    <Container>
      <Grid container className={classes.container}>
        {/* <Grid item className={classes.item}>
          <Typography variant="h1" color="black">
            Info
          </Typography>
        </Grid> */}
        <Grid item className={classes.item}>
          <Typography variant="h3" color="black">
            {text}
            
            <Box className={classes.Box1}>
              {list}
            </Box>
          </Typography>
        </Grid>
        <Grid item className={classes.item} sm={6}>
          <Box className={classes.Box2}>
            <Button
              variant="contained"
              color="primary"
              onClick={props.Back}
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
