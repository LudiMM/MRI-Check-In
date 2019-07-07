import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Grid, Box, Container } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { Header } from '../Layout';
// import AppContext from '../utils/AppContext';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import Screen6 from './Screen6';
import Screen7 from './Screen7';
import Screen8 from './Screen8';
import Screen9 from './Screen9';
import Screen10 from './Screen10';
import Screen11 from './Screen11';
import Screen12 from './Screen12';

const URL = 'http://localhost:9000/';

class CheckIn extends React.Component {
  //   static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      checkInProgress: 1,
      language: "EN"
    };

    this.handleCheckInProgress = this.handleCheckInProgress.bind(this);
    this.storeLanguage = this.storeLanguage.bind(this)
    this.handleCancel = this.handleCancel.bind(this);
    this.storeInsuranceCard = this.storeInsuranceCard.bind(this);
    this.storeFirstName = this.storeFirstName.bind(this);
    this.storeLastName = this.storeLastName.bind(this);
    this.storeDateBirth = this.storeDateBirth.bind(this);
    this.storeAddress = this.storeAddress.bind(this);
    this.storePainLevel = this.storePainLevel.bind(this);
    this.storeGender = this.storeGender.bind(this);
    this.storeComplaint = this.storeComplaint.bind(this);
    this.storeTicketNumber = this.storeTicketNumber.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
  }

  //   componentDidMount() {
  //     console.log(this.context);

  //     if (this.context.onBoardingStatus === false) {
  //       console.log('IN IF');
  //       this.props.history.push('/onboarding');
  //     }
  //   }

  //   showSettings(event) {
  //     event.preventDefault();
  //   }

  handleCheckInProgress() {
    console.log(this.state.checkInProgress);
    this.setState({ checkInProgress: this.state.checkInProgress + 1 });
  }

  handleCancel(e) {
    console.log(this.state.checkInProgress);
    this.setState({ checkInProgress: 1 });
    this.props.history.push('/');
  }

  storeLanguage(e){
    let input = e.currentTarget.value
    console.log(input)
    this.setState({language: input})
  }
  storeInsuranceCard(input) {
    console.log(input);
    this.setState({ insuranceCard: input });
  }

  storeFirstName(input) {
    console.log(input);
    this.setState({ firstName: input });
  }

  storeLastName(input) {
    console.log(input);
    this.setState({ lastName: input });
  }

  storeDateBirth(input) {
    console.log(input);
    this.setState({ dateBirth: input });
  }

  storeAddress(input) {
    console.log(input);
    this.setState({ address: input });
  }

  storeComplaint(input) {
    console.log(input);
    this.setState({ complaint: input });
  }

  async storeTicketNumber(e) {
    let input = e.currentTarget.value;
    await this.setState({ ticketNr: input})
    console.log("in store ticket Number")
    console.log(this.state)
    this.onSubmit();
  }

  storePainLevel(e) {
    let input = e.currentTarget.value;
    this.setState({ painlevel: input,
                    checkInProgress: 12 });
  }

  storeGender(e) {
    let input = e.currentTarget.value;
    console.log('Gender');
    console.log(input);
    this.setState({
      gender: input,
      checkInProgress: this.state.checkInProgress + 1
    });
  }

  onSubmit() {
    console.log('in OnSubmit');
    console.log(this.state);
    console.log(URL);
    let data = JSON.parse(JSON.stringify(this.state));
    delete data.checkInProgress;

    axios
      .post(URL + 'patient/create', {
        data: data
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ checkInProgress: 1 });
  }

  render() {
    let component;

    if (this.state.checkInProgress === 1) {
      component = (
        <Screen1 Back={this.handleCancel} Next={this.handleCheckInProgress} storeLanguage={this.storeLanguage} />
      );
    } else if (this.state.checkInProgress === 2) {
      component = (
        <Screen2 Back={this.handleCancel} Next={this.handleCheckInProgress} />
      );
    } else if (this.state.checkInProgress === 3) {
      component = (
        this.setState({ checkInProgress: this.state.checkInProgress + 1 })
      //  <Screen3 Back={this.handleCancel} Next={this.handleCheckInProgress} />
      );
    } else if (this.state.checkInProgress === 4) {
      component = (
        <Screen4
          storeInsuranceCard={this.storeInsuranceCard}
          Back={this.handleCancel}
          Next={this.handleCheckInProgress}
        />
      );
    } else if (this.state.checkInProgress === 5) {
      component = (
        <Screen5
          storeFirstName={this.storeFirstName}
          Back={this.handleCancel}
          Next={this.handleCheckInProgress}
        />
      );
    } else if (this.state.checkInProgress === 6) {
      component = (
        <Screen6
          storeLastName={this.storeLastName}
          Back={this.handleCancel}
          Next={this.handleCheckInProgress}
        />
      );
    } else if (this.state.checkInProgress === 7) {
      component = (
        <Screen7
          storeGender={this.storeGender}
          Back={this.handleCancel}
          Next={this.handleCheckInProgress}
        />
      );
    } else if (this.state.checkInProgress === 8) {
      component = (
        <Screen8
          storeDateBirth={this.storeDateBirth}
          Back={this.handleCancel}
          Next={this.handleCheckInProgress}
        />
      );
    } else if (this.state.checkInProgress === 9) {
      component = (
        <Screen9
          storeAddress={this.storeAddress}
          Back={this.handleCancel}
          Next={this.handleCheckInProgress}
        />
      );
    } else if (this.state.checkInProgress === 10) {
      component = (
        <Screen10
          storeComplaint={this.storeComplaint}
          Back={this.handleCancel}
          Next={this.handleCheckInProgress}
        />
      );
    } else if (this.state.checkInProgress === 11) {
      component = (
        <Screen11
          storePainLevel={this.storePainLevel}
          Back={this.handleCancel}
          Next={this.handleCheckInProgress}
        />
      );
    } else if (this.state.checkInProgress === 12) {
      component = (
        <Screen12 
          storeTicketNumber = {this.storeTicketNumber}
          Back={this.handleCancel} 
          Next={this.handleCheckInProgress} 
        />
      );
    }
    // } else if (this.state.componentType === 'type_of_emergency') {
    //   component = (
    //     <FormEmergencyType
    //       handleComponentType={this.handleComponentType}
    //       handleEmergencyType={this.handleEmergencyType}
    //       emergencyTypes={this.state}
    //       timerStart={this.timerStart}
    //       onSubmit={this.onSubmit}
    //     />
    //   );
    // }

    return (
      <React.Fragment>
        <Header title="MRI CHECKIN" />
        {/* <Container>{component}</Container> */}
        {component}
      </React.Fragment>
    );
  }
}

export default withRouter(CheckIn);
