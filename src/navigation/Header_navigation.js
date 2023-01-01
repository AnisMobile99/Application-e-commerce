import React, { useEffect, useState } from "react"
import {View,Image,Text} from "react-native"
import  MaterialIcons  from "react-native-vector-icons/MaterialIcons"; 
import { Avatar } from 'react-native-elements';
import  Fontisto  from 'react-native-vector-icons/Fontisto'; 


const  Header_navigation = (props) =>  {

    const [index,setindex] = useState("home")
    const index_props = props.index_props
    const setindex_props = props.setindex_props
    const setview_modal_props = props.setview_modal_props
    const view_modal_props = props.view_modal_props

    useEffect(() => {
            
    },[])


    const choiceItem = (valeur) => {
        if(valeur=="notification"){
            setindex_props("notification")
            setview_modal_props(true)
      }
        if(valeur=="panier"){
            setindex_props("panier")
            setview_modal_props(true)

        }
        if(valeur=="avatar"){
            setindex_props("avatar")
            setview_modal_props(true)

      }
    }

  return (
               
<View style={{flex:1,borderWidth:1,backgroundColor:"white",borderColor:"transparent",borderRadius:0,borderTopLeftRadius:0,borderTopRightRadius:0}}>
    <View style={{flex:1,justifyContent:"flex-end"}}>
        <View style={{height:60,flexDirection:"row",alignItems:"center"}}>
            <View style={{width:20}} />
            <Fontisto name="world" size={28} color="#1B79D7"  />
            <View style={{width:3}} />
            <Text style={{color:"#1B79D7",fontSize:18,flexDirection:"row",fontWeight:"600"}}>
                   style'dz
            </Text>
            <View style={{width:80}} />
            <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
                    <View style={{flex:1,alignItems:"center"}}>
                       <MaterialIcons name="notifications" size={24} color="#1B79D7" onPress={() => choiceItem("notification")} />
                         <View style={{height:13,width:13,position:"absolute",backgroundColor:"black",borderRadius:15,right:15,top:-6,justifyContent:"center",alignItems:"center"}} >
                            <Text style={{color:"white",fontSize:10}}>
                                2
                            </Text>
                        </View>
                    </View>
                    <View style={{flex:1,alignItems:"center"}}>
                         <Avatar
                            rounded
                            source={{
                                uri:
                                'https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png',
                            }}
                            containerStyle={{height:24,width:24,borderWidth:3,borderColor:"#1B79D7"}}
                    
                            />
                    </View>
                    <View style={{flex:1,alignItems:"center"}}>
                         <MaterialIcons name="shopping-basket" size={22} color="#1B79D7" onPress={() => choiceItem("panier")} />
                        <View style={{height:13,width:13,position:"absolute",backgroundColor:"black",borderRadius:15,right:15,top:-8,justifyContent:"center",alignItems:"center"}} >
                            <Text style={{color:"white",fontSize:10}}>
                                0
                            </Text>
                        </View>
                    </View>
            </View>
        </View>
     
    </View>
</View>  
  
  );
}

export default Header_navigation