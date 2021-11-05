import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import styles from "./Styles";
import { FONTS } from "../../Consts/index";

const Chat = ({ navigation, route }) => {
  const data = route.params;
  const avata = { uri: data.avatar };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.6} style={{ padding: 5 }} onPress={()=>navigation.goBack()}>
            <Icon name="angle-left" type="font-awesome" color='white'/>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ flexDirection: "row", alignItems: "center",marginLeft:10 }}
          >
            <Avatar source={avata} rounded size="small" />
            <Text
              style={{
                ...FONTS.body2,
                marginLeft: 10,
                fontWeight: "bold",
                color: "white"
              }}
            >
              {data.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.6} style={{ padding: 10 }}>
            <Icon name="ellipsis-v" type="font-awesome" color='white'/>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default Chat;
