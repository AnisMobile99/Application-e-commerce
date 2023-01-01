import React, { useEffect, useState } from "react"
import {View} from "react-native"
import Bottom_navigation from "../navigation/Bottom_navigation";
import Coeur from "../screen/Client/Coeur";
import Commande from "../screen/Client/Commande";
import Home from "../screen/Client/Home";
import Profil from "../screen/Client/Profil";
import Recherche from "../screen/Client/Recherche";
import Header_navigation from "../navigation/Header_navigation";
import Notification from "../screen/Client/Notification";
import Panier from "../screen/Client/Panier";


const  RouteurComposant = ({navigation}) =>  {
    const [view_modal,setview_modal] = useState(false)
    const [index_composant,setindex_composant] = useState("home")
    const [index_composant_modal,setindex_composant_modal] = useState("")
  
    useEffect(() => {
            
    },[])

 const renderComposant = () => {

    if(index_composant=="home"){
        return(
            <Home navigation={navigation} />

        )
    }
    if(index_composant=="recherche"){
        return(
            <Recherche />

        )
    }
    if(index_composant=="coeur"){
        return(
            <Coeur />

        )
    }
    if(index_composant=="commande"){
        return(
            <Commande />

        )
    }
    if(index_composant=="profil"){
        return(
            <Profil />

        )
    }
  
 }

 const renderComposant_modal = () => {

    if(index_composant_modal=="notification"){
        return(
            <Notification />

        )
    }
    if(index_composant_modal=="panier"){
        return(
            <Panier />

        )
    }
    if(index_composant_modal=="avatar"){
        return(
            <Coeur />

        )
    }  
 }

  return (
    <React.Fragment>
    
        <View style={{flex:1,display:"flex",backgroundColor:"#1B79D7"}}>
            <View style={{height:90}}>
                {
                    <Header_navigation index_props={index_composant_modal}  setindex_props={setindex_composant_modal} setview_modal_props={setview_modal} view_modal_props={view_modal} />
                }
            </View>  

{
    view_modal ? 
    (
        <View style={{flex:1,backgroundColor:"white",borderRadius:70,borderTopLeftRadius:0,borderTopRightRadius:0}}>
        {
         renderComposant_modal()
        } 
        </View>    
    )
    :
    (
        <View style={{flex:1,backgroundColor:"white",borderRadius:50,borderTopLeftRadius:0,borderTopRightRadius:0}}>
        {
         renderComposant()
        } 
        </View>   
    ) 
}
            
            <View style={{height:90}}>
                
                   <Bottom_navigation index_props={index_composant} setindex_props={setindex_composant} setview_modal_props={setview_modal}  />

                
            </View>         
        </View>
  </React.Fragment>
  );
}

export default RouteurComposant