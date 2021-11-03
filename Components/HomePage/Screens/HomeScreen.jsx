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
    { name: "vehicle", icon: "car", type: "font-awesome" }
    // { name: "", icon: "", type: "" },
  ];

  const endingsoon = [
    { id: 1, productname: "1956 car", currentBid: "R1,090,00", numberOfBids: "" ,img:'https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',date:""},
    { id: 2, productname: "Pink Headset", currentBid: "R500", numberOfBids: "" ,img:'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',date:""},
    { id: 3, productname: "Ford Ranger", currentBid: "R2,000,000", numberOfBids: "" ,img:'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',date:""},
    { id: 4, productname: "Mountain Bike", currentBid: "R700", numberOfBids: "" ,img:'https://images.pexels.com/photos/5836952/pexels-photo-5836952.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',date:""},
    { id: 5, productname: "Chair", currentBid: "", numberOfBids: "" ,img:'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',date:""}
  ];
  const popularauctions = [
    { id: 1, productname: "House", currentBid: "", numberOfBids: "" ,img:'https://www.myroof.co.za/prop_static/MR129098/p/l/648985.jpg',date:""},
    { id: 2, productname: "Red Diamond", currentBid: "R20,000", numberOfBids: "" ,img:'https://robbreport.com/wp-content/uploads/2020/08/19605-63073546-art.gif',date:""},
    { id: 3, productname: "Watch", currentBid: "R900", numberOfBids: "" ,img:'https://img.jamesedition.com/listing_images/2020/09/21/12/16/15/22a00f6f-7ffe-453d-8852-a6877b2ac781/je/600x354xc.jpg',date:""},
    { id: 4, productname: "Fridge", currentBid: "R500", numberOfBids: "" ,img:'https://images.pexels.com/photos/5825422/pexels-photo-5825422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',date:""},
    { id: 5, productname: "Iphone", currentBid: "R9,000", numberOfBids: "" ,img:'https://i.gadgets360cdn.com/large/amazon-flipkart-sale-large_1602912583468.jpg?downsize=950:*',date:""}
  ];
  const mostsearched = [
    { id: 1, productname: "Red chair and Blue carboard", currentBid: "R35,000", numberOfBids: "" ,img:'https://img.bidorbuy.co.za/image/upload/f_auto,q_auto:eco/user_images/site_images/200219155435_Antiques%20Furniture.jpg',date:""},
    { id: 2, productname: "Vault", currentBid: "R450,000", numberOfBids: "" ,img:'https://image.made-in-china.com/2f0j00aDGUTfYdqNoB/Bank-Vault-Doors-for-Sale-Stainless-Steel-Safe-Vault-Room-Modular-Strongroom.jpg',date:""},
    { id: 3, productname: "Headset", currentBid: "R900", numberOfBids: "" ,img:'https://i.ebayimg.com/images/g/ylQAAOSwdTthcY9z/s-l1600.jpg',date:""},
    { id: 4, productname: "Gitar", currentBid: "R3400", numberOfBids: "" ,img:'https://images.pexels.com/photos/4089501/pexels-photo-4089501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',date:""},
    { id: 5, productname: "Laptop", currentBid: "R5000", numberOfBids: "" ,img:'https://media.karousell.com/media/photos/products/2020/02/11/hp_laptop_for_sale__1581373353_1e0155b6_progressive.jpg',date:""}
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
      <View style={{ marginTop: 10,marginBottom:20 }}>
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
