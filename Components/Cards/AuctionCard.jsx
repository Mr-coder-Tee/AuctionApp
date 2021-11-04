import React from "react";
import { View, Text, Image, Dimensions,TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { FONTS } from "../../Consts";
const cardWidth = Dimensions.get("screen").width * 0.5;
const cardHeigh = Dimensions.get("screen").height * 0.3;

const AuctionCard = ({data,navigation}) => {

  const img = {
    uri: data.img
  };
  // const img = {
  //   uri: "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  // };
  return (
    <TouchableOpacity
        activeOpacity={.7}
      style={{
        width: cardWidth,
        height: cardHeigh,
        marginRight: 10,
        padding: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        borderRadius:10,
      }}
    >
      <View style={{ width: "100%", height: "50%" }}>
        <Image
          source={img}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10
          }}
        >
          <Text style={{ ...FONTS.body4, fontWeight: "600" }}>
            0 days:5h:31m:25s
          </Text>
          <Text style={{ ...FONTS.body4, fontWeight: "600" }}>{data.numberOfBids+" Bids"}</Text>
        </View>
        <Text numberOfLines={1}  style={{ ...FONTS.body3, fontWeight: "bold" }}>{data.productname}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ ...FONTS.body3, fontWeight: "600" }}>
              Current Bid
            </Text>
            <Text style={{ ...FONTS.body3, fontWeight: "600" }}>{data.currentBid}</Text>
          </View>
          {/* <Icon name="chevron-right" type="font-awesome" /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AuctionCard;
