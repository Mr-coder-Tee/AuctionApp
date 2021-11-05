import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { FONTS, COLORS, SIZES, Height, Width } from "../../Consts/index";
const footerHight = Dimensions.get("screen").height * 0.08;
const height=Dimensions.get('screen').height
const bottomPadding=Dimensions.get('screen').height*.3

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1
  },
  footer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    height: footerHight,
    flexDirection: "row"
  },
  footerBtns: {
    width: "50%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:COLORS.secondary
  },
  line: {
    width: 1,
    height: "100%",
    backgroundColor: "rgba(255,255,255,.3)"
  },
  userBox: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  scrowller: {
    padding: 10,
    minHeight:height,
    paddingBottom:bottomPadding
  },
  msg: {
    borderColor: "rgba(0,0,0,.1)",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10
  },
  productBox: {
    marginTop: 20,
    minHeight:20,
    justifyContent:'space-evenly'
  },
  box:{
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  },
  auctionBox:{
    marginTop: 20,
  }
  
});

export default styles;
