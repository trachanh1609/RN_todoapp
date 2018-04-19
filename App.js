import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  TaskList from './TaskList';

export default class App extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn RN',
        },
        {
          task: 'Do 10 Pushups',
        },
        {
          task: 'Drink 2litre of water',
        },
        {
          task: 'Learn Redux',
        },
      ],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello React Native!</Text>
        <TaskList todos={this.state.todos}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
