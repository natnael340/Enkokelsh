import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  BackHandler,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Rect, Svg } from "react-native-svg";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Start = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#2D5D7B" }}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          padding: 20,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <AntDesign name="star" size={24} color="#FFF713" />
        <Text style={{ fontSize: 24, color: "white" }}>
          {props.user?.amount}
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: 40,
          paddingHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          height: HEIGHT / 16,
          borderRadius: 10,
          borderColor: "#FFF713",
          borderWidth: 1,
          alignItems: "center",
        }}
      >
        <Svg style={{ position: "absolute", top: 0, left: 0 }}>
          <Rect
            x={0}
            y={0}
            width={(WIDTH - 20) * (((props?.user?.qid || 0 + 1) % 5) / 5)}
            height={HEIGHT / 16}
            fill="#FFF713"
            rx="8"
            ry="10"
          />
        </Svg>

        <Text style={{ color: "white", fontSize: HEIGHT / 25 }}>
          {props.user?.level}
        </Text>
        <Text style={{ color: "white", fontSize: HEIGHT / 25 }}>
          {props.user?.level + 1}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: HEIGHT / 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: HEIGHT / 15,
            fontWeight: "bold",
          }}
        >
          Who am i?
        </Text>
      </View>
      <View style={{ paddingHorizontal: 30 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#39FF88",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            height: HEIGHT / 12,
          }}
          onPress={() => props.navigation.navigate("Home")}
          activeOpacity={0.4}
        >
          <Text
            style={{
              fontSize: HEIGHT / 28,
              color: "#201F1F",
              fontWeight: "bold",
            }}
          >
            START
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#E4D831",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            height: HEIGHT / 12,
            marginVertical: 20,
          }}
          onPress={() => props.navigation.navigate("Category")}
          activeOpacity={0.4}
        >
          <Text
            style={{
              fontSize: HEIGHT / 28,
              color: "#201F1F",
              fontWeight: "bold",
            }}
          >
            CATEGORY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#F35F5F",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            height: HEIGHT / 12,
          }}
          onPress={() => BackHandler.exitApp()}
          activeOpacity={0.4}
        >
          <Text
            style={{
              fontSize: HEIGHT / 28,
              color: "#201F1F",
              fontWeight: "bold",
            }}
          >
            EXIT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({});
