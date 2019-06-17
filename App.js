import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Sentry from "sentry-expo";

// Remove this once Sentry is correctly setup.
Sentry.enableInExpoDevelopment = true;

Sentry.config("<DSN-HERE>").install();

// This is a way to handle all errors in the app.
export default class App extends React.Component {
  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, {
      extra: errorInfo
    });
  }

  _throwError = () => {
    throw new Error("lollll");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Test your sentry release 5!</Text>
        <Button title="Throw error!" onPress={this._throwError} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
