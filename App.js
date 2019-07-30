/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    dataLength: 0,
    calledCount: 0,
    dataLengthPromise: 0,
    calledCountPromise: 0
  };
  callNativeMethod = () => {
    NativeModules.TestData.getData(
      {},
      data => {
        this.setState({
          dataLength: data ? data.length : 0,
          calledCount: this.state.calledCount + 1
        });
      },
      error => {
        console.log(error);
      }
    );
  };

  callNativeMethodPromise = () => {
    NativeModules.TestData.getDataPromise().then(result => {
      this.setState({
        dataLengthPromise: result
          ? result.length
          : this.state.dataLengthPromise,
        calledCountPromise: this.state.calledCountPromise + 1
      });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{JSON.stringify(this.state)}</Text>
        <TouchableOpacity onPress={this.callNativeMethod}>
          <Text style={styles.welcome}>Get Data</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.callNativeMethodPromise}>
          <Text style={styles.welcome}>Get Data Promise</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
