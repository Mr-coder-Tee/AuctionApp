import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { FONTS,COLORS } from '../../Consts/index'

const TextCard = ({chats}) => {
    const[me,setMe]=useState(0);
    const[sender,setSender]=useState(0);
    const[background,setBackground]=useState()
    const myUID=2;
    
    
    useEffect(()=>{
        const makeChts=()=>{
            if(chats.uid===myUID){
                setBackground(COLORS.reciever)
                setMe(10)
            }else{
                setSender(10)
                setBackground(COLORS.sender)
                
            }
        }
        makeChts()
    },[])

    return (
        <View style={{backgroundColor:background,padding:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:sender,borderTopRightRadius:me,marginBottom:10,Width:10}}>
            <Text>
                {chats.text}
            </Text>
        </View>
    )
}

export default TextCard
