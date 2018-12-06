/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigatorIOS, Text, TouchableHighlight, View ,AppRegistry,StyleSheet,AlertIOS} from 'react-native';

class MyView extends Component {

    _handleBackPress() {
        this.props.navigator.pop();
    }

    _handleNextPress(nextRoute) {
        this.props.navigator.push(nextRoute);
    }

    render() {
        const nextRoute = {
            component: MyScene,
            title: 'Bar That',
            passProps: { myProp: 'bar' }
        };
        return(
            <TouchableHighlight onPress={() => this._handleNextPress(nextRoute)}>
                <Text style={{marginTop: 200, alignSelf: 'center'}}>
                    See you on the other nav {this.props.myProp}!
                </Text>
            </TouchableHighlight>
        );
    }

}
const styles = StyleSheet.create({
    content:{
        paddingTop:100
    }

})

export default class MyApp extends Component {
    _handleNextButtonPress(){
        // AlertIOS.alert("Be A Lert");
        this.refs.nav.push({
            component: MyScene,
            title: 'Login'
        });
    }

    render() {

        return (
            <NavigatorIOS
                ref='nav'
                initialRoute={{
                    component: MyView,
                    title: 'Foo This',
                    passProps: { myProp: 'foo' },
                    backgroundColor:'#00ff00',
                    rightButtonTitle: 'Add',
                    onRightButtonPress: () => this._handleNextButtonPress(),
                }}
                style={{flex: 1}}
            />
        );
    }
}

class MyScene extends Component {
    _onForward = () => {
        this.props.navigator.push({
            title: 'Scene123',
            component: MyScene,
        });
    }

    render() {
        return (
            <View style={styles.content}>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this._onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

AppRegistry.registerComponent('MyApp', () => MyApp);
/*

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
          <Button
              onPress={onPressLearnMore}
              title="新按钮"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
      </View>
    );
  }
}

function onPressLearnMore()
{
    alert("Hello World!");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


*/