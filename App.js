import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component{
  render(){
    return(
        <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen:WriteStoryScreen},
  ReadStory:{screen:ReadStoryScreen}
});

defaultNavigationOptions: ({navigation})=>({
  tabBarIcon:({})=>{
    const routeName = navigation.state.routeName

    if(routeName === 'WriteStory'){
      return(
        <Image 
         source = {require('./assets/WriteBook.png')}
         style = {{width: 100, height: 100}}
        />
     )
      
    }
    else if(routeName === 'ReadStory'){
      return(
        <Image 
          source = {require('./assets/ReadBook.png')}
          style = {{width: 100, height:100}}
        />
      )
    }
  }
})

const AppContainer = createAppContainer(TabNavigator);
