import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import jwt from "jwt-decode";
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
} from "../componets/styles";
import { View, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { Formik } from "formik";

import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

const { brand, darkLinght, primary } = Colors;

const singIn = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo
          resizeMode="cover"
          source={require("../assets/paisajeatardese.jpeg")}
        />
        <PageTitle>Flower Crib</PageTitle>
        <SubTitle>Account Login</SubTitle>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            if (values.email == "") {
              Alert.alert("please put one email");
            } else if (values.password == "") {
              Alert.alert("please put one password");
            } else {
              fetch("http://localhost:4000/api/auth/signIn", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: values.email,
                  password: values.password,
                }),
              })
                .then((response) => response.json())
                .then((responseJson) => {
                  if (responseJson.hasOwnProperty("token")) {
                    if (!responseJson.token) {
                      console.log(responseJson.message);
                    } else {
                      const token = responseJson.token;
                      const decoed = jwt(token);
                      console.log(decoed.id);
                      navigation.navigate("Welcome");
                    }
                  } else {
                    console.log(responseJson.message);
                  }
                });
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="andyj@gmail.com"
                placeholderTextColor={darkLinght}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />

              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * "
                placeholderTextColor={darkLinght}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <Line />
              <StyledButton google={true} onPress={handleSubmit}>
                <Fontisto name="google" color={primary} size={25} />
                <ButtonText google={true}>Sign in with Google</ButtonText>
              </StyledButton>
              <ExtraView>
                <ExtaText>Don't have an account already?</ExtaText>
                <TextLink>
                  <TextLinkContent>Signup</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RigthIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLinght}
          />
        </RigthIcon>
      )}
    </View>
  );
};

export default singIn;
