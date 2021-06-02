import User from '../_interfaces/user';
import { createUser } from '../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

export async function createUserAsync(userToCreate: User) {
    await API.graphql(
        graphqlOperation(
          createUser,
          {
            input: userToCreate
          }
        )
      )
}

