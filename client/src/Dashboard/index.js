import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Grid, Box, Container, Button, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { Header } from '../Layout';
import SimpleTable from './SimpleTable';

const URL = 'http://localhost:9000/';

export default class Dashboard extends React.Component {
  //   static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      patients: new Array()
    };
    this.resetTable = this.resetTable.bind(this);
  }

  componentDidMount() {
    console.log('Component did mount');
    axios
      .get(URL + 'patient/all/')
      .then(async response => {
        console.log(response);
        // this.checkin = response.data.data;
        console.log('test');
        await this.setState({ patients: response.data });
        console.log(this.state.patients);
      })
      .catch(async error => {
        console.log('error in comp did mount');
        console.log(error);
        await this.setState({
          patients: new Array()
        });
      });
  }

  resetTable() {
    console.log(this.state.patients);
    axios
      .get(URL + 'patient/delete/')
      .then(async response => {
        console.log(response);
        // this.checkin = response.data.data;
        this.setState({ patients: new Array() });
        console.log('Table was reset');
      })
      .catch(function(error) {
        console.log('error in delete');
        console.log(error);
        this.setState({ patients: new Array() });
      });
  }

  render() {
    // let table;
    // if (this.state.patients) {
    //   table = <SimpleTable patients={this.state.patients} />;
    // } else {
    //   table = <LoginButton onClick={this.handleLoginClick} />;
    // }

    return (
      <Typography>
        <Header title="MRI CHECKIN" />
        <Container>
          <Typography variant="h3" color="black" align="center">
            Patients
          </Typography>
          <SimpleTable patients={this.state.patients} />
          <br />
          <Grid container>
            <Grid item md={11} />
            <Grid item md={1}>
              <Button onClick={this.resetTable} variant="contained">
                Reset table
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Typography>
    );
  }
}
