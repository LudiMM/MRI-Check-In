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

class Screen8 extends React.Component {
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
      this.props.storeDateBirth(this.state.input);
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
      <React.Fragment>
        <Container>
          <Grid container className={this.classes.container}>
            <Grid item className={this.classes.item}>
              <Typography variant="h3" color="black">
                Please enter your date of birth:
              </Typography>
            </Grid>
            <Grid item className={this.classes.item}>
              <Input
                value={this.state.input}
                placeholder={'Tap on the virtual keyboard to start'}
                onChange={e => this.onChangeInput(e)}
                style={{ width: '250px' }}
              />
            </Grid>
          </Grid>
        </Container>
        {/* <Box container className={this.classes.container}> */}
        <Box
          item
          className={this.classes.item}
          style={{ position: 'fixed', bottom: '0' }}
        >
          <Keyboard
            ref={r => (this.keyboardRef = r)}
            layoutName={this.state.layoutName}
            onChange={input => this.onChange(input)}
            onKeyPress={button => this.onKeyPress(button)}
          />
        </Box>
        {/* </Grid> */}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Screen8);
