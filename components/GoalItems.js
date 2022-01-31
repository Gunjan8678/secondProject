import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItems = props => {
  return (
    <View style={styles.listItems}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItems: {
    margin: 30,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default GoalItems;
