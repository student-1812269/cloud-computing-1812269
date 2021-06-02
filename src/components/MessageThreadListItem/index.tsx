import React, {useEffect, useState} from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Auth } from 'aws-amplify';
import User from '../../_interfaces/user';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export interface MessageThreadListItemComponentProps {
    user: User;
}

const MessageThreadListItemComponent = (props: any) => {
    const [ otherUser, setOtherUser] = useState(null);
    const [ lastMessage, setLastMessage] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
      const getOtherUser = async () => {
        try {
          const currentUser = await Auth.currentAuthenticatedUser();

          // Set the other user of the thread
          if (props.messageThread.messageThreadUsers.items[0].user.id === currentUser.attributes.sub) {
            setOtherUser(props.messageThread.messageThreadUsers.items[1].user);
          } else {
            setOtherUser(props.messageThread.messageThreadUsers.items[0].user);
          }

          setLastMessage(props.messageThread.lastMessage);
        } catch(error) {
          console.log(error);
        }
      }
        
      getOtherUser();
    }, [])

    const onClick = async () => {
        navigation.navigate('MessageThread', {
            id: props.messageThread.id,
            username: otherUser.username
        })
    }

    if (!otherUser) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.listContainer}>
                <Text style={styles.username}>{ otherUser.username }</Text>
                {lastMessage && <Text style={styles.lastMessage}>{ lastMessage.body }</Text>}
            </View>
        </TouchableWithoutFeedback>
    )
};

export default MessageThreadListItemComponent