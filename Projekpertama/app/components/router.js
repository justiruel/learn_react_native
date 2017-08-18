import {StackNavigator,TabNavigator} from 'react-navigation'
import Props from './global_state'
import State from './State_gue'
import Splash from './splash'

export const Tab = TabNavigator({
  Props:{
    screen:Props
  },
  State:{
    screen:State
  }
})

export const Stack = StackNavigator({ //yang didefinisikan lebih dahulu akan menjadi main page
  splash:{ //ini akan jadi main page karena didefinisikan lebih dahulu
    screen:Splash,
    navigationOptions:{
      header:null //hide header
    }
  },
  Props:{
    screen:Props
  },
  State:{
    screen:State,
    navigationOptions:{ //https://reactnavigation.org/docs/navigators/stack#Screen-Navigation-Options
        title:'State',
        headerStyle:{ backgroundColor: 'rgb(47,54,61)'},
        headerTitleStyle:{
          color:'#ff0000',
          fontFamily:'MuseoSansRounded-300',
          fontWeight:'300',
          textAlign:'center',
          marginRight:56
        }
    }
  },
  Tabku:{
    screen:Tab,
    navigationOptions:{
      title:"tes",
      header:null //hide header
    }

  }
})

