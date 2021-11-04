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

const SignUpPage = ({ navigation }) => {

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
    uri: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <ImageBackground
          source={img}
          resizeMode="cover"
          style={Styles.backgroundImg}
        ></ImageBackground>
        <View style={Styles.mainContent}>
          <Text style={{ ...FONTS.h1, fontWeight: "bold" }}>Sign up</Text>
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
              rightIcon={<RenterPassworView />}
              secureTextEntry={viewPassword}
            />
          </View>
          <View>
            <Input
              placeholder="Confrim password"
              leftIcon={<Icon name="lock" type="font-awesome" />}
              rightIcon={<RenterConfirmPassworView />}
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


          <View style={{flexDirection:'row',justifyContent:'center', marginTop: 20}}>

            <Text style={{ ...FONTS.body2 }}>
              Already in AuctionApp?

            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              activeOpacity={0.7}

            >
              <Text style={{ color: "blue", ...FONTS.body2 }}>LogIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpPage;
