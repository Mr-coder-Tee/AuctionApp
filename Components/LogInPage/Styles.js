import { StyleSheet, StatusBar,Dimensions } from "react-native";
import {FONTS,COLORS,SIZES,Height,Width} from '../../Consts/index'
const btnWidth=Dimensions.get('screen').width*.2
const btnHeight=btnWidth/2;

const backGroundImageHieght=Dimensions.get('screen').height*.3
const backGroundImageWidth=Dimensions.get('screen').width

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
    },
    contentContainer:{
        padding:20,
    },
    altLoginView:{
        flexDirection:'row',
        padding:10,
        justifyContent:'center'
    },
    loginBtn:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,.2)',
        width:btnWidth,
        height:btnHeight,
        justifyContent:'center',
        alignItems:'center',
        marginRight:5,
        marginLeft:5,
        borderRadius:5
    },
    backgroundImg:{
        width:backGroundImageWidth,
        height:backGroundImageHieght,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        overflow:'hidden',
    }


})

export default styles;