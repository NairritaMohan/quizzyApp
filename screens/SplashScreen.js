import * as React from 'react';
import {View,Text,StyleSheet,ImageBackground,Image} from 'react-native'

var bg = require('../assets/quizbg.jpeg')
var logo = require('../assets/logofinal.png')

export default class SplashScreen extends React.Component{
    constructor(props){
        super(props)

        setTimeout(()=>{
            this.props.navigation.navigate('Home')
        },5000)
    }
    render(){
        return(
            <ImageBackground
            source = {bg}
            style = {{width:'100%', height: '100%'}}
            >
                <View style = {styles.container}>
                    <Image 
                    source = {logo}
                    style = {{width :400, height : 400}}
                    />

                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    }
})