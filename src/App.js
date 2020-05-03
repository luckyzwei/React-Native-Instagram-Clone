import "react-native-gesture-handler";

import React from "react";
import { View, Text, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Homepage from "./pages/Homepage";
import ExplorePage from "./pages/ExplorePage";
import NotificationsPage from "./pages/NotificationsPage";
import ProfilePage from "./pages/ProfilePage";

const tabIconSize = 25;
const Tabs = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            paddingVertical: 5,
            backgroundColor: "#ffffff00",
            borderTopWidth: 0,
          },
        }}>
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo name="home" size={tabIconSize} />
            ),
          }}
          name="Home"
          component={Homepage}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign name="search1" size={tabIconSize} />
            ),
          }}
          name="Explore"
          component={ExplorePage}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  borderRadius: 100,
                  borderWidth: 5,
                  borderColor: "#fff",
                  height: 60,
                  width: 60,
                  marginTop: -40,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#D74555",
                }}>
                <AntDesign name="plus" size={tabIconSize} color="#fff" />
              </View>
            ),
          }}
          name="NewPost"
          component={ExplorePage}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign name="hearto" size={tabIconSize} />
            ),
          }}
          name="notifications"
          component={NotificationsPage}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <FeatherIcon name="user" size={tabIconSize} />
            ),
          }}
          name="profile"
          component={ProfilePage}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;