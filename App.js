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
      ],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello React Native!</Text>
        <TaskList />
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
