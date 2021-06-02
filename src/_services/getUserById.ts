import { getUser } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

export async function getUserByIdAsync(userId: string): Promise<object> {
    return await API.graphql(graphqlOperation(getUser, {
        id: userId
    }))
}

