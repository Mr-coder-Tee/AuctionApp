import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import Styles from './Styles'
import {FONTS,COLORS,SIZES} from '../../Consts/index'

const WelcomePage = () => {
    return (
        <SafeAreaView>
           <View></View>
           <View>
               <Button title="Log in"/>
               <Button title="Sign up"/>
           </View>
        </SafeAreaView>
    )
}

export default WelcomePage
