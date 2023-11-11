import {View, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.boxOne} />
        <View style={styles.boxTwo} />
        <View style={styles.bowThree} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxOne: {backgroundColor: 'yellow', minHeight: 100, minWidth: 100},
  boxTwo: {backgroundColor: 'green', minHeight: 100, minWidth: 100},
  bowThree: {backgroundColor: 'red', minHeight: 100, minWidth: 100},
});
