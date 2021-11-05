import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { FONTS } from "../../Consts/index";

const ContactCard = ({ data,navigation }) => {
  const img = { uri: data.avatar };
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('Chat',data)}
      activeOpacity={0.6}
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        marginBottom: 10,
        padding: 10,
        borderRadius: 10
      }}
    >
      <Avatar source={img} rounded size="medium" />
      <View
        style={{
          marginLeft: 10,
          width:'80%'
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={{...FONTS.body3,fontWeight: "bold"}}>{data.name}</Text>
          <Text>{data.time}</Text>
        </View>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{ fontWeight: "700", marginTop: 5 }}
        >
          {data.lasttext}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;
