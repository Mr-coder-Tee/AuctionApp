import { Dimensions } from "react-native";

export const COLORS={
    AppBackground:'#fff',
    primary:'#12c2e9',
    secondary:'#c471ed',
    danger:"#dc3545",
    tartiaty:'#8E2DE2',
    sender:'#B06AB3',
    reciever:'#4568DC'
}

export const SIZES={
    padding:10,
    radius:30,

    largeTitle:50,
    h1:30,
    h2:22,
    h3:20,
    h4:18,
    h5:16,
    h6:14,

    body1:25,
    body2:20,
    body3:16,
    body4:14,
    body5:12,

}


export const FONTS={
    largeTitle: {fontSize:SIZES.largeTitle,lineHeight:40},
    h1:{fontSize:SIZES.h1,lineHeight:36},
    h2:{fontSize:SIZES.h2,lineHeight:30},
    h3:{fontSize:SIZES.h3,lineHeight:22},
    h4:{fontSize:SIZES.h4,lineHeight:22},
    body1:{fontSize:SIZES.body1,lineHeight:36},
    body2:{fontSize:SIZES.body2,lineHeight:30},
    body3:{fontSize:SIZES.body3,lineHeight:22},
    body4:{fontSize:SIZES.body4,lineHeight:22},
    body5:{fontSize:SIZES.body5,lineHeight:22},

}

const AppTheme={COLORS,SIZES,FONTS,}


export default AppTheme