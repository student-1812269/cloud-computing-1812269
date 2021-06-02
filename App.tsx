import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports.js';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native'
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';
import Header from './src/components/Header';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
// @ts-ignore
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator }  from './src/navigation/index';

const loadFonts = () => {
  return Font.loadAsync({
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  });
};

Amplify.configure(awsconfig);

export function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAuthenticatedUser = async () => {
      const currentUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

      if (currentUser !== null) {
        const userId = currentUser.attributes.sub
        const user = await API.graphql(graphqlOperation(getUser, {
          id: userId
        }))

        if (user.data.getUser) {
          // User already exists
          return;
        }

        const userToCreate = {
          id: userId,
          username: currentUser.username,
          status: 'Start a chat with me'
        }

        return await API.graphql(
          graphqlOperation(
            createUser,
            {
              input: userToCreate
            }
          )
        )
      }
    }
      getAuthenticatedUser();
    }, [])


  if (!isLoading) {
    return (
      <AppLoading 
      startAsync={loadFonts} 
      onFinish={() => setIsLoading(true)} 
      onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="1812269 Messaging App" />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default withAuthenticator(App, {
  signUpConfig: {
    hiddenDefaults: ['phone_number']
  }
})