import React, { useEffect, useState } from "react"
import { View,Text,TextInput } from 'react-native';
import  Entypo  from 'react-native-vector-icons/Entypo'; 
import  FontAwesome  from 'react-native-vector-icons/FontAwesome'; 
import  AntDesign  from 'react-native-vector-icons/AntDesign'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { showMessage,  } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'; 
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 



const  Connexion = ({navigation}) =>  {

    const [input_email,setinput_email] = useState("ynov@ynov.com")
    const [input_password,setinput_password] = useState("1234")

    useEffect(() => {
        
      }, []);

      const Connexion = () => {

        console.log("test")
        if(input_email == "ynov@ynov.com" ){
            if(input_password == "1234"){
                    navigation.navigate("Interface_Utilisateur")
                    showMessage({
                        message: "Authentification réussie",
                        type: "success",
                      });
            }else{
                showMessage({
                    message: "Mot de passe incorrect",
                    type:"danger",
                  });
            }
        }
        else{
            showMessage({
                message: "Adresse mail incorrect",
                type:"danger",
              });

        }

      }

  return (
                <View style={{flex:1,display:"flex",backgroundColor:"rgba(240,237,241,255)"}}>

                    <View style={{height:80}} />
                    <View style={{flex:1,margin:20}}>
                        <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row",borderWidth:1,alignSelf:"center",padding:8,borderRadius:5,backgroundColor:"rgba(43,126,204,0.9)",borderColor:"transparent"}}>
                           <Text style={{fontSize:22,color:"white",opacity:0.9}}>
                                STYLE'DZ 
                            </Text> 
                            <Entypo name="shop" size={20} style={{position:"relative",top:-5,left:5}} color="white" />
                        </View>
                        <View style={{height:30}} />
                        <View style={{width:280,justifyContent:"center",alignItems:"center",flexDirection:"row",alignSelf:"center"}}>
                           <Text style={{fontSize:18,color:"black",opacity:0.45}}>
                                Les meilleurs prix du marché pour tous les articles! olaa
                            </Text> 
                        </View>
                        <View style={{height:40}} />
                        
                        <View style={{height:55,borderColor:"tranpsarent",flexDirection:"row",display:"flex",margin:10,alignSelf:"center"}}>
                            <View style={{flex:0.17,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.9)",borderRadius:5,borderTopRightRadius:0,borderBottomRightRadius:0,position:"relative",left:3,zIndex:2}}>
                                <Entypo name="mail" size={20} color="white" />
                            </View>        
                            <TextInput value={input_email} onChangeText={(text) => {setinput_email(text)}} placeholder="anis.salahbey@viacesi.fr"  placeholderTextColor="#a7a5af"   style={{borderWidth: 1,flex:0.85, backgroundColor:"white",borderColor:"transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0,borderRadius:5,padding:10  }}  />                                                                                                
                        </View> 
                        <View style={{height:55,borderColor:"tranpsarent",flexDirection:"row",display:"flex",margin:10,alignSelf:"center"}}>
                            <View style={{flex:0.17,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.9)",borderRadius:5,borderTopRightRadius:0,borderBottomRightRadius:0,position:"relative",left:3,zIndex:2}}>
                                <FontAwesome name="unlock-alt" size={20} color="white" />
                            </View>        
                            <TextInput value={input_password} onChangeText={(text) => {setinput_password(text)}}  placeholder="***********" secureTextEntry  placeholderTextColor="#a7a5af"   style={{ borderWidth: 1,flex:0.85,  backgroundColor:"white",borderColor:"transparent",borderRadius:5,padding:10  }}  />
                        </View> 
                        <View style={{justifyContent:"center"}}>
                            <Text style={{textAlign:"right",opacity:0.5,fontSize:12}}>
                                Mot de passe oublié ?  test
                            </Text>
                        </View>
                        <View style={{height:20}} />
                        <TouchableOpacity  style={{height:50,margin:10,justifyContent:"center",alignItems:"center",borderRadius:10,backgroundColor:"rgba(43,126,204,0.9)",borderColor:"transparent"}} onPress={() => Connexion()}>
                            <Text style={{color:"white",fontSize:15,fontWeight:"500"}} onPress={() => Connexion()}>
                                Connexion
                            </Text>
                        </TouchableOpacity>
                        <View style={{height:20}} />
                        <View style={{flexDirection:"row",width:300,alignSelf:"center"}}>
                        <View style={{height:2,flex:1,backgroundColor:"black",alignSelf:"center",opacity:0.6,marginRight:20}} />
                            <Text>
                                Ou continuer avec
                            </Text>
                            <View style={{height:2,flex:1,backgroundColor:"black",alignSelf:"center",opacity:0.6,marginLeft:20}} />
                        </View>
                        <View style={{flex:1}}>
                            <View style={{flex:0.6,justifyContent:"space-around",flexDirection:"row",alignItems:"center"}}>
                                <View style={{width:70,height:70,borderWidth:1,borderColor:"white",justifyContent:"center",alignItems:"center"}}>
                                     <AntDesign name="google" size={30} color="red" />
                                </View>
                                <View style={{width:70,height:70,borderWidth:1,borderColor:"white",justifyContent:"center",alignItems:"center"}}>
                                       <AntDesign name="apple1" size={30} color="black" />
                                </View>
                                <View style={{width:70,height:70,borderWidth:1,borderColor:"white",justifyContent:"center",alignItems:"center"}}>
                                     <Entypo name="facebook-with-circle" size={30} color="blue" />
                                </View>
                            </View>
                            <View style={{flex:0.4,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                                 <Text style={{fontSize:13}}>
                                    Vous n'êtes pas encore inscrit ? 
                                </Text>
                                <Text style={{fontSize:13,color:"rgba(43,126,204,0.9)",marginLeft:2}}>
                                    Inscrivez vous !
                                </Text>
                            </View>
                        </View>

                    </View>
                    <FlashMessage position="top" /> 
                </View>
  
  );
}

export default Connexion

