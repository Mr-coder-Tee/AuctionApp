import React from "react";
import { Dimensions } from "react-native";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { Button, Icon, Avatar } from "react-native-elements";
import { COLORS, FONTS } from "../../Consts";
import styles from "./Styles";

const ViewPost = ({ navigation,route }) => {
    const data=route.params
  const avatar = {
    uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  };
  const product={
      uri:data.img
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent:'flex-start'}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{padding:10,height:50,width:50}}>
          <Icon name="angle-left" type="font-awesome" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrowller}>
        <View style={[styles.userBox,styles.box]}>
          <View style={{flexDirection:'row'}}>
            <Avatar rounded size="medium" source={avatar} />
            <View style={{marginLeft:10}}>
              <Text style={{...FONTS.h4,fontWeight:'bold'}}>Terrence Manaka</Text>
              <Text>300 Auctions success</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={.6} style={styles.msg}>
            <Icon name="comment" type="font-awesome" />
          </TouchableOpacity>
        </View>
        <View style={[styles.box,styles.productBox]}>
          <Text style={{...FONTS.h2,fontWeight:'bold',marginBottom:10}}>Product Details</Text>
          <View style={{width:'100%',height:'40%',marginBottom:10}}>
              <Image source={product} style={{width:'100%',height:'100%'}}/>
          </View>
          <View >
            <Text style={{...FONTS.body2,color:'black'}}>1day:3h:32m:23s</Text>
            <Text style={{...FONTS.body2,color:'black'}}>{data.numberOfBids+' Bids'}</Text>
            <Text style={{...FONTS.body2,color:'black'}}>{data.productname}</Text>
            <Text style={{...FONTS.body2,color:'black'}}>
                description
            </Text>
          </View>
        </View>
        <View style={[styles.box,styles.auctionBox]}>
          <View style={{flexDirection:'row',alignItems:'baseline',}}> 
            <Text style={{...FONTS.h2,fontWeight:'bold'}}>Auction</Text>
            <Text style={{color:'grey',marginLeft:10,}}>next bid:R2500.00</Text>
          </View>

          {/* FlatList */}
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{padding:10,backgroundColor:COLORS.primary,borderRadius:10,color:'white',fontWeight:'bold'}}>{data.currentBid}</Text>
            <Text style={{marginLeft:10,...FONTS.body4}}>by Peter Pan</Text>
            <Text style={{marginLeft:10,color:'grey'}}>8:23pm</Text>
          </View>
        </View>


      
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.footerBtns}>
          <Icon name="gavel" style={{ marginRight: 10 }} color='white'/>
          <View>
            <Text style={{color:'white'}}>Current Bid</Text>
            <Text style={{...FONTS.body2,fontWeight:'bold',color:'white'}}>{data.currentBid}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity activeOpacity={0.7} style={styles.footerBtns}>
          <Icon name="money" type="font-awesome" style={{ marginRight: 10 }} color='white'/>
          <View>
            <Text style={{color:'white'}}>Bid Now</Text>
            <Text style={{...FONTS.body2,fontWeight:'bold',color:'white'}}>R2500.00</Text>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default ViewPost;
