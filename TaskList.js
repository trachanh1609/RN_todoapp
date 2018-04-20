import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ListView } from 'react-native';
import TaskRow from './TaskRow'

// import React from 'react';
//
// const {
//   Text,
// } = React;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#F7F7F7',
    borderColor: 'red',
    flex: 1,
    justifyContent: 'flex-start',
  }
});

class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);

    const ds= new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2 ,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    }
  }

  renderRow(todo){
    return(
      <TaskRow todo={todo}></TaskRow>
    );
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Hi there this is the TaskList</Text>
        <ListView
          key={this.props.todos}
          dataSource={this.state.dataSource}
          renderRow= {this.renderRow.bind(this)}
          />
      </View>
    );
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskList;
