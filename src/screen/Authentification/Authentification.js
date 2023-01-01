import React, { useEffect } from "react"
import { Text, TouchableOpacity, View } from 'react-native';
import { Container, Image_item } from "./Authentification_CSS";
import  AntDesign  from 'react-native-vector-icons/AntDesign'; 


const  Authentification = ({navigation}) =>  {
   
    useEffect(() => {
   
      }, []);

  return (
                <Container>
                    <View style={{flex:0.6,justifyContent:"flex-end"}}>
                        <Image_item source={require("../../assets/Image_background.png")} display />
                    </View>
                    <View style={{flex:0.4,backgroundColor:"rgba(240,237,241,255)",borderRadius:100,borderBottomLeftRadius:0,borderBottomRightRadius:0,borderWidth:0,display:"flex"}}>
                        <View style={{height:40,width:"auto",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"row"}}>
                                <View style={{width:30,height:6,borderWidth:1,borderRadius:10,borderColor:"white",backgroundColor:"white"}} />
                                <View style={{width:20}} />
                                <View style={{width:30,height:6,borderWidth:1,borderRadius:10,borderColor:"#2B7ECC",backgroundColor:"#2B7ECC"}} />
                                <View style={{width:20}} />
                                <View style={{width:30,height:6,borderWidth:1,borderRadius:10,borderColor:"white",backgroundColor:"white"}} />

                        </View>
                        <View style={{flex:1,display:"flex",margin:15,justifyContent:"space-around",alignItems:"center"}}>
                            <View style={{borderWidth:1,padding:10,borderColor:"transparent",backgroundColor:"#2B7ECC",borderRadius:10}}>
                                     <Text style={{fontSize:20,color:"white",opacity:0.9}}>
                                        Bienvenue sur STYLE'DZ
                                    </Text>
                            </View>
                            <View>
                                    <Text style={{opacity:0.7,fontSize:14}}>
                                        Vous trouverez ici tous les vêtements et accessoires en déstockage avec un prix hors du marché !
                                    </Text>
                            </View>
                            <View style={{justifyContent:"center",alignItems:"center"}}>
                                    <TouchableOpacity style={{padding:15,borderRadius:70,backgroundColor:"#2B7ECC",justifyContent:"center",alignItems:"center"}}>
                                         <AntDesign name="arrowright" size={30} color="white" onPress={() => navigation.navigate("Connexion") } />
                                    </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </Container>
  
  );
}

export default Authentification

