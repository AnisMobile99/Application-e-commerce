import React, { useEffect, useRef, useState } from "react"
import { View,Text, ScrollView, TouchableOpacity,Dimensions  } from "react-native"
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons'; 
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 
import { ImageBackground } from "react-native";
import  Entypo  from 'react-native-vector-icons/Entypo'; 
import  AntDesign  from 'react-native-vector-icons/AntDesign'; 
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'; 
import NetInfo from "@react-native-community/netinfo";

const  Home = ({navigation}) =>  {
  
    const data_boutique = [
        {
            id:0,
            nom_marque:"Fila",
            photo_marque:"https://i.ytimg.com/vi/b_xZxwe7VGM/maxresdefault.jpg",
            categorie:["Pantalons","Hauts","Chaussures","test",],
            date_limite_heure:1,
            date_limite_minute:32,
            solde:20,
            nombre_articles:238,
            articles:[{
                nom:"Survet Bas Fila ",
                prix:"47,62",
                couleur:["pink"],
                categorie :"Survetement",
                photo:require("../../assets/fila_survetement_bas.png")
            },
            {
                nom:"Survet Haut Fila ",
                prix:"21,84",
                couleur:["cyan","blue"],
                categorie :"Survetement",
                photo:require("../../assets/fila_survetement_haut.png")
            },
            {
                nom:"Basket Fila ",
                prix:"78,00",
                couleur:["green","black"],
                categorie :"Chaussures",
                photo:require("../../assets/fila_basket.png")
            },
            {
                nom:"casquette Fila ",
                prix:"13,20",
                couleur:["yellow","cyan"],
                categorie :"Casquette",
                photo:require("../../assets/fila_casquette.png")
            },
            {
                nom:"Survet Bas Fila ",
                prix:"47,62",
                couleur:["blue","green","gray"],
                categorie :"Survetement",
                photo:require("../../assets/fila_survetement_bas.png")
            },
            {
                nom:"Survet Haut Fila ",
                prix:"21,84",
                couleur:["black","red",],
                categorie :"Survetement",
                photo:require("../../assets/fila_survetement_haut.png")
            },
            {
                nom:"Basket Fila ",
                prix:"78,00",
                couleur:["gray","white","pink"],
                categorie :"Chaussures",
                photo:require("../../assets/fila_basket.png")
            },
            {
                nom:"casquette Fila ",
                prix:"13,20",
                couleur:["blue","red","yellow","pink"],
                categorie :"Casquette",
                photo:require("../../assets/fila_casquette.png")
            },
            
            
        ]

        },
        {
            id:1,
            nom_marque:"Nike",
            photo_marque:"https://images.asos-media.com/products/nike-robe-col-montant-a-manches-kimono-et-logo-de-la-marque-noir/14881789-1-black?$n_640w$&wid=513&fit=constrain",
            categorie:["Sport","Hauts","Chaussures"],
            date_limite_heure:2,
            date_limite_minute:19,
            solde:30,
            nombre_articles:63

        }
        ,
        {
            id:2,
            nom_marque:"Adidas",
            photo_marque:"https://www.peah.fr/wp-content/uploads/2016/02/adidas_messi_football.jpg",
            categorie:["Sport","Hauts","Chaussures"],
            date_limite_heure:3,
            date_limite_minute:53,
            solde:45,
            nombre_articles:114

        }
        ,
        {
            id:3,
            nom_marque:"Gucci",
            photo_marque:"https://photographemodeparis.files.wordpress.com/2015/03/photographe-mode-mannequin-homme1.jpg",
            categorie:["Pantalons","Hauts","Chaussures","Accessoires"],
            date_limite_heure:4,
            date_limite_minute:1,
            solde:10,
            nombre_articles:376

        }
        ,
        {
            id:4,
            nom_marque:"Converse",
            photo_marque:"https://i.etsystatic.com/18456818/r/il/27aad6/3530872722/il_570xN.3530872722_5bsv.jpg",
            categorie:["Chaussures"],
            date_limite_heure:10,
            date_limite_minute:20,
            solde:70,
            nombre_articles:148

        }
        ,
        {
            id:5,
            nom_marque:"Sephora",
            photo_marque:"https://www.sephora.fr/on/demandware.static/-/Sites/default/dw25e2e9ad/1200x600-generique-03.jpg",
            categorie:["Maquillage"],
            date_limite_heure:10,
            date_limite_minute:20,
            solde:70,
            nombre_articles:148

        }
        ,
        {
            id:6,
            nom_marque:"BlackMarket",
            photo_marque:"https://labomobile.net/wp-content/uploads/2020/10/banniere-iphone-12.jpg",
            categorie:["Telephone","Ipad","Montre"],
            date_limite_heure:10,
            date_limite_minute:20,
            solde:70,
            nombre_articles:148

        }
        ,
        {
            id:7,
            nom_marque:"4in1",
            photo_marque:"https://image.darty.com/darty?type=image&source=/market/2021/03/14/mkp_-jzvdEWYaZCGyw.jpeg&width=450&height=300&quality=90&effects=Pad(CC,FFFFFF)",
            categorie:["Telephone","Ipad","Montre"],
            date_limite_heure:10,
            date_limite_minute:20,
            solde:70,
            nombre_articles:148

        }]

    const [userIsconnected,setuserIsconnected] = useState(true)
    const window = Dimensions.get("window");
    const valeur1 = window.width - 4 
    const valeur2= window.width - 5

    useEffect(() => {

        const unsubscribe = NetInfo.addEventListener(state => {
            if(state.isConnected){
                setuserIsconnected(true)
                console.log("connecte")
            }
            else{
                setuserIsconnected(false)
                console.log("deconnecte")
            }
          });
          
          
          unsubscribe();
    },[])

    const [header_item_touteslesventes,setheader_item_touteslesventes] = useState(true)
    const [header_item_sport,setheader_item_sport] = useState(false)
    const [header_item_techno,setheader_item_techno] = useState(false)
    const [header_item_chaussure,setheader_item_chaussure] = useState(false)
    const [header_item_homme,setheader_item_homme] = useState(false)
    const [header_item_femme,setheader_item_femme] = useState(false)
    const scrollListReftop = useRef()
    const scrollListRefContent = useRef()


    const ScrollHeader = (value) => {
        if(value == "touteslesventes"){
            setheader_item_touteslesventes(true)
            setheader_item_sport(false)
            setheader_item_techno(false)
            setheader_item_chaussure(false)
            setheader_item_homme(false)
            setheader_item_femme(false)
            scrollListRefContent.current.scrollTo({x:valeur2 * 0,y:0,animated:true})
        }
        if(value == "sport"){
            setheader_item_touteslesventes(false)
            setheader_item_sport(true)
            setheader_item_techno(false)
            setheader_item_chaussure(false)
            setheader_item_homme(false)
            setheader_item_femme(false)
            scrollListRefContent.current.scrollTo({x:valeur2 * 1,y:0,animated:true})
        }
        if(value == "techno"){
            setheader_item_touteslesventes(false)
            setheader_item_sport(false)
            setheader_item_techno(true)
            setheader_item_chaussure(false)
            setheader_item_homme(false)
            setheader_item_femme(false)
            scrollListRefContent.current.scrollTo({x:valeur2 * 2,y:0,animated:true})
        }
        if(value == "chaussure"){
            setheader_item_touteslesventes(false)
            setheader_item_sport(false)
            setheader_item_techno(false)
            setheader_item_chaussure(true)
            setheader_item_homme(false)
            setheader_item_femme(false)
            scrollListRefContent.current.scrollTo({x:valeur2 * 3,y:0,animated:true})
        }
        if(value == "homme"){
            setheader_item_touteslesventes(false)
            setheader_item_sport(false)
            setheader_item_techno(false)
            setheader_item_chaussure(false)
            setheader_item_homme(true)
            setheader_item_femme(false)
            scrollListRefContent.current.scrollTo({x:valeur2 * 4,y:0,animated:true})
        }
        if(value == "femme"){
            setheader_item_touteslesventes(false)
            setheader_item_sport(false)
            setheader_item_techno(false)
            setheader_item_chaussure(false)
            setheader_item_homme(false)
            setheader_item_femme(true)
            scrollListRefContent.current.scrollTo({x:valeur2 * 5,y:0,animated:true})
        }
    }

    const onscrollContent = (event) => {

        const x = event.nativeEvent.contentOffset.x
        console.log("valeur de "+x)
        if(event.nativeEvent.contentOffset.x < 1)
        {
            if(event.nativeEvent.contentOffset.x < 1){
                scrollListReftop.current.scrollTo({x: 150*0 ,y:0,animated:true})     
                setheader_item_touteslesventes(true)
                setheader_item_sport(false)
                setheader_item_techno(false)
                setheader_item_chaussure(false)
                setheader_item_homme(false)
                setheader_item_femme(false)
            }
        }    
        if(event.nativeEvent.contentOffset.x > valeur1*0)
        {
            if(event.nativeEvent.contentOffset.x < valeur1*1){
                scrollListReftop.current.scrollTo({x: 150*0 ,y:0,animated:true})     
                setheader_item_touteslesventes(false)
                setheader_item_sport(true)
                setheader_item_techno(false)
                setheader_item_chaussure(false)
                setheader_item_homme(false)
                setheader_item_femme(false)
            }
        }    
        if(event.nativeEvent.contentOffset.x > valeur1*1)
        {
            if(event.nativeEvent.contentOffset.x < valeur1*2){
                scrollListReftop.current.scrollTo({x: (138*1)+(15*1)+(138/3),y:0,animated:false})     
                setheader_item_touteslesventes(false)
                setheader_item_sport(false)
                setheader_item_techno(true)
                setheader_item_chaussure(false)
                setheader_item_homme(false)
                setheader_item_femme(false)
            }
        }   
        if(event.nativeEvent.contentOffset.x > valeur1*2)
        {
            if(event.nativeEvent.contentOffset.x < valeur1*3){
                scrollListReftop.current.scrollTo({x: (138*2)+(15*2)+(138/3),y:0,animated:false})     
                setheader_item_touteslesventes(false)
                setheader_item_sport(false)
                setheader_item_techno(false)
                setheader_item_chaussure(true)
                setheader_item_homme(false)
                setheader_item_femme(false)
            }
        }   
        if(event.nativeEvent.contentOffset.x > valeur1*3)
        {
            if(event.nativeEvent.contentOffset.x < valeur1*4){
                scrollListReftop.current.scrollTo({x: (138*3)+(15*3)+(138/3),y:0,animated:false})     
                setheader_item_touteslesventes(false)
                setheader_item_sport(false)
                setheader_item_techno(false)
                setheader_item_chaussure(false)
                setheader_item_homme(true)
                setheader_item_femme(false)
            }
        }   
        if(event.nativeEvent.contentOffset.x > valeur1*4)
        {
            if(event.nativeEvent.contentOffset.x < valeur1*5){
                scrollListReftop.current.scrollTo({x: (138*4)+(15*4)+(138/3),y:0,animated:false})     
                setheader_item_touteslesventes(false)
                setheader_item_sport(false)
                setheader_item_techno(false)
                setheader_item_chaussure(false)
                setheader_item_homme(false)
                setheader_item_femme(true)
            }
        }   

}



  return (
               
        <View style={{flex:1,display:"flex",flexDirection:"row"}}>
            <View style={{width:5}} />
            <View style={{flex:1}}>
                <View style={{height:10}} />
                <Text style={{width:300,textAlign:"left",fontSize:15}}> Trouvez toutes nos boutiques en ligne! </Text>
                <View style={{height:10}} />
                <View style={{height:75}}>
                  <ScrollView  ref={scrollListReftop}   horizontal  contentContainerStyle={{}}  showsHorizontalScrollIndicator={false}>
                        <View style={{flexDirection:"row"}}>
                            <TouchableOpacity style={{width:138,height:48,flexDirection:"row",borderWidth:1,borderColor:"white",borderRadius:10,justifyContent:"center",alignItems:"center",backgroundColor:header_item_touteslesventes ? "rgba(43,126,204,0.9)":"rgba(43,126,204,0.4)"}}  onPress={() => ScrollHeader("touteslesventes")} >
                            <MaterialCommunityIcons name="border-all" size={20} color="white" />
                                <Text style={{fontSize:13,color:"white",left:2}}>
                                    Toute catégorie 
                                </Text>
                            </TouchableOpacity>
                            <View style={{width:15}}/>
                            <TouchableOpacity style={{width:138,height:48,flexDirection:"row",borderWidth:1,borderColor:"white",borderRadius:10,justifyContent:"center",alignItems:"center",backgroundColor:header_item_sport ? "rgba(43,126,204,0.9)":"rgba(43,126,204,0.4)"}} onPress={() => ScrollHeader("sport")}>
                                <MaterialIcons name="directions-run" size={20} color="white" />
                                <Text style={{fontSize:13,color:"white",left:2}}>
                                    Sport
                                </Text>
                            </TouchableOpacity>                           
                             <View style={{width:15}}/>
                             <TouchableOpacity style={{width:138,height:48,flexDirection:"row",borderWidth:1,borderColor:"white",borderRadius:10,justifyContent:"center",alignItems:"center",backgroundColor:header_item_techno ? "rgba(43,126,204,0.9)":"rgba(43,126,204,0.4)"}}  onPress={() => ScrollHeader("techno")}>
                                 <Entypo name="mobile" size={20} color="white" />
                                <Text style={{fontSize:13,color:"white",left:4}}>
                                    Technologie
                                </Text>
                            </TouchableOpacity>
                            <View style={{width:15}}/>
                            <TouchableOpacity style={{width:138,height:48,flexDirection:"row",borderWidth:1,borderColor:"white",borderRadius:10,justifyContent:"center",alignItems:"center",backgroundColor:header_item_chaussure ? "rgba(43,126,204,0.9)":"rgba(43,126,204,0.4)"}}  onPress={() => ScrollHeader("chaussure")}>
                                <MaterialCommunityIcons name="shoe-sneaker" size={22} color="white" />
                                <Text style={{fontSize:13,color:"white",left:2}}>
                                    Chaussures
                                </Text>
                            </TouchableOpacity>
                            <View style={{width:15}}/>
                            <TouchableOpacity style={{width:138,height:48,flexDirection:"row",borderWidth:1,borderColor:"white",borderRadius:10,justifyContent:"center",alignItems:"center",backgroundColor:header_item_homme ? "rgba(43,126,204,0.9)":"rgba(43,126,204,0.4)"}}  onPress={() => ScrollHeader("homme")}>
                             <Ionicons name="man-sharp" size={24} color="white" />
                                <Text style={{fontSize:13,color:"white",left:3}}>
                                    Homme
                                </Text>
                            </TouchableOpacity>
                            <View style={{width:15}}/>
                            <TouchableOpacity style={{width:138,height:48,flexDirection:"row",borderWidth:1,borderColor:"white",borderRadius:10,justifyContent:"center",alignItems:"center",backgroundColor:header_item_femme ? "rgba(43,126,204,0.9)":"rgba(43,126,204,0.4)"}}  onPress={() => ScrollHeader("femme")}>
                               <Ionicons name="woman" size={24} color="white" />
                                <Text style={{fontSize:13,color:"white",left:3}}>
                                    Femme
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View style={{flex:1}}>
                  <ScrollView  ref={scrollListRefContent} onScroll={(event) => onscrollContent(event)}      scrollEventThrottle={1600}  horizontal  showsHorizontalScrollIndicator={false} snapToInterval={valeur2} decelerationRate="fast" >
                        <View style={{flexDirection:"row"}}>

                            <View style={{width:valeur2,flexDirection:"row"}}>  
                              <ScrollView    showsHorizontalScrollIndicator={false}>
                                {
                                    data_boutique.map((data) => {
                                        return (
                                <TouchableOpacity onPress={() =>navigation.navigate("Description_boutique",{data_props:data })}>
                                    <View style={{height:370,borderRadius:5,backgroundColor:"#2B7ECC"}}>
                                        <View style={{flex:0.85}}>
                                            <ImageBackground source={{uri:data.photo_marque}} resizeMode="cover" style={{height:"100%",width:"100%",borderRadius:10,justifyContent:"flex-start"}}>
                                                <View style={{height:35,width:80,position:"absolute",right:0,left:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-start"}}>
                                                <MaterialCommunityIcons name="timer-outline"  size={14} color="white" />
                                                <Text style={{color:"white",fontSize:13,left:4}}>
                                                            {data.date_limite_heure}H:
                                                 </Text>
                                                <Text style={{color:"white",fontSize:13,left:2}}>
                                                            {data.date_limite_minute}M
                                                </Text>
                                                </View>
                                                
                                                <View style={{height:35,width:80,position:"absolute",top:0,right:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-end"}}>
                                                <Ionicons name="md-remove-circle-outline" size={14} color="white" />
                                                  <Text style={{color:"white",fontSize:13,left:3}}>
                                                        {data.solde} %
                                                    </Text>
                                                </View>

                                                <View style={{height:35,width:"auto",paddingLeft:10,paddingRight:10,position:"absolute",right:0,bottom:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-start"}}>
                                                <AntDesign name="skin" size={14} color="white"  />
                                                <Text style={{color:"white",fontSize:13,left:4}}>
                                                            {data.nombre_articles} articles
                                                </Text>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                        <View style={{flex:0.15,padding:5}}>
                                            <View style={{flex:1,justifyContent:"space-around"}}>
                                                <Text style={{color:"white",fontSize:15,flex:1}}> <Entypo name="shop" size={18} color="white" />  {data.nom_marque.toUpperCase()} </Text>
                                                <View style={{flex:1,flexDirection:"row"}}>
                                                        {
                                                            data.categorie.map((don) => {
                                                                return(
                                                                    <View style={{flexDirection:"row"}}>
                                                                         <View style={{borderWidth:1,backgroundColor:"white",borderColor:"transparent",borderRadius:5,padding:5,justifyContent:"center",alignItems:"center"}}>
                                                                                <Text style={{color:"rgba(43,126,204,1)",fontWeight:"600"}}>
                                                                                    {don}
                                                                                </Text>
                                                                         </View>    
                                                                         <View style={{width:5}} />
                                                                    </View>
                                                                    
                                                                )
                                                            })
                                                        }
                                                </View>
                                            </View>
                                            
                                           
                                        </View>
                                    </View>
                                    <View style={{height:15}} />
                                </TouchableOpacity>
                                    
                                        )
                                    })
                                }
                                    
                                  
                                </ScrollView>
                                <View style={{width:5}} />
                            </View>
                            
                          

                            
                            <View style={{width:valeur2,flexDirection:"row"}}>  
                              <ScrollView    showsHorizontalScrollIndicator={false}>
                                {
                                    data_boutique.filter(function(data) {
                                            return data.categorie.includes("Sport") 

                                    }).map((data) => {
                                        return (
                                <View>
                                    <View style={{height:370,borderRadius:5,backgroundColor:"#2B7ECC"}}>
                                        <View style={{flex:0.85}}>
                                            <ImageBackground source={{uri:data.photo_marque}} resizeMode="cover" style={{height:"100%",width:"100%",borderRadius:10,justifyContent:"flex-start"}}>
                                                <View style={{height:35,width:80,position:"absolute",right:0,left:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-start"}}>
                                                <MaterialCommunityIcons name="timer-outline"  size={14} color="white" />
                                                <Text style={{color:"white",fontSize:13,left:4}}>
                                                            {data.date_limite_heure}H:
                                                 </Text>
                                                <Text style={{color:"white",fontSize:13,left:2}}>
                                                            {data.date_limite_minute}M
                                                </Text>
                                                </View>
                                                
                                                <View style={{height:35,width:80,position:"absolute",top:0,right:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-end"}}>
                                                <Ionicons name="md-remove-circle-outline" size={14} color="white" />
                                                  <Text style={{color:"white",fontSize:13,left:3}}>
                                                        {data.solde} %
                                                    </Text>
                                                </View>

                                                <View style={{height:35,width:"auto",paddingLeft:10,paddingRight:10,position:"absolute",right:0,bottom:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-start"}}>
                                                <AntDesign name="skin" size={14} color="white"  />
                                                <Text style={{color:"white",fontSize:13,left:4}}>
                                                            {data.nombre_articles} articles
                                                </Text>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                        <View style={{flex:0.15,padding:5}}>
                                            <View style={{flex:1,justifyContent:"space-around"}}>
                                                <Text style={{color:"white",fontSize:15,flex:1}}> <Entypo name="shop" size={18} color="white" />  {data.nom_marque.toUpperCase()} </Text>
                                                <View style={{flex:1,flexDirection:"row"}}>
                                                        {
                                                            data.categorie.map((don) => {
                                                                return(
                                                                    <View style={{flexDirection:"row"}}>
                                                                         <View style={{borderWidth:1,backgroundColor:"white",borderColor:"transparent",borderRadius:5,padding:5,justifyContent:"center",alignItems:"center"}}>
                                                                                <Text style={{color:"rgba(43,126,204,1)",fontWeight:"600"}}>
                                                                                    {don}
                                                                                </Text>
                                                                         </View>    
                                                                         <View style={{width:5}} />
                                                                    </View>
                                                                    
                                                                )
                                                            })
                                                        }
                                                </View>
                                            </View>
                                            
                                           
                                        </View>
                                    </View>
                                    <View style={{height:15}} />
                                </View>
                                    
                                        )
                                    })
                                }
                                    
                                  
                                </ScrollView>
                                <View style={{width:5}} />
                            </View>

                            <View style={{width:valeur2,flexDirection:"row"}}>  
                              <ScrollView    showsHorizontalScrollIndicator={false}>
                                {
                                    data_boutique.filter(function(data) {
                                            return data.categorie.includes("Ipad")  

                                    }).map((data) => {
                                        return (
                                <View>
                                    <View style={{height:370,borderRadius:5,backgroundColor:"#2B7ECC"}}>
                                        <View style={{flex:0.85}}>
                                            <ImageBackground source={{uri:data.photo_marque}} resizeMode="cover" style={{height:"100%",width:"100%",borderRadius:10,justifyContent:"flex-start"}}>
                                                <View style={{height:35,width:80,position:"absolute",right:0,left:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-start"}}>
                                                <MaterialCommunityIcons name="timer-outline"  size={14} color="white" />
                                                <Text style={{color:"white",fontSize:13,left:4}}>
                                                            {data.date_limite_heure}H:
                                                 </Text>
                                                <Text style={{color:"white",fontSize:13,left:2}}>
                                                            {data.date_limite_minute}M
                                                </Text>
                                                </View>
                                                
                                                <View style={{height:35,width:80,position:"absolute",top:0,right:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-end"}}>
                                                <Ionicons name="md-remove-circle-outline" size={14} color="white" />
                                                  <Text style={{color:"white",fontSize:13,left:3}}>
                                                        {data.solde} %
                                                    </Text>
                                                </View>

                                                <View style={{height:35,width:"auto",paddingLeft:10,paddingRight:10,position:"absolute",right:0,bottom:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-start"}}>
                                                <AntDesign name="skin" size={14} color="white"  />
                                                <Text style={{color:"white",fontSize:13,left:4}}>
                                                            {data.nombre_articles} articles
                                                </Text>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                        <View style={{flex:0.15,padding:5}}>
                                            <View style={{flex:1,justifyContent:"space-around"}}>
                                                <Text style={{color:"white",fontSize:15,flex:1}}> <Entypo name="shop" size={18} color="white" />  {data.nom_marque.toUpperCase()} </Text>
                                                <View style={{flex:1,flexDirection:"row"}}>
                                                        {
                                                            data.categorie.map((don) => {
                                                                return(
                                                                    <View style={{flexDirection:"row"}}>
                                                                         <View style={{borderWidth:1,backgroundColor:"white",borderColor:"transparent",borderRadius:5,padding:5,justifyContent:"center",alignItems:"center"}}>
                                                                                <Text style={{color:"rgba(43,126,204,1)",fontWeight:"600"}}>
                                                                                    {don}
                                                                                </Text>
                                                                         </View>    
                                                                         <View style={{width:5}} />
                                                                    </View>
                                                                    
                                                                )
                                                            })
                                                        }
                                                </View>
                                            </View>
                                            
                                           
                                        </View>
                                    </View>
                                    <View style={{height:15}} />
                                </View>
                                    
                                        )
                                    })
                                }
                                    
                                  
                                </ScrollView>
                                <View style={{width:5}} />
                            </View>

                            <View style={{width:valeur2,flexDirection:"row"}}>  
                              <ScrollView    showsHorizontalScrollIndicator={false}>
                                {
                                    data_boutique.filter(function(data) {
                                            return data.categorie.includes("Chaussures")  

                                    }).map((data) => {
                                        return (
                                <View>
                                    <View style={{height:370,borderRadius:5,backgroundColor:"#2B7ECC"}}>
                                        <View style={{flex:0.85}}>
                                            <ImageBackground source={{uri:data.photo_marque}} resizeMode="cover" style={{height:"100%",width:"100%",borderRadius:10,justifyContent:"flex-start"}}>
                                                <View style={{height:35,width:80,position:"absolute",right:0,left:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-start"}}>
                                                <MaterialCommunityIcons name="timer-outline"  size={14} color="white" />
                                                <Text style={{color:"white",fontSize:13,left:4}}>
                                                            {data.date_limite_heure}H:
                                                 </Text>
                                                <Text style={{color:"white",fontSize:13,left:2}}>
                                                            {data.date_limite_minute}M
                                                </Text>
                                                </View>
                                                
                                                <View style={{height:35,width:80,position:"absolute",top:0,right:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-end"}}>
                                                <Ionicons name="md-remove-circle-outline" size={14} color="white" />
                                                  <Text style={{color:"white",fontSize:13,left:3}}>
                                                        {data.solde} %
                                                    </Text>
                                                </View>

                                                <View style={{height:35,width:"auto",paddingLeft:10,paddingRight:10,position:"absolute",right:0,bottom:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-start"}}>
                                                <AntDesign name="skin" size={14} color="white"  />
                                                <Text style={{color:"white",fontSize:13,left:4}}>
                                                            {data.nombre_articles} articles
                                                </Text>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                        <View style={{flex:0.15,padding:5}}>
                                            <View style={{flex:1,justifyContent:"space-around"}}>
                                                <Text style={{color:"white",fontSize:15,flex:1}}> <Entypo name="shop" size={18} color="white" />  {data.nom_marque.toUpperCase()} </Text>
                                                <View style={{flex:1,flexDirection:"row"}}>
                                                        {
                                                            data.categorie.map((don) => {
                                                                return(
                                                                    <View style={{flexDirection:"row"}}>
                                                                         <View style={{borderWidth:1,backgroundColor:"white",borderColor:"transparent",borderRadius:5,padding:5,justifyContent:"center",alignItems:"center"}}>
                                                                                <Text style={{color:"rgba(43,126,204,1)",fontWeight:"600"}}>
                                                                                    {don}
                                                                                </Text>
                                                                         </View>    
                                                                         <View style={{width:5}} />
                                                                    </View>
                                                                    
                                                                )
                                                            })
                                                        }
                                                </View>
                                            </View>
                                            
                                           
                                        </View>
                                    </View>
                                    <View style={{height:15}} />
                                </View>
                                    
                                        )
                                    })
                                }
                                    
                                
                                  
                                </ScrollView>
                                <View style={{width:5}} />
                            </View>
                                
                            
                            <View style={{width:valeur2,flexDirection:"row"}}>  
                              <ScrollView    showsHorizontalScrollIndicator={false}>
                                {
                                    data_boutique.filter(function(data) {
                                            return data.categorie.includes("Chaussures")  

                                    }).map((data) => {
                                        return (
                                <View>
                                    <View style={{height:370,borderRadius:5,backgroundColor:"#2B7ECC"}}>
                                        <View style={{flex:0.85}}>
                                            <ImageBackground source={{uri:data.photo_marque}} resizeMode="cover" style={{height:"100%",width:"100%",borderRadius:10,justifyContent:"flex-start"}}>
                                                <View style={{height:35,width:80,position:"absolute",right:0,left:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-start"}}>
                                                <MaterialCommunityIcons name="timer-outline"  size={14} color="white" />
                                                <Text style={{color:"white",fontSize:13,left:4}}>
                                                            {data.date_limite_heure}H:
                                                 </Text>
                                                <Text style={{color:"white",fontSize:13,left:2}}>
                                                            {data.date_limite_minute}M
                                                </Text>
                                                </View>
                                                
                                                <View style={{height:35,width:80,position:"absolute",top:0,right:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-end"}}>
                                                <Ionicons name="md-remove-circle-outline" size={14} color="white" />
                                                  <Text style={{color:"white",fontSize:13,left:3}}>
                                                        {data.solde} %
                                                    </Text>
                                                </View>

                                                <View style={{height:35,width:"auto",paddingLeft:10,paddingRight:10,position:"absolute",right:0,bottom:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-start"}}>
                                                <AntDesign name="skin" size={14} color="white"  />
                                                <Text style={{color:"white",fontSize:13,left:4}}>
                                                            {data.nombre_articles} articles
                                                </Text>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                        <View style={{flex:0.15,padding:5}}>
                                            <View style={{flex:1,justifyContent:"space-around"}}>
                                                <Text style={{color:"white",fontSize:15,flex:1}}> <Entypo name="shop" size={18} color="white" />  {data.nom_marque.toUpperCase()} </Text>
                                                <View style={{flex:1,flexDirection:"row"}}>
                                                        {
                                                            data.categorie.map((don) => {
                                                                return(
                                                                    <View style={{flexDirection:"row"}}>
                                                                         <View style={{borderWidth:1,backgroundColor:"white",borderColor:"transparent",borderRadius:5,padding:5,justifyContent:"center",alignItems:"center"}}>
                                                                                <Text style={{color:"rgba(43,126,204,1)",fontWeight:"600"}}>
                                                                                    {don}
                                                                                </Text>
                                                                         </View>    
                                                                         <View style={{width:5}} />
                                                                    </View>
                                                                    
                                                                )
                                                            })
                                                        }
                                                </View>
                                            </View>
                                            
                                           
                                        </View>
                                    </View>
                                    <View style={{height:15}} />
                                </View>
                                    
                                        )
                                    })
                                }
                                    
                                
                                  
                                </ScrollView>
                                <View style={{width:5}} />
                            </View>


                            <View style={{width:valeur2,flexDirection:"row"}}>  
                              <ScrollView    showsHorizontalScrollIndicator={false}>
                                {
                                    data_boutique.filter(function(data) {
                                            return data.categorie.includes("Maquillage")  

                                    }).map((data) => {
                                        return (
                                <View>
                                    <View style={{height:370,borderRadius:5,backgroundColor:"#2B7ECC"}}>
                                        <View style={{flex:0.85}}>
                                            <ImageBackground source={{uri:data.photo_marque}} resizeMode="cover" style={{height:"100%",width:"100%",borderRadius:10,justifyContent:"flex-start"}}>
                                                <View style={{height:35,width:80,position:"absolute",right:0,left:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-start"}}>
                                                <MaterialCommunityIcons name="timer-outline"  size={14} color="white" />
                                                <Text style={{color:"white",fontSize:13,left:4}}>
                                                            {data.date_limite_heure}H:
                                                 </Text>
                                                <Text style={{color:"white",fontSize:13,left:2}}>
                                                            {data.date_limite_minute}M
                                                </Text>
                                                </View>
                                                
                                                <View style={{height:35,width:80,position:"absolute",top:0,right:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-end"}}>
                                                <Ionicons name="md-remove-circle-outline" size={14} color="white" />
                                                  <Text style={{color:"white",fontSize:13,left:3}}>
                                                        {data.solde} %
                                                    </Text>
                                                </View>

                                                <View style={{height:35,width:"auto",paddingLeft:10,paddingRight:10,position:"absolute",right:0,bottom:0,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(43,126,204,0.4)",alignSelf:"flex-start"}}>
                                                <AntDesign name="skin" size={14} color="white"  />
                                                <Text style={{color:"white",fontSize:13,left:4}}>
                                                            {data.nombre_articles} articles
                                                </Text>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                        <View style={{flex:0.15,padding:5}}>
                                            <View style={{flex:1,justifyContent:"space-around"}}>
                                                <Text style={{color:"white",fontSize:15,flex:1}}> <Entypo name="shop" size={18} color="white" />  {data.nom_marque.toUpperCase()} </Text>
                                                <View style={{flex:1,flexDirection:"row"}}>
                                                        {
                                                            data.categorie.map((don) => {
                                                                return(
                                                                    <View style={{flexDirection:"row"}}>
                                                                         <View style={{borderWidth:1,backgroundColor:"white",borderColor:"transparent",borderRadius:5,padding:5,justifyContent:"center",alignItems:"center"}}>
                                                                                <Text style={{color:"rgba(43,126,204,1)",fontWeight:"600"}}>
                                                                                    {don}
                                                                                </Text>
                                                                         </View>    
                                                                         <View style={{width:5}} />
                                                                    </View>
                                                                    
                                                                )
                                                            })
                                                        }
                                                </View>
                                            </View>
                                            
                                           
                                        </View>
                                    </View>
                                    <View style={{height:15}} />
                                </View>
                                    
                                        )
                                    })
                                }
                                    
                                
                                  
                                </ScrollView>
                                <View style={{width:5}} />
                            </View>
                
                
                

                        </View>
                    </ScrollView>                    
                </View>
                <View style={{height:30}} />
            </View>            
        </View>
  
  );
}

export default Home

