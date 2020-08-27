import * as React from 'react';
import  {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import QuestionScreen from './screens/QuestionScreen';
import ResultScreen from './screens/ResultScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';



export default class App extends React.Component{
    render(){
        return(
           

<AppContainer/>
    

            
            
        )
    }
}

const SwitchNavigator = createSwitchNavigator({
    Splash: {screen : SplashScreen},
    Home : {screen:HomeScreen},
    Question : {screen:QuestionScreen},
    Result : {screen:ResultScreen}
})
const AppContainer = createAppContainer(SwitchNavigator)


const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    }
})

