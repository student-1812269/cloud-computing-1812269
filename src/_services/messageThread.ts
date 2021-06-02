import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createMessageThread, createMessageThreadUser, updateMessageThread } from '../graphql/mutations';
import { messagesByMessageThread, getUser } from '../graphql/queries';

export async function createMessageThreadAsync() {
    try {
        const messageThread = await API.graphql(graphqlOperation(createMessageThread, {
            input: {
                // Create a dummy lastMessageId for the first time we create a chat room
                lastMessageId: "dummy123-1d98-42df-9ce4-9483814c921b"
            }
        }))
        
        if (!messageThread.data.createMessageThread) {
            return;
        }

        return messageThread.data.createMessageThread;
    } catch (error) {
        console.log(error);
    }
}

export async function createMessageThreadUserAsync(messageThreadId: string, userId: string) {
    try {
        return await API.graphql(graphqlOperation(createMessageThreadUser, {
            input: {
                userId: userId,
                messageThreadId: messageThreadId
            }
        }))
    }

    catch (error) {
        console.log(error);
    }
}

export async function setLastMessageAsync(messageThreadId: string, messageId: string) {
    try {
        return await API.graphql(
          graphqlOperation(
            updateMessageThread, {
              input: {
                id: messageThreadId,
                lastMessageId: messageId,
              }
            }
          )
        );
      } catch (e) {
        console.log(e);
      }
}

export async function getMessagesByMessageThreadAsync(routeParamsId: string, sortDirection: string) {
    return await API.graphql(
        graphqlOperation(
          messagesByMessageThread, {
            messageThreadId: routeParamsId,
            sortDirection: sortDirection,
          }
        )
      )
}

export async function getMessageThreadsAsync(userId: string) {
    try {
        return await API.graphql(
            graphqlOperation(
                getUser, {
                    id: userId,
            })
        )
    } catch (e) {
        console.log(e);
    }
}