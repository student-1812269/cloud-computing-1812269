import React from 'react';
import {Text, View } from 'react-native';
// @ts-ignore
import { S3Image } from 'aws-amplify-react-native';
import styles from './styles';
import Message from '../../_interfaces/message';

export type MessageThreadProps = {
    message: Message;
    currentUserId: String,
  }

const MessageComponent = (props: MessageThreadProps) => {
  const { message, currentUserId } = props;

  const isMyMessage = () => {
    return message.user.id === currentUserId;
  }

  return (
    <View style={styles.container}>
      <View style={[
        styles.messageBox, {
          backgroundColor: isMyMessage() ? '#feefec' : '#ff7154',
          marginLeft: isMyMessage() ? 50 : 0,
          marginRight: isMyMessage() ? 0 : 50,
        }
      ]}>
        {!isMyMessage() && <Text style={styles.name}>{message.user.username}</Text>}
        {!!message.imageUrl && <S3Image style={styles.image} imgKey={message.imageUrl} />}
        {message && <Text style={styles.message}>{message.body}</Text>}
      </View>
    </View>
  )
}

export default MessageComponent;