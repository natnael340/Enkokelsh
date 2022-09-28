import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import Animal from "../Components/Animal";
import Person from "../Components/Person";
import Tools from "../Components/Tools";
import Food from "../Components/Food";
import Adult from "../Components/Adult";
import { Entypo } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;

const Category = () => {
  const list = [
    {
      id: 1,
      name: "Animal",
      svg: <Animal width={WIDTH / 3} height={WIDTH / 3} />,
    },
    {
      id: 2,
      name: "People",
      svg: <Person width={WIDTH / 3} height={WIDTH / 3} />,
    },
    {
      id: 3,
      name: "Tools",
      svg: <Tools width={WIDTH / 3} height={WIDTH / 3} />,
    },
    {
      id: 4,
      name: "Food",
      svg: <Food width={WIDTH / 3} height={WIDTH / 3} />,
    },
    {
      id: 5,
      name: "Adult",
      svg: <Adult width={WIDTH / 3} height={WIDTH / 3} />,
    },
    {
      id: 6,
      name: "Other",
      svg: <Entypo name="globe" size={WIDTH / 3} />,
    },
  ];
  const colmun1 = list.filter((item, index) => index % 2 == 0);
  const colmun2 = list.filter((item, index) => index % 2 == 1);
  return (
    <ImageBackground
      source={require("../Images/default.png")}
      style={{
        flex: 1,
        paddingTop: 30,
        alignItems: "center",
        paddingBottom: 70,
      }}
    >
      <Text style={{ fontSize: 32, marginBottom: 20, fontWeight: "bold" }}>
        Category
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: WIDTH * 0.05,
        }}
      >
        <FlatList
          data={colmun1}
          contentContainerStyle={{
            width: WIDTH * 0.4,
            marginRight: WIDTH * 0.05,
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(item.id)}
          renderItem={({ item }) => (
            <View
              style={{
                width: "100%",
                height: WIDTH * 0.4 + 30,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: WIDTH * 0.4,
                  backgroundColor: "#F0F0F0",
                  borderRadius: 10,
                  marginBottom: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.svg}
              </View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
        <FlatList
          data={colmun2}
          contentContainerStyle={{
            width: WIDTH * 0.4,
            marginLeft: WIDTH * 0.05,
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(item.id)}
          renderItem={({ item }) => (
            <View
              style={{
                width: "100%",
                height: WIDTH * 0.4 + 30,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: WIDTH * 0.4,
                  backgroundColor: "#F0F0F0",
                  borderRadius: 10,
                  marginBottom: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.svg}
              </View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default Category;

const styles = StyleSheet.create({});
