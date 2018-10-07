import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Alert } from "react-native";
import LogInScreen from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: "",
    isSubmitting: false
  };
  static propTypes = {
    login: PropTypes.func.isRequired,
    fbLogin: PropTypes.func.isRequired
  }
  render() {
    return (
      <LogInScreen
        {...this.state}
        changeUserName={this._changeUserName}
        changePassword={this._changePassword}
        submit={this._submit}
        handleFBLogin={this._handleFBLogin}
      />
    );
  }

  _changeUserName = text => {
    this.setState({
      username: text
    });
  };

  _changePassword = text => {
    this.setState({
      password: text
    });
  };

  _submit = async() => {
    const { username, password, isSubmitting } = this.state;
    const { login } = this.props;
    if(!isSubmitting) {
      if(username && password) {
        this.setState({
          isSubmitting: true
        });
        const loginResult = await login(username, password);
        if (!loginResult) {
          Alert.alert('Something went wrong, try again.');
          this.setState({
            isSubmitting: false
          })
        }
      } else {
        Alert.alert("All fields are require.");
      }
    }
  };

  _handleFBLogin = async() => {
    const { fbLogin } = this.props;
    this.setState({ isSubmitting: true });
    const fbResult = await fbLogin();
    if (!fbResult) {
      Alert.alert("Something went wrong, try again.");
      this.setState({ isSubmitting: false });
    }
  }
}

export default Container;
