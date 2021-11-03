import { StyleSheet, StatusBar,Dimensions } from "react-native";
import {FONTS,COLORS,SIZES} from '../../Consts/index'

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        color:'white'
    },
    header:{
        padding:10,
        backgroundColor:COLORS.primary
    },
    nameArea:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
    },
    searchArea:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'rgba(255,255,255,.5)',
        borderWidth:1,
        borderRadius:50,
    },
    headingBtns:{
        borderWidth:1,
        borderColor:'rgba(255,255,255,.5)',
        padding:5,
        borderRadius:10,
        marginLeft:5
    }

})

export default styles;