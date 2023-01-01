import React, { useEffect } from "react"
import {View,Text,TouchableOpacity} from "react-native"
import  AntDesign  from 'react-native-vector-icons/AntDesign'; 


const  Header_3_veste = ({}) =>  {

    
    useEffect(() => {

    },[])

 

  return (
               
    <View style={{flexDirection:"row"}}>
    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"black",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"transparent"}}>
        <AntDesign name="skin" size={20} color="black"  />
        <Text style={{fontSize:13,color:"black",left:2}}>
            TOUT Dans la categorie veste
        </Text>
    </TouchableOpacity>
    <View style={{width:10}} />
    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)"}}>
            Veste sans manches
        </Text>
    </TouchableOpacity>
    <View style={{width:10}} />
    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)"}}>
            Veste de mi-saison
        </Text>
    </TouchableOpacity>
    <View style={{width:10}} />
    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)"}}>
            Veste de pluie
        </Text>
    </TouchableOpacity>
    <View style={{width:10}} />
    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)"}}>
           Veste en jean
        </Text>
    </TouchableOpacity>
    <View style={{width:10}} />
    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)"}}>
            Parka
        </Text>
    </TouchableOpacity>
    <View style={{width:10}} />
    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)"}}>
            Doudoune
        </Text>
    </TouchableOpacity>
</View>
  
  );
}

export default Header_3_veste

