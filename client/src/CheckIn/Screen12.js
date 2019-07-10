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
    this.language = props.language;
    this.text1 = "Thank you very much for taking the time and using the self check-in terminal!";
    this.text2 = <div>Your registration number is:</div>;
    this.button = "Finish registration now"
    if (this.language == "DE") {
      this.text1 = "Vielen Dank, dass Sie sich die Zeit genommen haben und sich mit dem Self Check-In Terminal angemeldet haben!"
      this.text2 = <div>Ihre Registrierungsnummer lautet:</div>
      this.button = "Registrierung abschließen"
    } else if (this.language == "TR") {
      this.text1 = "Kayit islemi basariyla gerceklesti, zaman ayirdiginiz icin tesekkur ederiz."
      this.text2 = <div>Kayit numaraniz</div>
      this.button = "Simdi sonlandir"
    } else if (this.language == "AL") {
      this.text1 = "Faleminderit per kohen qe moret per te perdorur systemin tone te regjistrimit!"
      this.text2 = <div>Numri juaj I pritjes eshte:</div>
      this.button = "Mbaroni ketu regjistrimin tuaj"
    }
  }



  //   const classes = useStyles();
  render() {

    return (
      <Container>
        <Grid container className={this.classes.container}>
          <Grid item className={this.classes.item}>
            <Typography variant="h3" color="black">
              {this.text1}
            </Typography>
          </Grid>
	  <Grid item className={this.classes.item}>
            <Typography variant="h3" color="black">
            {this.text2}
            </Typography>
            <Typography variant="h1" color="black">
            <div id="ticketNumber">{this.state.number}</div>
            <Button id="finish" onClick={this.props.storeTicketNumber} value={this.state.number}>{this.button}</Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default withStyles(styles)(Screen11);
