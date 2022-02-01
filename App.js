/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import Node from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const removeItemHandler = goalId => {
    // console.log('goalId', goalId);
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id != goalId);
    });
  };

  const counterGoalsHandler = goalText => {
    console.log('this value: ', this, 'enteredGoal', goalText);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalText},
    ]);
    setIsAddMode(false);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  // console.log('currentGoal', courseGoals);

  return (
    <View style={styles.sectionContainer}>
      <Button onPress={() => setIsAddMode(true)} title="Add New Goal"></Button>
      <GoalInput
        visible={isAddMode}
        onAddGoal={counterGoalsHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItems
            id={itemData.item.id}
            onDelete={removeItemHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
    paddingHorizontal: 24,
  },
});

export default App;
