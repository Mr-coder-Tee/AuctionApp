import React from "react";
import { View, Text, FlatList } from "react-native";
import { ContactCard } from "../../Cards/index";

const Massages = ({navigation}) => {
  const myChat = [
    {
      id: 1,
      name: "Mike",
      lasttext: "Hello,thanks for buying my car!",
      time: "5:45",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      id: 2,
      name: "Peter",
      lasttext: "May I send the money using EFT",
      time: "4:20",
      avatar:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      id: 3,
      name: "James",
      lasttext: "When was the last time you used it.",
      time: "12:21",
      avatar:
        "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      id: 4,
      name: "Lucas",
      lasttext:
        "I have been looking for the item for a while, its just by luck that i found it thank you very much sir",
      time: "Yesterday",
      avatar:
        "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      id: 5,
      name: "Adam Lavinis",
      lasttext: "I made it my safe, i used to work at a shop that makes them.",
      time: "Yesterday",
      avatar:
        "https://images.pexels.com/photos/7928098/pexels-photo-7928098.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      id: 6,
      name: "Khan",
      lasttext: "Its about time",
      time: "2021/11/04",
      avatar:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ];

  return (
    <View
        style={{padding:10}}>
      <FlatList
        data={myChat}
        renderItem={({ item }) => <ContactCard data={item} navigation={navigation}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Massages;
