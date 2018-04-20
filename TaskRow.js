import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#E7E7E7',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '300',
  }
});

class TaskRow extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.todo.task}</Text>
      </View>
    )
  }
}

TaskRow.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
  }).isRequired,
}

export default TaskRow;
