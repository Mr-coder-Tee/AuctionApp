import { StyleSheet, StatusBar,Dimensions } from "react-native";
import {FONTS,COLORS,SIZES,} from '../../Consts/index'
const dimen=Dimensions.get('screen').height*.5

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'white'
    },
    img:{
        width:dimen,
        height:dimen,
    }


})

export default styles;