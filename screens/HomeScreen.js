
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>

          
<TouchableOpacity style = {styles.button}
onPress = {()=>{
    this.props.navigation.navigate('Question')
}}
>
  <Text style = {styles.buttonText}>START QUIZ</Text>
</TouchableOpacity>
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
  },
  button:{
backgroundColor : 'grey',
paddingHorizontal :30,
paddingVertical : 10,
borderRadius :10


  },
  buttonText:{
color: 'black',
fontSize: 30,
fontWeight : 'bold'
  }
});
