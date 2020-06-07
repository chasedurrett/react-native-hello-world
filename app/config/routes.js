import React, { Component } from "react";
import { View, Stylesheet, Text } from "react-native";
import { AppLoading } from "expo";

import { Scene, Router, Stack } from "react-native-router-flux";

export default class extends Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isReady: true }), 1000);
  }

  render() {
    let navTitleStyle = {
      fontSize: 15,
      fontFamily: "HelveticaNeue-Medium",
      color: "#1E1611",
      letterSpacing: 0.4,
    };
    if (!this.state.isReady) return <AppLoading />;

    return (
      <Router>
        <Stack key='root'
          navigationBarStyle={{ backgroundColor: "#fff" }}
          titleStyle={navTitleStyle}
          backButtonTintColor={"#1E1611"}>
          <Scene key="main" component={Main} title="Main" initial/>    
          </Stack>
      </Router>
    );
  }
}

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>yooooo</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});