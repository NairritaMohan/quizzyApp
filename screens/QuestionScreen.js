import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const apiURL = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple'

export default class QuestionScreen extends React.Component{

constructor(){
    super()

    this.state = {
        currentQuestion : 0,
        Loading : false,
        questions:[],
        options :[],
        correctAnswer : '',
        score: 0
    }
}

    async fetchQuestion(){
        return fetch(apiURL)
        .then(response=>{
            response.json()
            .then(responseJSON=>{
                console.log(responseJSON)

                const options = responseJSON.results[this.state.currentQuestion].incorrect_answers
                const correctAnswer = responseJSON.results[this.state.currentQuestion].correct_answer
                options.push(correctAnswer)

                this.setState({
                    Loading : true,
                    questions: responseJSON.results,
                    options:options,
                    correctAnswer: correctAnswer
                })
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    componentDidMount(){
        this.fetchQuestion()
    }

    checkAnswer(selectedAnswer){
        if(this.state.correctAnswer=== selectedAnswer){
            console.log('CORRECT')
            var score = this.state.score
            score = score + 1

            this.setState({
                score
            })
        }
        else{
            console.log('Incorrect')
        }

        var currentQuestion = this.state.currentQuestion
        currentQuestion = currentQuestion+1

        if(currentQuestion<this.state.questions.length){
            const options = this.state.questions[currentQuestion].incorrect_answers
            const correctAnswer = this.state.questions[currentQuestion].correct_answer
            options.push(correctAnswer)

            this.setState({
                currentQuestion,
                options,
                correctAnswer
            })
        }
        else{
            this.props.navigation.navigate('Result',{score : this.state.score})
        }
    }
    
    render(){
        if(this.state.Loading === false){
            return(
                <View style = {{marginTop:200, marginLeft:100}}>
                    <Text style  = {{fontSize : 30, fontWeight:'bold'}}>LOADING.......</Text>
                </View>
            )
        }
        else{
        return(
            <ScrollView style = {styles.container}>
                <View style = {styles.questionContainer}>
                <Text style = {styles.questionText}>Q:
        {this.state.questions[this.state.currentQuestion].question }</Text>
                </View>

                <View style = {styles.answerContainer}>
            <TouchableOpacity style = {styles.button}
            onPress={()=>{
                this.checkAnswer(this.state.options[0])
            }}
            
            >

        <Text style = {styles.answerText}>{this.state.options[0]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button}
            onPress={()=>{
                this.checkAnswer(this.state.options[1])
            }}
            
            >

                <Text style = {styles.answerText}>{this.state.options[1]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button}
            onPress={()=>{
                this.checkAnswer(this.state.options[2])
            }}
            
            >

                <Text style = {styles.answerText}>{this.state.options[2]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button}
            onPress={()=>{
                this.checkAnswer(this.state.options[3])
            }}
            >

                <Text style = {styles.answerText}>{this.state.options[3]}</Text>
            </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue'
        
    },
    questionContainer:{
        marginHorizontal:30,
        marginVertical:50
    },
    answerContainer:{
        marginVertical:10,
        marginHorizontal:100
    },
    questionText:{
        fontSize:30,
        color :'white',
        textAlign :'center'
    },
    answerText:{
        fontSize:30,
        color :'white',
        textAlign :'center'

    },
    button:{
        backgroundColor: 'grey',
        paddingHorizontal:20,
        paddingVertical:20,
        marginVertical:10,
        borderRadius: 20
    }
})