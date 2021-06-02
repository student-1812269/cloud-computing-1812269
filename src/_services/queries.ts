export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      status
      messageThreadUser {
        items {
          id
          userId
          messageThreadId
          createdAt
          updatedAt
          messageThread {
            id
            messageThreadUsers {
              items {
                user {
                  id
                  username
                  status
                }
              }
            }
            lastMessage {
              id
              body
              updatedAt
              user {
                id
                username
              }
            }
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;