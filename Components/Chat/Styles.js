import { StyleSheet, StatusBar,Dimensions } from "react-native";
import {FONTS,COLORS,SIZES,Height,Width} from '../../Consts/index'
const hieght=Dimensions.get('screen').height*.05

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
    },
    typeMsgView:{
        height:hieght,
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
    }


})

export default styles;