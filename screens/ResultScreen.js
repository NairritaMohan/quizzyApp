import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native'


export default class ResultScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>

        <Text style = {{fontSize:30, fontWeight:'bold',color:'white'}}>SCORE: {this.props.navigation.getParam('score')}/10</Text>
                
            </View>
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