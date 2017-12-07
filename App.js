import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Something 1</Text>
        <TextInput />

        <Text>Something 2</Text>
        <TextInput />

        <Text>Something 3</Text>
        <TextInput />

        <Text>Something 4</Text>
        <TextInput />

        <Text>Something 5</Text>
        <TextInput />

        <Text>Something 6</Text>
        <TextInput />

        <Text>Something 7</Text>
        <TextInput />

        <Text>Something 8</Text>
        <TextInput />

        <KeyboardAvoidingView>
          <Text>Test KeyboardAvoidingView Here</Text>
          <TextInput />
        </KeyboardAvoidingView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
