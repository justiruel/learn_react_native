import {StackNavigator,TabNavigator} from 'react-navigation'
import Welcome from './welcome'
import Splash from './splash'

export const Stack = StackNavigator({
  Splash:{ //ini akan jadi main page karena didefinisikan lebih dahulu
    screen:Splash,
    navigationOptions:{
      header:null //hide header
    }
  },
  Welcome:{
    screen:Welcome,
	navigationOptions:{
      header:null //hide header
    }
  }
})

