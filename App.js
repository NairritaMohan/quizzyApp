
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{createAppContainer,createSwitchNavigator} from 'react-navigation';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import QuestionScreen from './screens/QuestionScreen';
import ResultScreen from './screens/ResultScreen';


export default class App extends React.Component{
  render(){
    return(
      
<AppContainer/>
     
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
 Splash : {screen:SplashScreen},
  Home : {screen: HomeScreen},
  Question : {screen: QuestionScreen},
  Result :{screen: ResultScreen}
})

const AppContainer = createAppContainer(SwitchNavigator)

