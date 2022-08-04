import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";

const View = styled.View`
  flex: 1;
  padding: 0px 30px;
  padding-top: 100px;
  background-color: ${colors.bgColor};
`;

const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 39px;
  font-weight: 600;
  margin-bottom: 100px;
`;

const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 70px;
  right: 40px;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  elevation: 5;
  background-color: ${colors.btnColor};
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.5);
`;

const Home = ({ navigation: { navigate } }) => (
  <View>
    <Title>journal</Title>
    <Btn onPress={() => navigate("Write")}>
      <Ionicons name="add" color="white" size={40} />
    </Btn>
  </View>
);

export default Home;
