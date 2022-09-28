import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Category from "./Screen/Category";
import Home from "./Screen/Home";
import Start from "./Screen/Start";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const Stack = createStackNavigator();
  const [qid, setqid] = React.useState(0);
  const [amount, setAmount] = React.useState(100);
  const [level, setLevel] = React.useState(0);
  const [user, setUser] = React.useState();
  const [initial, setInitial] = React.useState();

  const intialieApp = () => {
    AsyncStorage.getItem("@USER", (_, res) => {
      setUser(JSON.parse(res));
    });
  };
  const updateUser = (user) => {
    setUser(user);
    AsyncStorage.mergeItem("@USER", JSON.stringify(user));
  };
  React.useEffect(() => {
    try {
      AsyncStorage.getItem("@initial", (_, res) => {
        if (res) {
          intialieApp();
          return;
        }
        AsyncStorage.setItem("@initial", "True");
        let user = {
          level: 0,
          amount: 100,
          qid: 0,
          hints: {
            extension: [],
            finalAnswer: 0,
          },
        };
        setUser(user);
        AsyncStorage.setItem("@USER", JSON.stringify(user));
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar hidden />
      <Stack.Navigator headerMode={null} initialRouteName="Start">
        <Stack.Screen name="Start">
          {(props) => <Start {...props} user={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} user={user} setUser={updateUser} />}
        </Stack.Screen>
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
