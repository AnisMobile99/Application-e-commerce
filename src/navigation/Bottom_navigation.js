import React, { useEffect, useState } from "react"
import {View,Text, TouchableOpacity} from "react-native"
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 
import AntDesign from "react-native-vector-icons/AntDesign"
import  Entypo  from 'react-native-vector-icons/Entypo'; 


const  Bottom_navigation = (props) =>  {

    const index_props=props.index_props
    const setindex_props = props.setindex_props
    const setview_modal_props = props.setview_modal_props

    const [index_home,setindex_home] = useState(index_props=="home" ? true:false)
    const [index_recherche,setindex_recherche] = useState(index_props=="recherche" ? true:false)
    const [index_coeur,setindex_coeur] = useState(index_props=="coeur" ? true:false)
    const [index_commande,setindex_commande] = useState(index_props=="commande" ? true:false)
    const [index_profil,setindex_profil] = useState(index_props=="profil" ? true:false)
    

  const renderItem = (valeur) => {
    if(valeur == "home"){
        if (index_home) {
            return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                <Entypo name="home" size={20} color="#1B79D7" />
                <Text style={{color:"#1B79D7",fontSize:11,position:"relative",left:5}}>Home</Text>
            </View>               
            )
        }else{
            return(
                    <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                            <AntDesign name="home"  size={20} color="rgba(240,237,241,255)"/>                       
                    </View>
            )
            
        }
    }
    if(valeur == "recherche"){
        if (index_recherche) {
            return(
                <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                    <Ionicons name="search-circle" size={20} color="#1B79D7" />                     
                    <Text style={{color:"#1B79D7",fontSize:11,position:"relative",left:5}}>Recherche</Text>
              </View>
               
            )
        }else{
            return(
                <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                    <AntDesign name="search1" size={20} color="rgba(240,237,241,255)"  />
              </View>
            )
            
        }
    }
    if(valeur == "coeur"){
        if (index_coeur) {
            return(
                <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                            <AntDesign name="heart" size={20} color="#1B79D7"  />
                    <Text style={{color:"#1B79D7",fontSize:11,position:"relative",left:5}}>Favoris</Text>
              </View>
               
            )
        }else{
            return(
                <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                            <AntDesign name="hearto" size={20} color="rgba(240,237,241,255)" />
              </View>
            )
            
        }
    }
    if(valeur == "commande"){
        if (index_commande) {
            return(
                <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                            <Entypo name="shopping-cart" size={20} color="#1B79D7"  />
                    <Text style={{color:"#1B79D7",fontSize:11,position:"relative",left:5}}>Commandes</Text>
              </View>
               
            )
        }else{
            return(
                <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                            <AntDesign name="shoppingcart" size={20} color="rgba(240,237,241,255)" />
              </View>
            )
            
        }
    }
    if(valeur == "profil"){
        if (index_profil) {
            return(
                <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                            <Ionicons name="ios-person-circle" size={22} color="#1B79D7"  />
                    <Text style={{color:"#1B79D7",fontSize:11,position:"relative",left:5}}>Profil</Text>
              </View>
               
            )
        }else{
            return(
                <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                            <Ionicons name="ios-person-circle-outline" size={22} color="rgba(240,237,241,255)" />
              </View>
            )
            
        }
    }       
  }

 const choiceItem = (valeur) => {
    if(valeur=="home"){
        setindex_props("home")
        renderItem("home")
        setindex_home(true)
        setindex_recherche(false)
        setindex_profil(false)
        setindex_commande(false)
        setindex_coeur(false)
        setview_modal_props(false)
  }
    if(valeur=="recherche"){
          renderItem("recherche")
          setindex_recherche(true)
          setindex_home(false)
          setindex_profil(false)
          setindex_commande(false)
          setindex_coeur(false)
          setindex_props("recherche")
          setview_modal_props(false)
    }
    if(valeur=="coeur"){
        renderItem("coeur")
        setindex_recherche(false)
        setindex_home(false)
        setindex_profil(false)
        setindex_commande(false)
        setindex_coeur(true)
        setindex_props("coeur")
        setview_modal_props(false)
  }
  if(valeur=="commande"){
    renderItem("commande")
    setindex_recherche(false)
    setindex_home(false)
    setindex_profil(false)
    setindex_commande(true)
    setindex_coeur(false)
    setindex_props("commande")
    setview_modal_props(false)
}
if(valeur=="profil"){
  renderItem("profil")
  setindex_recherche(false)
  setindex_home(false)
  setindex_profil(true)
  setindex_commande(false)
  setindex_coeur(false)
  setindex_props("profil")
  setview_modal_props(false)
}
    
  }

  return (
            <View style={{flex:1,backgroundColor:"#1B79D7",borderRadius:50,position:"relative",display:"flex",borderBottomLeftRadius:0,borderBottomRightRadius:0}}>
                <View style={{flex:0.25}} />
                <View style={{flex:0.65,flexDirection:"row",borderRadius:70,padding:15,borderColor:"transparent"}}>

                    <View style={{width:15}} />
                
                     <TouchableOpacity style={{flex:index_home?0:1,width:index_home?120:0,borderWidth:1,backgroundColor:index_home?"white":"#1B79D7",borderColor:index_home?"white":"#1B79D7",borderRadius:100}} onPress={() => choiceItem("home")}>
                            {
                                renderItem("home")
                            }
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:index_recherche?0:1,width:index_recherche?120:0,borderWidth:1,backgroundColor:index_recherche?"white":"#1B79D7",borderColor:index_recherche?"white":"#1B79D7",borderRadius:100}} onPress={() => choiceItem("recherche")}>
                            {
                                renderItem("recherche")
                            }
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:index_coeur?0:1,width:index_coeur?120:0,borderWidth:1,backgroundColor:index_coeur?"white":"#1B79D7",borderColor:index_coeur?"white":"#1B79D7",borderRadius:100}} onPress={() => choiceItem("coeur")}>
                            {
                                renderItem("coeur")
                            }
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:index_commande?0:1,width:index_commande?120:0,borderWidth:1,backgroundColor:index_commande?"white":"#1B79D7",borderColor:index_commande?"white":"#1B79D7",borderRadius:100}} onPress={() => choiceItem("commande")}>
                            {
                                renderItem("commande")
                            }
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={{flex:index_profil?0:1,width:index_profil?120:0,borderWidth:1,backgroundColor:index_profil?"white":"#1B79D7",borderColor:index_profil?"white":"#1B79D7",borderRadius:100}} onPress={() => choiceItem("profil")}>
                            { 
                                renderItem("profil")
                            }
                    </TouchableOpacity>
                    <View style={{width:15}} />

                </View>

            </View>         
  
  );
}

export default Bottom_navigation

