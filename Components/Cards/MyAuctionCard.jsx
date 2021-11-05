import React from 'react'
import { View, Text, Dimensions, TouchableOpacity,Image, } from 'react-native'
const cardWidth = Dimensions.get('screen').width * .4

const MyAuctionCard = () => {
    const img = { uri: 'https://img.jamesedition.com/listing_images/2020/09/21/12/16/15/22a00f6f-7ffe-453d-8852-a6877b2ac781/je/600x354xc.jpg' }

    return (
        <TouchableOpacity activeOpacity={.7} style={{ width: cardWidth, height: cardWidth, borderRadius: 10, overflow: 'hidden',margin:10 }}>
            <Image source={img} style={{ width: '100%', height: '100%' }} />
            <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'rgba(0,0,0,.4)', left: 0, right: 0, padding: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Product name</Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Current Bid: R9000.00</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MyAuctionCard
