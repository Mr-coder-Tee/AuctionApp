import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Styles from "./Styles";
import { FONTS, COLORS, SIZES } from "../../Consts/index";
import { Input, Button, Icon } from "react-native-elements";

const SignUpPage = ({navigation}) => {

  const [viewPassword, setViewPassword] = useState(true);
  const [viewConfrimPassword, setViewConfirmPassword] = useState(true);


  const passwordViewHandler = () => {
    setViewPassword(!viewPassword);
  };
  const confirmpasswordViewHandler = () => {
    setViewConfirmPassword(!viewConfrimPassword);
  };

  const RenterPassworView = () => (
    <TouchableOpacity onPress={() => passwordViewHandler()}>
      {!viewPassword ? (
        <Icon name="eye" type="font-awesome" />
      ) : (
        <Icon name="eye-slash" type="font-awesome" />
      )}
    </TouchableOpacity>
  );
  const RenterConfirmPassworView = () => (
    <TouchableOpacity onPress={() => confirmpasswordViewHandler()}>
      {!viewConfrimPassword ? (
        <Icon name="eye" type="font-awesome" />
      ) : (
        <Icon name="eye-slash" type="font-awesome" />
      )}
    </TouchableOpacity>
  );




  const img = {
    uri: "https://images.pexels.com/photos/3685175/pexels-photo-3685175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ImageBackground
        source={img}
        resizeMode="cover"
        style={Styles.backgroundImg}
      ></ImageBackground>
      <View style={Styles.mainContent}>
        <Text style={{ ...FONTS.h1, fontWeight: "bold" }}>Sign up</Text>
        <ScrollView>
          <View style={Styles.altLoginView}>
            <TouchableOpacity activeOpacity={0.7} style={Styles.loginBtn}>
              <Icon name="google" type="font-awesome" color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={Styles.loginBtn}>
              <Icon name="facebook" type="font-awesome" color="#4267B2" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={Styles.loginBtn}>
              <Icon name="mobile" type="font-awesome" color="#25D366" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              marginBottom: 10,
              marginTop: 10,
              textAlign: "center",
              color: "gray",
              ...FONTS.body3
            }}
          >
            or,register with email
          </Text>

          <View>
            <Input
              placeholder="Full name"
              leftIcon={<Icon name="user-o" type="font-awesome" />}
            />
          </View>
          <View>
            <Input
              placeholder="Email"
              leftIcon={<Icon name="at" type="font-awesome" />}
            />
          </View>
          <View>
            <Input
              placeholder="Password"
              leftIcon={<Icon name="lock" type="font-awesome" />}
              rightIcon={<RenterPassworView/>}
              secureTextEntry={viewPassword}
            />
          </View>
          <View>
            <Input
              placeholder="Confrim password"
              leftIcon={<Icon name="lock" type="font-awesome" />}
              rightIcon={<RenterConfirmPassworView/>}
              secureTextEntry={viewConfrimPassword}
            />
          </View>

          <Button
            onPress={() => navigation.navigate("HomePage")}
            title="Register"
            containerStyle={{
              borderRadius: 10
            }}
            buttonStyle={{
              backgroundColor: COLORS.secondary
            }}
            titleStyle={{
              color: "white"
            }}
          />

          <Text style={{ ...FONTS.body2, textAlign: "center", marginTop: 20 }}>
            Already in AuctionApp?
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              activeOpacity={0.7}
              style={{ color: "blue" }}
            >
              LogIn
            </TouchableOpacity>
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;