import React from 'react';


import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  Button,
  Input
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

const styles = theme => ({
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
  }
});

class Screen11 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      layoutName: 'default',
      number: Math.floor(Math.random() * 100) + 1
    };
    
    this.classes = props.classes;
  }

  //   const classes = useStyles();
  render() {

    return (
      <Container>
        <Grid container className={this.classes.container}>
          <Grid item className={this.classes.item}>
            <Typography variant="h3" color="black">
              Thank you very much for taking the time and using the self check-in
              terminal!
            </Typography>
          </Grid>
          <Grid item className={this.classes.item}>
            <Typography variant="h3" color="black">
              Your registration number is:
            </Typography>
          </Grid>
	  <Grid item className={this.classes.item}>
            <Typography variant="h3" color="black">
            <div>Your ticket number is:</div>
            <div id="ticketNumber">{this.state.number}</div>
            <Button id="finish" onClick={this.props.storeTicketNumber} value={this.state.number}>Finish registration now</Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default withStyles(styles)(Screen11);
