import React,{useEffect} from 'react'
import { View, Text,Image,SafeAreaView } from 'react-native'
import Styles from './Styles'
import {FONTS,COLORS,SIZES} from '../../Consts/index'

const SplashScreen = ({navigation}) => {
    const img={uri:'https://thumbs.dreamstime.com/z/auction-online-vector-concept-web-banner-website-page-illustration-isometric-smartphone-auctioneer-finger-tapping-bid-166920263.jpg'}
    
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('Login')
        },5000)
    }, [])
    
    
    
    return (
        <SafeAreaView style={Styles.container}>
            <Image source={img} resizeMode='contain' style={Styles.img}/>
            <Text style={{...FONTS.h1,fontWeight:'bold'}}>Auction App</Text>
        </SafeAreaView>
    )
}

export default SplashScreen
