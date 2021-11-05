import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import styles from "./Styles";
import { FONTS } from "../../Consts/index";
import { TextCard } from "../Cards/index";

const Chat = ({ navigation, route }) => {
  const data = route.params;
  const avata = { uri: data.avatar };
  const chats=[
    {uid:1,text:'Hello',time:'9:23',textId:'asd2332'}
    ,{uid:2,text:'Hi',time:'9:29',textId:'vdsf34'}
    ,{uid:1,text:'How are you doing',time:'9:43',textId:'a4rt'}
    ,{uid:2,text:'i am ok and you',time:'9:49',textId:'afg34'}
    ,{uid:1,text:'im ok',time:'9:50',textId:'aefa312'}
    ,{uid:2,text:'I want to buy that item from you',time:'10:01',textId:'sdf4'}
    ,{uid:1,text:'How much are you offering',time:'10:02',textId:'sf4sf12'}
    ,{uid:1,text:'let it be a reasonable price',time:'10:02',textId:'vert56'}
    ,{uid:2,text:'just set a price than we can nigotitate',time:'10:03',textId:'sfvjuy83td'}
    ,{uid:1,text:'The item is in the Auction you can see the starting price,',time:'10:05',textId:'45gdfgs'}
    ,{uid:2,text:'I do',time:'10:05',textId:''}
    ,{uid:1,text:'ok,then let nigotiate from that price and upward',time:'10:20',textId:'456354fgh'}
    ,{uid:2,text:'it seems a bit high',time:'10:22',textId:'345tgfdgh'}
    ,{uid:1,text:'remember you are not the only one who wants it',time:'10:29',textId:'srth545'}
    ,{uid:2,text:'I understand i placed my offer is it ok.',time:'10:30',textId:'s54yts'}
    ,{uid:1,text:'Yes, we have a deal',time:'10:34',textId:'shtrs434'}
]

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
      <View style={{padding:10,paddingBottom:100}}>
        <FlatList 
          data={chats}
          renderItem={({item})=>(
            <TextCard chats={item}/>
          )}
          keyExtractor={(item)=>item.textId}
        />
      </View>
      <View style={styles.typeMsgView}>
        <TextInput placeholder="Type a message"/>
        <TouchableOpacity>
          <Icon name='send' type='font-awsome'/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
