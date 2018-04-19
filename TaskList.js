import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import React from 'react';
//
// const {
//   Text,
// } = React;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 40,
    borderWidth: 2,
    borderColor: 'red',
  }
});

class TaskList extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Hi there this is the TaskList</Text>
      </View>
    );
  }
}

export default TaskList;
