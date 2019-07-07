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
  let text;

  if (props.language == "EN") {
    console.log("EN")
    text = <li>If you have... </li>
  } else {
    text = <li>Falls du... </li>
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
            text
            <Box className={classes.Box1}>
              <ul>
                <li>{text}</li>
                <li>Chest Pain</li>
                <li>Difficulty with speech</li>
                <li>Shortness of breath</li>
                <li>Sudden weakness in arms or legs</li>
                <li>Severe Bleeding</li>
              </ul>
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
              Cancel
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
              Continue
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
