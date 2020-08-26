import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ResultScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
<Text style = {{fontSize: 40 , color: 'white'}}>Score : {this.props.navigation.getParam('score')}/10</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }
})