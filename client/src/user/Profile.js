import React, { Component } from 'react';
import Title from '../layout/Title.js';
import axios from 'axios';

class Profile extends Component {
    constructor(props){
    super(props);
        this.state = {
          data: [],
          dataState: false
        }
  }

  componentDidMount(){
    let userId = this.props.user.id;
    let base = this;

    axios({
      method: 'get',
      url: '/profile/profile',
      params: {
        user: userId
      }
    }).then((result) => {
      console.log('result.data', result.data);
      let userData = [];
      let rawData = result.data;
      rawData.forEach(function(data){userData.push(data)});
      base.setState({
        data: userData,
        dataState: true
      })
    }).catch((error) => {
      console.log("An error occured while fetching data from databse", error.response.data);
    })
  }

  render(){
    // LOGGED IN
    const dataState = this.state.dataState;
    console.log('state of the data in render function', this.state.data);
    console.log('typeof data in render funciton', typeof this.state.data);
    console.log('check to see if data is an array', Array.isArray(this.state.data));
    // Logged in with data loaded
    if(this.props.user && this.props.user.name){
      return (
        <div>
          <Title text="Profile" style="Profile__title" />
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <h4>Your email is {this.props.user.email}</h4>
        </div>
      );
    } 
    // NOT LOGGED IN
    else {
      return (
        <div>
          <Title text="Profile" style="Profile__title" />
          <p>This is a profile page. You need to be logged in to view it.</p>
        </div>
      );
    }
  }
}

export default Profile;
