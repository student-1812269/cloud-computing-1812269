import * as React from 'react';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { View } from 'react-native';
import UserListItemComponent from '../UserListItem';
import { getUsersAsync } from '../../_services/users';
import styles from './styles';

export default function UserListComponent() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const users = await getUsersAsync();
            if (users?.data?.listUsers?.items) {
                setUsers(users.data.listUsers.items);
            }
        }
        getUsers();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({ item }) => <UserListItemComponent user={item} />}
                keyExtractor={(item) => item.id}
                style={{ width: '100%' }}
            />
        </View>
    )
}

