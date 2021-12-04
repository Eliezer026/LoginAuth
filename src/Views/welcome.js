import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RigthIcon,
  Colors,
  StyledButton,
  ButtonText,
  Line,
  MsgBox,
  ExtaText,
  ExtraView,
  TextLink,
  TextLinkContent,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from "../componets/styles";
import { View } from "react-native";
import { Formik } from "formik";

import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

const { brand, darkLinght, primary } = Colors;

const welcome = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <>
      <StatusBar style="dark" />
      <InnerContainer>
        <WelcomeImage
          resizeMode="cover"
          source={require("../assets/paisajeatardese.jpeg")}
        />
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome ! diaz</PageTitle>
          <SubTitle welcome={true}>abel@gmail.com</SubTitle>

          <StyledFormArea>
            <Avatar
              resizeMode="cover"
              source={require("../assets/paisajeatardese.jpeg")}
            />

            <Line />
            <StyledButton>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default welcome;
