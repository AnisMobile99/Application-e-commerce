import React, { useEffect, useState } from "react"
import {View,Text,TouchableOpacity} from "react-native"
import  AntDesign  from 'react-native-vector-icons/AntDesign'; 
import Header_3_veste from "./header_3_veste";
import  Entypo  from 'react-native-vector-icons/Entypo'; 


const  Header_2_vetement = ({setcategorie_current_props,setview_master_props,categorie_current_props}) =>  {

    const [view_secondaire,setview_secondaire] = useState(true)
    const [categorie_current,setcategorie_current] = useState("secondaire")
    const [categorie_back,setcategorie_back] = useState(categorie_current_props)
    
    useEffect(() => {

    },[])


    const clickItem = (dataReturn) => {
        if(dataReturn == "vestes"){
            setcategorie_current(dataReturn)
            setview_secondaire(false)
            setcategorie_back("vestes")
        }
    }
 
    const renderHeaderCategorieTrois = () => {
        if(categorie_current=="vestes")
        {        
            return(
                <Header_3_veste categorie_current_props_2={categorie_current} setcategorie_current_props_2={setcategorie_current} setview_secondaire_props_2={setview_secondaire} view_secondaire_props_2={view_secondaire} />
            )
        }
    }

    const clickRetourCategorie = () => {
        if(categorie_back == "vetements"){
            setview_secondaire(false)
            setview_master_props(true)
            setcategorie_current_props("master")
        }
        else{
            setview_secondaire(true)
            setcategorie_current("secondaire")
            setcategorie_back("vetements")
        }
    }

  return (        
    <View style={{flexDirection:"row"}}>
           
     <View style={{width:40,height:"auto",justifyContent:"center",alignItems:"center"}}>
            <Entypo name="arrow-with-circle-left" size={20} color="black" onPress={() => clickRetourCategorie()}/>
     </View>   
 {
        view_secondaire ? (
<View style={{flexDirection:"row"}}>
    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"black",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"transparent"}}>
        <AntDesign name="skin" size={20} color="black"  />
        <Text style={{fontSize:13,color:"black",left:2}}>
           TOUT Dans la categorie vetement
        </Text>
    </TouchableOpacity>
    <View style={{width:10}} />
    <TouchableOpacity onPress={() => clickItem("vestes")} style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)"}}>
            Vestes
        </Text>
    </TouchableOpacity>
    <View style={{width:10}} />
    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)"}}>
            Manteaux
        </Text>
    </TouchableOpacity>
    <View style={{width:10}} />
    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)"}}>
            Pantalons
        </Text>
    </TouchableOpacity>
    <View style={{width:10}} />
    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)"}}>
            T-shirts et polos
        </Text>
    </TouchableOpacity>
    <View style={{width:10}} />
    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)"}}>
            Sweats
        </Text>
    </TouchableOpacity>
    <View style={{width:10}} />
    <TouchableOpacity style={{width:"auto",paddingRight:10,paddingLeft:10,flexDirection:"row",borderWidth:1,borderColor:"transparent",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.08)"}}>
        <Text style={{fontSize:13,color:"rgba(0,0,0,0.6)"}}>
            Sous Vetements
        </Text>
    </TouchableOpacity>
</View>
        )
        :
        (
            renderHeaderCategorieTrois()

        )
    }
    </View>

   
    
  
  );
}

export default Header_2_vetement

