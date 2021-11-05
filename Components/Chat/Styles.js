import { StyleSheet, StatusBar,Dimensions } from "react-native";
import {FONTS,COLORS,SIZES,Height,Width} from '../../Consts/index'

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        flex:1,
    },
    header:{
        backgroundColor:COLORS.primary,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    }


})

export default styles;