import {createStackNavigator} from 'react-navigation-stack'
import Description_boutique from '../screen/Client/Description_boutique';
import RouteurComposant from './RouterComposant';




const stackPanel_Interface_Utilisateurs = createStackNavigator({
    Routeur_Home : 
    {
        screen: RouteurComposant ,
        navigationOptions : ({navigation}) => 
        ({
            
            headerStyle:{
                backgroundColor:"transparent",
                elevation:0,
                shadowOpacity:0,
                borderBottomWidth: 0 , 
                height:0
            },
             headerTitle:""
            
        })
    },
    Description_boutique : {
        screen: Description_boutique,
        navigationOptions : ({navigation}) => 
        ({
            headerBackTitle:"Retour",
            headerTintColor:"transparent",

            headerStyle:{
                backgroundColor:"transparent",
                elevation:0,
                shadowOpacity:0,
                borderBottomWidth: 0 ,
                height:0,
            },
             
            
        })
    }
 
})

export default stackPanel_Interface_Utilisateurs;
