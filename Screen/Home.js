import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
  Animated,
} from "react-native";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const data = require("../Data/Data.json");
const TextInp = Animated.createAnimatedComponent(TextInput);
const Home = (props) => {
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [wrong, setWrong] = React.useState(false);
  const [hint, setHint] = React.useState({
    index: 0,
    value: [],
  });
  const [extention, setExtension] = React.useState({
    index: 0,
    value: [],
  });
  const [finalAnswer, setFinalAnswer] = React.useState();
  const [notfication, setNotification] = React.useState(false);
  const [notficationVal, setNoficationVal] = React.useState("");
  const tinpAnime = React.useRef(new Animated.Value(0)).current;
  const [ansa, setAnsa] = React.useState(0);
  const [selectedCat, setSelectedCat] = React.useState();
  const { state } = props.navigation;
  const transformX = tinpAnime.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -10, 10],
  });
  const animateTextInput = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(tinpAnime, {
          toValue: 1,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(tinpAnime, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 2 }
    ).start();
  };
  const handlehints = (val) => {
    let c, i;
    if (val == "hint") {
      if (hint.index == 0) return;
      i = hint.index;
      setHint({ ...hint, index: hint.index - 1 });
      setNoficationVal(hint.value[i - 1]);
    } else if (val == "ext") {
      if (extention.index == 0) return;
      i = extention.index;
      setExtension({ ...extention, index: extention.index - 1 });
      setNoficationVal(extention.value[extention.index - 1]);
      let pay = true;
      for (let x in props.user.hints.extension)
        if (props.user.hints.extension[x] == extention.index) pay = false;
      console.log(props.user.hints.extension);
      props.setUser({
        ...props.user,
        amount: pay ? props.user.amount - 25 : props.user.amount,
        hints: {
          ...props.user.hints,
          extension: pay
            ? [...props.user.hints.extension, extention.index]
            : props.user.hints.extension,
        },
      });
    } else {
      if (props.user.hints.finalAnswer != 1) {
        props.setUser({
          ...props.user,
          amount: props.user.amount - 50,
          hints: {
            ...props.user.hints,
            finalAnswer: 1,
          },
        });
      }
      setNoficationVal(finalAnswer);
    }
    setNotification(true);
  };
  const validateAnswer = () => {
    let anso = finalAnswer.toLowerCase().split("/");
    let valid = false;
    for (let i in anso) {
      if (anso[i] == answer.toLowerCase()) valid = true;
    }
    if (valid) {
      setWrong(false);
      setAnswer("");
      props.setUser({
        ...props.user,
        qid: props.user.qid + 1,
        level: Math.floor((props.user.amount + 2) / 5),
        amount: props.user.amount + ansa,
        hints: {
          extension: [],
          finalAnswer: 0,
        },
      });
    } else {
      setWrong(true);
      animateTextInput();
    }
  };
  const getrandomnums = (max) => {
    let num1, num2;
    do {
      num1 = 1 + Math.floor(Math.random() * max);
      num2 = 1 + Math.floor(Math.random() * max);
    } while (num1 == num2);
    return [num1, num2];
  };
  React.useEffect(() => {
    setQuestion(data[props.user.qid].question);
    setFinalAnswer(data[props.user.qid].answer);
    setHint({
      index: data[props.user.qid].hint.length,
      value: data[props.user.qid].hint,
    });

    let ans = data[props.user.qid].answer.split("/")[0];
    let anslen = ans.length;
    if (anslen > 6) {
      let e1 = ans[0] + "*".repeat(anslen - 2) + ans[anslen - 1];
      let v = getrandomnums(anslen - 2);
      const n1 = v[0] < v[1] ? v[0] : v[1];
      const n2 = v[0] > v[1] ? v[0] : v[1];
      let e2 =
        ans[0] +
        "*".repeat(n1 - 1) +
        ans[n1] +
        "*".repeat(n2 - n1 - 1) +
        ans[n2] +
        "*".repeat(anslen - 2 - n2) +
        ans[anslen - 1];
      setExtension({ index: 2, value: [e2, e1] });
      setAnsa(data[props.user.qid].amount);
    }
  }, [props.user.qid]);
  return (
    <View style={{ flex: 1, backgroundColor: "#2D5D7B" }}>
      <Modal visible={notfication} transparent={true} animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.3)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 7,
              width: WIDTH / 1.2,
              height: WIDTH / 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>{notficationVal}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(0,0,0,0.03)",
                width: "100%",
                position: "absolute",
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
              onPress={() => setNotification(false)}
            >
              <Text style={{ fontSize: 16 }}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
          {props.user.amount}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: "#201F1F", padding: 10 }}
            onPress={() => {
              handlehints("hint");
            }}
          >
            <View
              style={{
                position: "absolute",
                backgroundColor: "red",
                right: -7.5,
                top: -7.5,
                width: 15,
                height: 15,
                borderRadius: 7.5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 9 }}>{hint.index}</Text>
            </View>
            <Entypo name="light-bulb" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#201F1F",
              padding: 10,
              marginVertical: 3,
            }}
            onPress={() => handlehints("ext")}
          >
            <View
              style={{
                position: "absolute",
                backgroundColor: "red",
                right: -7.5,
                top: -7.5,
                width: 15,
                height: 15,
                borderRadius: 7.5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 9 }}>
                {extention.index}
              </Text>
            </View>
            <MaterialIcons name="extension" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "#201F1F", padding: 10 }}
            onPress={() => handlehints("")}
          >
            <MaterialIcons name="lock-open" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={{ fontSize: 18, color: "white" }}>Low</Text>
            <Text style={{ marginVertical: 10, fontSize: 18, color: "white" }}>
              Middle
            </Text>
            <Text style={{ fontSize: 18, color: "white" }}>High</Text>
          </View>
          <View style={{ marginHorizontal: 8, alignItems: "center" }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderColor: "white",
                borderWidth: 1,
                backgroundColor: "#4279CB",
              }}
            />
            <View style={{ width: 1, height: 18, backgroundColor: "white" }} />
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderColor: "white",
                borderWidth: 1,
              }}
            ></View>
            <View style={{ width: 1, height: 18, backgroundColor: "white" }} />
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderColor: "white",
                borderWidth: 1,
              }}
            ></View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          alignItems: "center",
          marginTop: -100,
        }}
      >
        <View
          style={{
            width: WIDTH / 3,
            height: WIDTH / 3,
            borderRadius: WIDTH / 3,
            backgroundColor: "#201F1F",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 80, fontWeight: "bold" }}>
            ?
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            paddingHorizontal: 10,
            textAlign: "center",
            fontSize: 19,
            paddingVertical: 10,
          }}
        >
          {question}
        </Text>
        <View style={{ paddingHorizontal: 20, width: "100%" }}>
          <TextInp
            placeholder="who am i?"
            value={answer}
            onChangeText={setAnswer}
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              borderColor: wrong ? "red" : "#707070",
              borderWidth: 1,
              width: "100%",
              height: 40,
              fontSize: 22,
              padding: 8,
              textAlign: "center",
              transform: [
                {
                  translateX: transformX,
                },
              ],
            }}
            onSubmitEditing={validateAnswer}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#201F1F",
              marginTop: 20,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
            }}
            onPress={validateAnswer}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
