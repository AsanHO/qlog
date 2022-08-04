import React, { useState } from "react";
import styled from "styled-components/native";
import { Alert } from "react-native";
import colors from "../colors";
import { Ionicons } from "@expo/vector-icons";

const View = styled.View`
  background-color: ${colors.bgColor};
  flex: 1;
`;
const Title = styled.Text`
  width: 100%;
  text-align: center;
  margin: 15px 0px;
  font-size: 25px;
  font-weight: 600;
`;
const TextInput = styled.TextInput`
  background-color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 20px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;
const Btn = styled.TouchableOpacity`
  background-color: ${colors.btnColor};
  padding: 10px 20px;
  width: 70px;
  height: 70px;
  justify-content: center;
  text-align: center;
  border-radius: 50px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
  position: absolute;
  bottom: 70px;
  right: 40px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;
const BtnText = styled.Text`
  color: white;
  text-align: right;
`;
const Emotions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
`;
const Emotion = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.selected ? "teal" : "white")};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;
const EmotionText = styled.Text`
  font-size: 30px;
`;
const emotions = ["😁", "🥹", "😏", "😫", "🤮"];

const Write = () => {
  const [selectedEmotion, setEmotion] = useState(null);
  const [text, setText] = useState("");
  const onChangeText = (text) => setText(text);
  const onEmotionPress = (face) => setEmotion(face);
  const onsubmit = () => {
    if (text === "") {
      return Alert.alert("글을 써주셔야 합니다!!");
    } else if (selectedEmotion == null) {
      return Alert.alert("감정을 선택해주셔야 합니다!!");
    }
  };
  console.log(selectedEmotion);
  return (
    <View>
      <Title>오늘 어떤 일이 있었나요??</Title>
      <Emotions>
        {emotions.map((emotion, index) => (
          <Emotion
            selected={emotion === selectedEmotion}
            onPress={() => onEmotionPress(emotion)}
            key={index}
          >
            <EmotionText>{emotion}</EmotionText>
          </Emotion>
        ))}
      </Emotions>
      <TextInput
        returnKeyType="done"
        onChangeText={onChangeText}
        value={text}
        placeholder="Write your feelings..."
      />
      <Btn onPress={onsubmit}>
        <BtnText>
          <Ionicons name="save-outline" size={30} />
        </BtnText>
      </Btn>
    </View>
  );
};
export default Write;
