import * as React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { graphqlOperation, API, Auth } from 'aws-amplify';
import { getUser } from '../../_services/queries';
import MessageThreadListItemComponent from '../MessageThreadListItem';
import styles from './styles';

export default function MessageThreadListComponent() {

    const [messageThreads, setMessageThreads] = useState([]);

    useEffect(() => {
        const getMessageThreads = async () => {
            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                const currentUserId = currentUser.attributes.sub;
                const messageThreads = await API.graphql(
                    graphqlOperation(
                        getUser, {
                            id: currentUserId,
                    })
                )

                setMessageThreads(messageThreads.data.getUser.messageThreadUser.items);
            } catch (error) {
                console.log(error);
            }
        }
        getMessageThreads();
    }, []);

    return (
        <View style={styles.container}>
        <FlatList
            style={{width: '100%'}}
            data={messageThreads}
            renderItem={({ item }) => <MessageThreadListItemComponent messageThread={item.messageThread} />}
            keyExtractor={(item) => item.id}
        />
        </View>
    );
}

