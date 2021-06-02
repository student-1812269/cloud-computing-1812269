import React, {useEffect, useState} from 'react';
import {FlatList, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {
  API,
  graphqlOperation,
  Auth,
} from 'aws-amplify';
import { onCreateMessage } from '../../graphql/subscriptions';
import Message from "../Message";
import MessageThreadInputComponent from "../MessageThreadInput";
import { getMessagesByMessageThreadAsync } from '../../_services/messageThread';
import styles from './styles';

const MessageThread = () => {

  const [messages, setMessages] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);

  const route = useRoute();

  const getMessagesByMessageThread = async () => {
    const messages = await getMessagesByMessageThreadAsync(route.params.id, "DESC");
    setMessages(messages.data.messagesByMessageThread.items);
  }

  useEffect(() => {
    getMessagesByMessageThread();
  }, [])

  useEffect(() => {
    const getCurrentUserId = async () => {
      const currentUser = await Auth.currentAuthenticatedUser();
      setCurrentUserId(currentUser.attributes.sub);
    }
    getCurrentUserId();
  }, [])

  useEffect(() => {
    // Subscribe so that new messages are loaded on the thread as they are created
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: (data: any) => {
        const newMessage = data.value.data.onCreateMessage;

        if (newMessage.messageThreadId !== route.params.id) {
          return;
        }

       getMessagesByMessageThread();
      }
    });

    return () => subscription.unsubscribe();
  }, [])

  return (
   <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message currentUserId={currentUserId} message={item} />}
        inverted
      />

      <MessageThreadInputComponent messageThreadId={route.params.id} />
    </View>
  );
}

export default MessageThread;