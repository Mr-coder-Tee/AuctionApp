import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import {COLORS,FONTS} from '../../Consts/index'

const bodySize = Dimensions.get("screen").width * 0.15;
const radius = bodySize / 2;

const CategoryCard = ({ data }) => {
  return (
    <View
      style={{
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
      }}
    >
      <View
        style={{
          padding: 10,
          width: bodySize,
          height: bodySize,
          borderRadius: radius,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:COLORS.secondary
        }}
      >
        <Icon name={data.icon} type={data.type} color='white' />
      </View>
      <Text style={{fontWeight:'700',...FONTS.body4}}>{data.name}</Text>
    </View>
  );
};

export default CategoryCard;
