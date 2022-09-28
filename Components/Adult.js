import React from "react";
import { View } from "react-native";
import { G, Svg, Circle, Line, Text } from "react-native-svg";

const Adult = (props) => {
  const [x1, y1] = [
    props.width / 2 - (props.width / 2 - 5) * Math.cos(Math.PI * 0.25),
    props.height / 2 - (props.width / 2 - 5) * Math.cos(Math.PI * 0.25),
  ];

  return (
    <View>
      <Svg width={props.width} height={props.height}>
        <G>
          <Text
            fill="#707070"
            fontSize="62"
            x={props.width / 2}
            y={props.height / 2 + 20}
            textAnchor="middle"
          >
            18
          </Text>
          <Circle
            cx={props.width / 2}
            cy={props.height / 2}
            r={props.width / 2 - 5}
            stroke="red"
            strokeWidth={8}
          />
          <Line
            x1={x1}
            y1={y1}
            x2={props.width - x1}
            y2={props.height - y1}
            stroke="red"
            strokeWidth={8}
          />
        </G>
      </Svg>
    </View>
  );
};

export default Adult;
