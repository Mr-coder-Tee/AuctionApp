import React from "react";
import { View, Text, Image,Dimensions } from "react-native";
import { Icon } from "react-native-elements";
const cardWidth=Dimensions.get('screen').width*.45
const cardHeigh=Dimensions.get('screen').height*.35

const AuctionCard = () => {
  return (
    <View style={{borderWidth:1,width:cardWidth,height:cardHeigh,marginRight:10}}>
      <View>
        <Image />
      </View>
      <View>
        <Text>0 days:5h:31m:25s</Text>
        <Text>Product name</Text>
        <View>
          <View>
            <Text>Current Bid</Text>
            <Text>R3948.90</Text>
          </View>
          <Icon />
        </View>
      </View>
    </View>
  );
};

export default AuctionCard;
