import React, { useState } from "react";
import {View,Text,TouchableOpacity} from "react-native"
import  AntDesign  from 'react-native-vector-icons/AntDesign'; 
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'; 
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import Header_2_vetement from "./header_2_vetement";

const Header_master_homme = () => {

    const [view_master,setview_master] = useState(true)
    const [categorie_current,setcategorie_current] = useState("master")

    
    const clickCategorie = (dataReturn) => {
            if(dataReturn == "vetements"){
                setview_master(false)
                setcategorie_current("vetements")
            }
    }


    const renderViewSecondary = () => {
        if(categorie_current == "vetements"){
            return(
                <Header_2_vetement setcategorie_current_props={setcategorie_current} categorie_current_props={categorie_current}  view_master_props={view_master} setview_master_props={setview_master} />
            )
        }
    }

    return(

        <React.Fragment>
            {
                view_master ? 
                (
                    <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"black",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"transparent"}}>
                        <MaterialCommunityIcons name="border-all" size={20} color="black" />
                        <Text style={{fontSize:13,color:"black",left:2}}>
                            Tout dans homme
                        </Text>
                    </TouchableOpacity>
                    <View style={{width:10}} />
                    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
                        <Ionicons name="flame-outline" size={22} color="rgba(0,0,0,0.6)" />
                        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)",left:2}}>
                            Promo
                        </Text>
                    </TouchableOpacity>
                    <View style={{width:10}} />
                    <TouchableOpacity onPress={() => clickCategorie("vetements")}  style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
                        <AntDesign name="skin" size={20} color="rgba(0,0,0,0.6)" />
                        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)",left:2}}>
                            Vetements
                        </Text>
                    </TouchableOpacity>
                    <View style={{width:10}} />
                    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
                        <Ionicons name="headset-outline" size={24} color="rgba(0,0,0,0.6)"/>
                        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)",left:2}}>
                            Accessoires
                        </Text>
                    </TouchableOpacity>
                    <View style={{width:10}} />
                    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
                        <MaterialCommunityIcons name="shoe-sneaker" size={24} color="rgba(0,0,0,0.6)" />
                        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)",left:2}}>
                            Chaussures
                        </Text>
                    </TouchableOpacity>
                    <View style={{width:10}} />
                    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
                        <MaterialIcons name="sports-soccer" size={24} color="rgba(0,0,0,0.6)" />
                        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)",left:2}}>
                            Sport
                        </Text>
                    </TouchableOpacity>
                </View>
                )
                :
                (
                        renderViewSecondary()
                )
            }
        </React.Fragment>
       
    )
}


export default Header_master_homme