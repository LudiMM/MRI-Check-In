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

class Screen10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      layoutName: 'default'
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleShift = this.handleShift.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.classes = props.classes;
  }
  //   const classes = useStyles();

  onChange = input => {
    this.setState({
      input: input
    });
    console.log('Input changed', input);
  };

  onKeyPress = button => {
    console.log('Button pressed', button);

    if (button === '{enter}') {
      this.props.Next();
    }

    if (button === '{shift}' || button === '{lock}') this.handleShift();
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === 'default' ? 'shift' : 'default'
    });
  };

  onChangeInput = event => {
    let input = event.target.value;
    this.setState(
      {
        input: input
      },
      () => {
        this.keyboardRef.keyboard.setInput(input);
      }
    );
  };

  render() {
    return (
      <Container>
        <Grid container className={this.classes.container}>
          <Grid item className={this.classes.item}>
            <Typography variant="h3" color="black">
              Choose your level of pain?
            </Typography>
          </Grid>
          <Grid item className={this.classes.item}>
            <Button onClick={this.props.storePainLevel} value={1}>
              1
            </Button>
            <Button onClick={this.props.storePainLevel} value={2}>
              2
            </Button>
            <Button onClick={this.props.storePainLevel} value={3}>
              3
            </Button>
            <Button onClick={this.props.storePainLevel} value={4}>
              4
            </Button>
            <Button onClick={this.props.storePainLevel} value={5}>
              5
            </Button>
            <Button onClick={this.props.storePainLevel} value={6}>
              6
            </Button>
            <Button onClick={this.props.storePainLevel} value={7}>
              7
            </Button>
            <Button onClick={this.props.storePainLevel} value={8}>
              8
            </Button>
            <Button onClick={this.props.storePainLevel} value={9}>
              9
            </Button>
            <Button onClick={this.props.storePainLevel} value={10}>
              10
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(Screen10);
