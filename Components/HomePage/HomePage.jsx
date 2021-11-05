import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from "react-native";
import Styles from "./Styles";
import { FONTS, COLORS, SIZES } from "../../Consts/index";
import { Input, Button, Icon } from "react-native-elements";
import {
  createBottomTabNavigator,
  BottomTabBar
} from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  Massages,
  MoreScreen,
  Myauction,
  Transaction
} from "./Screens/index";
const Tab = createBottomTabNavigator();
const inputWidth = Dimensions.get("screen").width * 0.8;

const HomePage = ({navigation}) => {
  const RenderHeader = () => (
    <View style={Styles.header}>
      <View style={Styles.nameArea}>
        <Text style={{ ...FONTS.body2, fontWeight: "bold" ,color:'white'}}>
          Hello ,Peter
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={Styles.headingBtns}>
            <Icon name="user-circle-o" type="font-awesome" color='white'/>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.headingBtns}>
            <Icon name="bell-o" type="font-awesome" color='white'/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.searchArea}>
        <Icon name="search" type="font-awesome" color='white' style={{ marginRight: 10 }} />
        <Input placeholder="Search" containerStyle={{ width: inputWidth }} />
      </View>
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#0000"
        },
        scrollEnabled: true,
        // tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex"
          },
          null
        ],
        headerShown:true,
        header: () => <RenderHeader />,
      }}
    >
      <Tab.Screen
        name="home"
        children={() => <HomeScreen navigation={navigation} />}
        options={{
          tabBarIcon: ({ focused }) => <Icon name="home" type="font-awesome" />
        }}
      />
      <Tab.Screen
        name="My Auctions"
        children={(props) => <Myauction props={props} />}
        options={{
          tabBarIcon: ({ focused }) => <Icon name="gavel" type="font-awesome" />
        }}
      />
      <Tab.Screen
        name="Transaction"
        children={(props) => <Transaction props={props} />}
        options={{
          tabBarIcon: ({ focused }) => <Icon name="money" type="font-awesome" />
        }}
      />
      <Tab.Screen
        name="Massages"
        children={(props) => <Massages navigation={navigation} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="comments" type="font-awesome" />
          )
        }}
      />
      <Tab.Screen
        name="More"
        children={(props) => <MoreScreen props={props} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="align-right" type="font-awesome" />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default HomePage;
