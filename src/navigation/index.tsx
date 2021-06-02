import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserListComponent from '../components/UserList/index';
import MessageThreadComponent from '../components/MessageThread';
import React from 'react';
import MessageThreadListComponent from '../components/MessageThreadList';
import { View } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function UsersNavigator() {
  return (
    <Stack.Navigator initialRouteName="Users">
      <Stack.Screen name="Users" component={UserListComponent} />
      <Stack.Screen name="Messages" component={MessageThreadListComponent} />
      <Stack.Screen
        name="MessageThread"
        component={MessageThreadComponent}
        options={({ route })  => ({
          title: route.params.username,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
            </View>
          )
        })}
      />
    </Stack.Navigator>
  );
}

export function MessagesNavigator() {
  return (
    <Stack.Navigator initialRouteName="Messages">
      <Stack.Screen name="Messages" component={MessageThreadListComponent} />
      <Stack.Screen
        name="MessageThread"
        component={MessageThreadComponent}
        options={({ route })  => ({
          title: route.params.username,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
            </View>
          )
        })}
      />
    </Stack.Navigator>
  );
}

export function TabNavigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Users" component={UsersNavigator} />
        <Tab.Screen name="Messages" component={MessagesNavigator} />
      </Tab.Navigator>
  )
}
