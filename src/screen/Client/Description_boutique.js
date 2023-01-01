import React, { useRef, useState } from "react"
import {View,Text,Animated,ScrollView,FlatList,TouchableOpacity,Image} from "react-native"
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons'; 
import Header_master_homme from "../Client/Header/header_master_homme";
import Header_master_femme from "../Client/Header/header_master_femme";


const  Description_boutique = (props) =>  {
    const animation_value_height = useRef(new Animated.Value(0)).current;
    const [display_photo,setdisplay_photo] = useState(true)
    const [header_master,setheader_master] = useState(true)
    const data = props.navigation.getParam("data_props")
    const navigation = props.navigation
    const [categorie_current,setcategorie_current] = useState("master_homme")
    const [opacity_header_sex_homme,setopacity_header_sex_homme] = useState(true)

   
    const LongueurHeader_interpolate = animation_value_height.interpolate({
        inputRange: [0, 200],
        outputRange: [340 , 100],
        extrapolate: 'clamp'
    })

    const backgroundColor_interpolate = animation_value_height.interpolate({
        inputRange: [0, 200],
        outputRange: ['rgba(255,255,255,1)', '#2B7ECC'],
        extrapolate: 'clamp'
    })

    const AnimatedStyle =  {
        backgroundColor:backgroundColor_interpolate,
        height:LongueurHeader_interpolate,
        
    }

 

    const opacity_interpolate_1 = animation_value_height.interpolate({
        inputRange: [0, 200],
        outputRange:  [1, 0],
        extrapolate: 'clamp'
    })

    const AnimatedStyle_opacity1=  {
       opacity:opacity_interpolate_1,
    }
  





    const click_header_sex = (data) => {
        if (data == "master_homme") {
            setcategorie_current(data)
            setopacity_header_sex_homme(true)
        }
        else{
            setcategorie_current(data)
            setopacity_header_sex_homme(false)
        }
    }

    

    const renderHeaderCategorieMaster = () => {
        if(categorie_current == "master_homme"){
           return(
            <Header_master_homme  />
           )
        }
        if(categorie_current == "master_femme"){
            return(
                <Header_master_femme />
               )
        }
    }



  return (
               
        <View style={{flex:1,display:"flex"}}>


            <View style={{flex:1}}>
            <Animated.View style={[{justifyContent:"center",alignItems:"center",position:"relative"},AnimatedStyle]}>
                <View style={{width:22,height:22,borderWidth:1,borderRadius:30,backgroundColor:"white",opacity:0.5,borderColor:"transparent",position:"absolute",zIndex:2,justifyContent:"center",alignItems:"center",left:"3%",top:display_photo?"20%":"50%"}}>
                      <Ionicons name="arrow-back"  size={13} color="black"  onPress={() => navigation.goBack()} />
                </View>
                <View style={{display:display_photo?"none":"flex",position:"absolute",zIndex:2,right:"3%",top:"50%"}}>
                     <MaterialIcons name="search" size={24} color="white" />
                </View>
                
                <View style={{flexDirection:"row",padding:5,display:display_photo?"none":"flex",position:"absolute",top:"50%",left:"30%"}} >
                    <Text style={{fontWeight:"600",fontSize:18,color:"white"}}>
                        {data.nom_marque.toUpperCase()}
                    </Text>
                    <Text style={{color:"white",opacity:0.7,paddingLeft:3,fontSize:16}}>
                        ( {data.nombre_articles} articles )
                    </Text>
                </View>
                <View style={{width:240,height:40,position:"absolute",display:display_photo ? "flex":"none",zIndex:2,justifyContent:"center",alignItems:"center",left:"20%",top:"82%"}}>
                      <View style={{flexDirection:"row"}}>
                         
                        <View style={{borderBottomWidth:opacity_header_sex_homme?0:2,justifyContent:"center",alignItems:"center",borderColor:"white",opacity:opacity_header_sex_homme?0.5:1}}>
                              <Text style={{fontSize:16,fontWeight:"700",color:"white"}} onPress={() => click_header_sex("master_femme")} >
                               FEMME
                            </Text> 
                        </View>
                        <View style={{flex:1.3}} />
                        <View style={{borderBottomWidth:opacity_header_sex_homme?2:0,justifyContent:"center",alignItems:"center",borderColor:"white",opacity:opacity_header_sex_homme?1:0.5}}>
                              <Text style={{fontSize:16,fontWeight:"700",color:"white"}} onPress={() => click_header_sex("master_homme")}  >
                               HOMME
                            </Text> 
                        </View>
                        <View style={{flex:1}} />
   
                            
                      </View>
                </View>
                <Animated.Image source={{uri:data.photo_marque}}   style={[{resizeMode:"cover",display:display_photo ? "flex" : "none",height:"100%",alignSelf:"center",width:"100%"},AnimatedStyle_opacity1]} />
            </Animated.View>
      
            <View style={{height:display_photo?70:40,margin:10}}>
                <View style={{flexDirection:"row",padding:5,display:display_photo?"flex":"none"}} >
                    <Text style={{fontWeight:"600",fontSize:18}}>
                        {data.nom_marque.toUpperCase()}
                    </Text>
                    <Text style={{color:"gray",paddingLeft:3,fontSize:13}}>
                        ( {data.nombre_articles} articles )
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:"row"}}>
                     
                  <ScrollView    horizontal  contentContainerStyle={{}}  showsHorizontalScrollIndicator={false}>
                  
                         {
                           renderHeaderCategorieMaster()
                        }
                       
                  </ScrollView>

                </View>
            </View>

                <ScrollView scrollEventThrottle={16}
                    onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: animation_value_height}}}],
                    {useNativeDriver: false,
                        listener: event => {
                        const valeur_Y = event.nativeEvent.contentOffset.y
                        console.log(valeur_Y)
                        if (valeur_Y > 150) {
                            setdisplay_photo(false)
                        
                        }else{
                            setdisplay_photo(true)
                        }
                    }})}> 
            <View style={{alignItems:"center"}}> 
                <FlatList 
                data={data.articles}
                renderItem={({item}) => 
                                <TouchableOpacity  style={{width:170,height:270,borderWidth:1,margin:5,borderColor:"none",backgroundColor:"white"}}>
                                    <View style={{flex:1}}>
                                        <View style={{flex:0.75}}>
                                            <Image source={item.photo} style={{height:"100%",width:"100%",alignSelf:"center",backgroundColor:"rgba(43,126,204,0.2)"}} resizeMode="contain" />
                                        </View>
                                        <View style={{flex:0.25,justifyContent:"space-around"}}>
                                            <Text style={{fontSize:13,fontWeight:"bold"}}> {item.nom} </Text>
                                            <Text style={{opacity:0.9}}> {item.prix} € </Text>
                                            <View style={{flexDirection:"row"}}>
                                                { item.couleur.map((don) => {
                                                    return(
                                                        <View style={{flexDirection:"row"}}>
                                                            <View style={{width:3}} />
                                                            <View style={{height:20,width:20,borderColor:"black",backgroundColor:don,opacity:0.6,borderRadius:20,borderWidth:1}} />
                                                            <View style={{width:5}} />
                                                        </View>
                                                        
                                                    )
                                                }) }
                                            </View>
                                            
                                        </View>
                                    </View>
                                </TouchableOpacity>
            }
            numColumns={2}
                />
            </View>
            
        


      </ScrollView>
            <View style={{height:20}} />
            </View>            
        </View>
  
  );
}

export default Description_boutique

