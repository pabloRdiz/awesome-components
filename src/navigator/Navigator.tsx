import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Sreen } from '../screens/Animation101Sreen';
import { Animation102Sreen } from '../screens/Animation102Sreen';
import { SwitchSreen } from '../screens/SwitchSreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefresh } from '../screens/PullToRefresh';
import { CustomSectionList } from '../screens/CustomSectionList';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlideScreen } from '../screens/SlideScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { ThemeContext } from '../contexts/themeContext/ThemeContext';

const Stack = createStackNavigator();

export const Navigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // cardStyle: { backgroundColor: 'white' },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Animation101Screen"
          options={{ headerShown: false }}
          component={Animation101Sreen}
        />
        <Stack.Screen
          name="Animation102Screen"
          options={{ headerShown: false }}
          component={Animation102Sreen}
        />
        <Stack.Screen
          name="SwitchSreen"
          options={{ headerShown: false }}
          component={SwitchSreen}
        />
        <Stack.Screen
          name="AlertScreen"
          options={{ headerShown: false }}
          component={AlertScreen}
        />
        <Stack.Screen
          name="TextInputScreen"
          options={{ headerShown: false }}
          component={TextInputScreen}
        />
        <Stack.Screen
          name="PullToRefresh"
          options={{ headerShown: false }}
          component={PullToRefresh}
        />
        <Stack.Screen
          name="SectionList"
          options={{ headerShown: false }}
          component={CustomSectionList}
        />
        <Stack.Screen
          name="ModalScreen"
          options={{ headerShown: false }}
          component={ModalScreen}
        />
        <Stack.Screen
          name="InfiniteScrollScreen"
          options={{ headerShown: false }}
          component={InfiniteScrollScreen}
        />
        <Stack.Screen
          name="Slide"
          options={{ headerShown: false }}
          component={SlideScreen}
        />
        <Stack.Screen
          name="ChangeTheme"
          options={{ headerShown: false }}
          component={ChangeThemeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
