import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import { AppLoading } from "expo";

const apiURL =
  "https://opentdb.com/api.php?amount=10&category=18&type=multiple";

export default class QuestionScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      currentQuestion: 0,
      Loading: false,
      questions: [],
      options: [],
      correctAnswer: " ",
      score: 0
    };
  }

  componentDidMount() {
    this.fetchQuestions();
  }

  async fetchQuestions() {
    return fetch(apiURL)
      .then(response => {
        response.json().then(responseJSON => {
          //console.log(responseJSON)

          const options =
            responseJSON.results[this.state.currentQuestion].incorrect_answers;
          const correctAnswer =
            responseJSON.results[this.state.currentQuestion].correct_answer;

          options.push(correctAnswer);

          this.setState({
            Loading: true,
            questions: responseJSON.results,
            options: options,
            correctAnswer: correctAnswer
          });
        });
      })
      .catch(error => console.log(error));
  }

  checkAnswer(selected) {
    if (this.state.correctAnswer == selected) {
      console.log("correct");

      var score = this.state.score;
      score = score + 1;

      this.setState({
        score
      });
    } else {
      console.log("incorrect");
    }

    //change the questions

    var currentQuestion = this.state.currentQuestion;
    currentQuestion = currentQuestion + 1;

    if (currentQuestion < this.state.questions.length) {
      const options = this.state.questions[currentQuestion].incorrect_answers;
      const correctAnswer = this.state.questions[currentQuestion]
        .correct_answer;

      options.push(correctAnswer);

      this.setState({
        currentQuestion,
        options,
        correctAnswer
      });
    } else {
      this.props.navigation.navigate("ResultScreen", {
        score: this.state.score
      });
    }
  }

  render() {
    if (this.state.Loading === false) {
      return (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView />
          <View style={styles.upperContainer}>
            <View style={styles.upperLeftContainer}>
              <Text style={styles.score}>0</Text>
            </View>
            <View style={styles.upperMiddleContainer} />
            <View style={styles.upperRightContainer}>
              <Text style={styles.score}>0</Text>
            </View>
          </View>
          <View style={styles.lowerContainer}>
            <ScrollView>
              <View style={styles.questionContainer}>
                <Text style={styles.questionText}>
                  Q. {this.state.questions[this.state.currentQuestion].question}
                </Text>
              </View>

              <View style={styles.answerContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.checkAnswer(this.state.options[0]);
                  }}
                >
                  <Text style={styles.answerText}>{this.state.options[0]}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.checkAnswer(this.state.options[1]);
                  }}
                >
                  <Text style={styles.answerText}>{this.state.options[1]}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.checkAnswer(this.state.options[2]);
                  }}
                >
                  <Text style={styles.answerText}>{this.state.options[2]}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.checkAnswer(this.state.options[3]);
                  }}
                >
                  <Text style={styles.answerText}>{this.state.options[3]}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#00b5cc",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#00b5cc"
  },
  upperContainer: {
    flex: 0.12,
    flexDirection: "row"
  },
  upperLeftContainer: {
    flex: 0.45,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#76ff03"
  },
  upperMiddleContainer: {
    flex: 0.1
  },
  upperRightContainer: {
    flex: 0.45,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#f44336"
  },
  score: {
    fontSize: 30,
    fontWeight: "bold"
  },
  lowerContainer: {
    flex: 0.88
  },
  questionContainer: {
    marginHorizontal: 30,
    marginVertical: 20
  },
  answerContainer: {
    marginVertical: 10,
    marginHorizontal: 20
  },
  questionText: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center"
  },
  answerText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center"
  },
  button: {
    backgroundColor: "#2c82c9",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 10
  }
});