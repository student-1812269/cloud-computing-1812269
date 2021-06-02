import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Auth } from 'aws-amplify';
import User from '../../_interfaces/user';
import { useNavigation } from '@react-navigation/native';
import { createMessageThreadAsync, createMessageThreadUserAsync } from '../../_services/messageThread';
import MessageThread from '../../_interfaces/messageThread';
import styles from './styles';

export interface UserListItemComponentProps {
    user: User;
}

const UserListItemComponent = (props: UserListItemComponentProps) => {
    const navigation = useNavigation();

    const onClick = async () => {
        const currentUser = await Auth.currentAuthenticatedUser();
        const currentUserId = currentUser.attributes.sub;
        const otherUserId = props.user.id;

        const messageThread: Promise<MessageThread> = createMessageThreadAsync();
        createMessageThreadUserAsync((await messageThread).id, currentUserId);
        createMessageThreadUserAsync((await messageThread).id, otherUserId);

        navigation.navigate('MessageThread', {
            id: (await messageThread).id,
            username: props.user.username
        })
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.listContainer}>
                <Text style={styles.username}>{ props.user.username }</Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default UserListItemComponent