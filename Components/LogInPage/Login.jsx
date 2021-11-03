import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Styles from "./Styles";
import { FONTS, COLORS, SIZES } from "../../Consts/index";
import { Input, Button, Icon } from "react-native-elements";

const Login = ({navigation}) => {
  const [viewPassword, setViewPassword] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const passwordViewHandler = () => {
    setViewPassword(!viewPassword);
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
  const Rendererror = () => (
    <View style={{ marginTop: 20, marginBottom: 10 }}>
      {error && (
        <Text
          style={{ color: COLORS.danger, textAlign: "center", ...FONTS.body3 }}
        >
          Wrong username and Password
        </Text>
      )}
    </View>
  );


  const img={uri:'https://images.pexels.com/photos/5665104/pexels-photo-5665104.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}


  return (
    <SafeAreaView style={Styles.container}>
      <ImageBackground source={img} resizeMode="cover" style={Styles.backgroundImg}>
      </ImageBackground>
      <View style={Styles.contentContainer}>
        <Text style={{ ...FONTS.h1, fontWeight: "bold" }}>Login</Text>
        <ScrollView>
          <Rendererror />
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
          <TouchableOpacity onPress={()=>navigation.navigate('Forgotten')} activeOpacity={.7} style={{ marginTop: 20, marginBottom: 20 }}>
            <Text
              style={{
                color: "blue",
                ...FONTS.body3,
                textAlign: "right",
                fontStyle: "italic"
              }}
            >
              forgot password?
            </Text>
          </TouchableOpacity>
          <Button
            onPress={()=>navigation.navigate('HomePage')}
            title="Login"
            containerStyle={{
              borderRadius: 10
            }}
            buttonStyle={{
              backgroundColor: COLORS.primary
            }}
            titleStyle={{
              color: 'white'
            }}
          />
          <Text style={{marginBottom:20,marginTop:20,textAlign:'center',color:'gray',...FONTS.body3}}>or login with</Text>
          <View style={Styles.altLoginView}>
            <TouchableOpacity activeOpacity={.7} style={Styles.loginBtn}>
              <Icon name="google" type="font-awesome" color='#DB4437'/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7} style={Styles.loginBtn}>
              <Icon name="facebook" type="font-awesome" color='#4267B2'/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7} style={Styles.loginBtn}>
              <Icon name="mobile" type="font-awesome" color='#25D366'/>
            </TouchableOpacity>
          </View>
          <Text style={{...FONTS.body2,textAlign:'center',marginTop:20}}>
            New to AuctionApp?
            <TouchableOpacity onPress={()=>navigation.navigate('SignUpPage')} activeOpacity={.7} style={{color:'blue'}}>
              <Text>Register.</Text>
            </TouchableOpacity>
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;
