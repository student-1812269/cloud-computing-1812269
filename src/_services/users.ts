import { graphqlOperation, API } from 'aws-amplify';
import { listUsers } from '../graphql/queries';

export async function getUsersAsync() {
    try {
        return await API.graphql(graphqlOperation(listUsers))
    } catch (error) {
       console.log(error);
    }
}
