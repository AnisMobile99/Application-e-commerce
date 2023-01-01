import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import Authentification from '../screen/Authentification/Authentification';
import Connexion from '../screen/Authentification/Connexion';
import stackPanel_Interface_Utilisateurs from '../navigation/stackPanel_Interface_Utilisateurs';


const SwitchNavigatorAppli = createSwitchNavigator({
    Authentification:{
        screen : Authentification
    },
    Connexion : {
        screen: Connexion
    },
    Interface_Utilisateur : {
        screen: stackPanel_Interface_Utilisateurs 
    },

})

export const  Navigation_Container = createAppContainer(SwitchNavigatorAppli);