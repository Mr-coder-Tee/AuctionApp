import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { MyAuctionCard } from '../../Cards/index'

const Myauction = () => {
    const data = [{ id: 1 }, { id: 2 },{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11}]
    return (
        <View style={{ padding: 10 }}>
            <FlatList 
                data={data}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <MyAuctionCard />
                )}
                numColumns={2}
            />

        </View>
    )
}

export default Myauction
