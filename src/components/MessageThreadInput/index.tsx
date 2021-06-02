import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import { useState, useEffect } from 'react';
import { Auth, API, Storage, graphqlOperation } from 'aws-amplify';
import { createMessage } from '../../graphql/mutations';
import * as ImagePicker from 'expo-image-picker';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { setLastMessageAsync } from '../../_services/messageThread';

const MessageThreadInputComponent = (props: any) => {
    const { messageThreadId } = props;
    const [message, setMessage] = useState('');
    const [myUserId, setMyUserId] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const getCurrentUser = async () => {
          const currentUser = await Auth.currentAuthenticatedUser();
          setMyUserId(currentUser.attributes.sub);
        }
        getCurrentUser();
    }, [])

   
  const setLastMessage = async (messageId: string) => {
    setLastMessageAsync(messageThreadId, messageId);
  }

  const onSendPress = async () => {
    try {
      if (image === null && message === '') { 
        alert('Please enter a message to send');
        return; 
      }
      
      let uploadedImage = null;
      
      if (image) {
        uploadedImage = await uploadImage();
      }
      
      const newMessage = await API.graphql(
        graphqlOperation(
          createMessage, {
            input: {
              body: message,
              imageUrl: uploadedImage,
              userId: myUserId,
              messageThreadId
            }
          }
        )
      )

      await setLastMessage(newMessage.data.createMessage.id)
    } catch (e) {
      console.log(e);
    }

    setMessage('');
    setImage(null);
  }

  const onCameraPress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    } else {
      pickImage();
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  const uploadImage = async () => {
    try {
      const response = await fetch(image);

      const blob = await response.blob();

      const urlParts = image.split('.');
      const extension = urlParts[urlParts.length - 1];

      const key = `${uuidv4()}.${extension}`;

      await Storage.put(key, blob);

      return key;

    } catch (error) {
      console.log(error);
    }
  }

  const onPress = () => {
      onSendPress();
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      style={{width: '100%'}}
    >
      {image && <Image source={{ uri: image }} style={styles.previewImage} />}
      {image && <Text style={styles.previewImageText}>Preview.</Text>}
     
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Type a message"}
          style={styles.input}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={onCameraPress}>
          <View style={styles.cameraButton}>
              <MaterialCommunityIcons name="camera" size={28} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.sendButton, message || image ? styles.sendButton : styles.sendButtonDisabled]}>
            <MaterialIcons name="send" size={28} color="white" />
        </View>
      </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default MessageThreadInputComponent;