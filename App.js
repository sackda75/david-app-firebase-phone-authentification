import * as React from 'react'
import * as Font from 'expo-font'

import { SplashScreen } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

import PhoneNumberScreen from './screens/PhoneNumberScreen'
import VerifyScreen from './screens/VerifyScreen'

import HomeScreen from './tab/HomeScreen'
import HomeScreenDetail from './tab/HomeScreenDetail'

import JobsScreen from './tab/JobsScreen'
import JobsScreenDetail from './tab/JobsScreenDetail'

import FormationsScreen from './tab/FormationsScreen'
import FormationsScreenDetail from './tab/FormationsScreenDetail'

import InformationsScreen from './tab/InformationsScreen'
import InformationsScreenDetail from './tab/InformationsScreenDetail'

import CustomDrawerContent from './CustomDrawerContent'
import AboutmeScreen from './drawer/AboutmeScreen'
import DocumentsScreen from './drawer/DocumentsScreen'
import MecontacterScreen from './drawer/MecontacterScreen'

import useLinking from './navigation/useLinking'

// https://dev.to/expolovers/authentification-par-numero-de-telephone-avec-expo-sdk37-et-firebase-4mc9

const navOptionHandler = () => ({
  hearderShown: false
})

const StackHome = createStackNavigator()
function HomeStack() {
    return (
      <StackHome.Navigator initialRouteName='Home' headerMode='none'>
          <StackHome.Screen name='Home' component={HomeScreen} options={navOptionHandler}/>
          <StackHome.Screen name='HomeDetail' component={HomeScreenDetail} options={navOptionHandler}/>
      </StackHome.Navigator>
    )
}

const StackHomeDetail = createStackNavigator()
function HomeDetailStack() {
    return (
      <StackHomeDetail.Navigator initialRouteName='HomeDetail' headerMode='none'>
          <StackHomeDetail.Screen name='HomeDetail' component={HomeScreenDetail} options={navOptionHandler}/>
          <StackHomeDetail.Screen name='Home' component={HomeScreen} options={navOptionHandler}/>
          <StackHomeDetail.Screen name='Jobs' component={JobsScreen} options={navOptionHandler}/>
          <StackHomeDetail.Screen name='JobsDetail' component={JobsScreenDetail} options={navOptionHandler}/>
          <StackHomeDetail.Screen name='Formations' component={FormationsScreen} options={navOptionHandler}/>
          <StackHomeDetail.Screen name='FormationsDetail' component={FormationsScreenDetail} options={navOptionHandler}/>
          <StackHomeDetail.Screen name='Informations' component={InformationsScreen} options={navOptionHandler}/>
          <StackHomeDetail.Screen name='InformationsDetail' component={InformationsScreenDetail} options={navOptionHandler}/>
          <StackHomeDetail.Screen name='Home' component={HomeScreen} options={navOptionHandler}/>
          <StackHomeDetail.Screen name='Aboutme' component={AboutmeScreen} options={navOptionHandler}/>
          <StackHomeDetail.Screen name='Documents' component={DocumentsScreen} options={navOptionHandler}/>
          <StackHomeDetail.Screen name='Mecontacter' component={MecontacterScreen} options={navOptionHandler}/>
          <StackHomeDetail.Screen name='Login' component={LoginScreen} options={navOptionHandler}/>
      </StackHomeDetail.Navigator>
    )
}

const StackJob = createStackNavigator()
function JobStack() {
    return (
      <StackJob.Navigator initialRouteName='Jobs' headerMode='none'>
          <StackJob.Screen name='Jobs' component={JobsScreen} options={navOptionHandler}/>
          <StackJob.Screen name='JobsDetail' component={JobsScreenDetail} options={navOptionHandler}/>
      </StackJob.Navigator>
    )
}

const StackFormation = createStackNavigator()
function FormationStack() {
  return (
    <StackFormation.Navigator initialRouteName='Formations' headerMode='none'>
        <StackFormation.Screen name='Formations' component={FormationsScreen} options={navOptionHandler}/>
        <StackFormation.Screen name='FormationsDetail' component={FormationsScreenDetail} options={navOptionHandler}/>
    </StackFormation.Navigator>
  )
}

const StackInformation = createStackNavigator()
function InformationsStack() {
  return (
    <StackInformation.Navigator initialRouteName='Informations' headerMode='none'>
        <StackInformation.Screen name='Informations' component={InformationsScreen} options={navOptionHandler}/>
        <StackInformation.Screen name='InformationsDetail' component={InformationsScreenDetail} options={navOptionHandler}/>
    </StackInformation.Navigator>
  )
}

const Tab = createBottomTabNavigator()
function TabNavigator() {
  return (
        <Tab.Navigator
              screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                      iconName = focused
                        ? 'home'
                        : 'home-outline';
                    } else if (route.name === 'Jobs') {
                      iconName = focused 
                        ? 'keyboard' 
                        : 'keyboard-outline';
                    } else if (route.name === 'Formations') {
                      iconName = focused 
                        ? 'script' 
                        : 'script-outline';
                    } else if (route.name === 'Informations') {
                      iconName = focused 
                        ? 'magnify' 
                        : 'magnify-plus-outline';
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                  },
              })}
              tabBarOptions={{
                  activeTintColor: '#9400d3',
                  inactiveTintColor: 'black',
              }}
              >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Jobs" component={JobStack} />
                <Tab.Screen name="Formations" component={FormationStack} />
                <Tab.Screen name="Informations" component={InformationsStack} />
        </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator()
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Accueil" drawerContent={CustomDrawerContent}>
        <Drawer.Screen name="Accueil" component={TabNavigator} />
        <Drawer.Screen name="Aboutme" component={AboutmeScreen} />
        <Drawer.Screen name="Documents" component={DocumentsScreen} />
        <Drawer.Screen name="Mecontacter" component={MecontacterScreen} />
    </Drawer.Navigator>
  )
}


const Stack = createStackNavigator()

const App = (props) => {

  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const [initialNavigationState, setInitialNavigationState] = React.useState()
  const containerRef = React.useRef()
  const { getInitialState } = useLinking(containerRef)

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide()

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState())

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          muli: require('./assets/fonts/Muli-VariableFont_wght.ttf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hide()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='phone'
            component={PhoneNumberScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='verify'
            component={VerifyScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='HomeApp'
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App