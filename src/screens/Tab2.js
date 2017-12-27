import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const Tab1 = () => (
  <View style={styles.container}>
    <Text>This is Tab 2</Text>
  </View>
);

Tab1.navigationOptions = {
  title: 'Tab 2',
};

export default Tab1;
