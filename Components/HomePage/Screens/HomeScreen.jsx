import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import { FONTS } from "../../../Consts/index";
import { CategoryCard, AuctionCard } from "../../Cards/index";

const HomeScreen = () => {
  const categories = [
    { name: "live", icon: "globe", type: "font-awesome" },
    { name: "All", icon: "package", type: "feather" },
    { name: "Watch", icon: "watch", type: "feather" },
    { name: "House", icon: "home", type: "font-awesome" },
    { name: "Vaults", icon: "unlock", type: "font-awesome" },
    { name: "Tech", icon: "cpu", type: "feather" },
    { name: "Jewelary", icon: "diamond", type: "font-awesome" },
    { name: "Furniture", icon: "asterisk", type: "font-awesome" },
    { name: " Artifacts", icon: "asterisk", type: "font-awesome" },
    { name: "Vihecles", icon: "car", type: "font-awesome" }
    // { name: "", icon: "", type: "" },
  ];

  const endingsoon = [
    { id: 1, productname: "", currentBid: "", numberOfBids: "" ,img:''},
    { id: 2, productname: "", currentBid: "", numberOfBids: "" ,img:''},
    { id: 3, productname: "", currentBid: "", numberOfBids: "" ,img:''},
    { id: 4, productname: "", currentBid: "", numberOfBids: "" ,img:''},
    { id: 5, productname: "", currentBid: "", numberOfBids: "" ,img:''}
  ];
  const popularauctions = [
    { id: 1, productname: "", currentBid: "", numberOfBids: "" ,img:''},
    { id: 2, productname: "", currentBid: "", numberOfBids: "" ,img:''},
    { id: 3, productname: "", currentBid: "", numberOfBids: "" ,img:''},
    { id: 4, productname: "", currentBid: "", numberOfBids: "" ,img:''},
    { id: 5, productname: "", currentBid: "", numberOfBids: "" ,img:''}
  ];
  const mostsearched = [
    { id: 1, productname: "", currentBid: "", numberOfBids: "" ,img:''},
    { id: 2, productname: "", currentBid: "", numberOfBids: "" ,img:''},
    { id: 3, productname: "", currentBid: "", numberOfBids: "" ,img:''},
    { id: 4, productname: "", currentBid: "", numberOfBids: "" ,img:''},
    { id: 5, productname: "", currentBid: "", numberOfBids: "" ,img:''}
  ];

  return (
    <ScrollView>
      <View style={{ marginTop: 10 }}>
        <Text style={{ ...FONTS.h2, fontWeight: "bold" }}>Categories</Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item }) => {
              return <CategoryCard data={item} />;
            }}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ ...FONTS.h2, fontWeight: "bold" }}>Ending Soon</Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={endingsoon}
            renderItem={({ item }) => {
              return <AuctionCard data={item} />;
            }}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ ...FONTS.h2, fontWeight: "bold" }}>
          Popular Auctions
        </Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={popularauctions}
            renderItem={({ item }) => {
              return <AuctionCard data={item} />;
            }}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ ...FONTS.h2, fontWeight: "bold" }}>Most Searched</Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={mostsearched}
            renderItem={({ item }) => {
              return <AuctionCard data={item} />;
            }}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
