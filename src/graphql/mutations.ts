/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMessageThreadUser = /* GraphQL */ `
  mutation CreateMessageThreadUser(
    $input: CreateMessageThreadUserInput!
    $condition: ModelMessageThreadUserConditionInput
  ) {
    createMessageThreadUser(input: $input, condition: $condition) {
      id
      userId
      messageThreadId
      user {
        id
        username
        status
        messageThreadUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      messageThread {
        id
        messageThreadUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          createdAt
          body
          imageUrl
          userId
          messageThreadId
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMessageThreadUser = /* GraphQL */ `
  mutation UpdateMessageThreadUser(
    $input: UpdateMessageThreadUserInput!
    $condition: ModelMessageThreadUserConditionInput
  ) {
    updateMessageThreadUser(input: $input, condition: $condition) {
      id
      userId
      messageThreadId
      user {
        id
        username
        status
        messageThreadUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      messageThread {
        id
        messageThreadUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          createdAt
          body
          imageUrl
          userId
          messageThreadId
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessageThreadUser = /* GraphQL */ `
  mutation DeleteMessageThreadUser(
    $input: DeleteMessageThreadUserInput!
    $condition: ModelMessageThreadUserConditionInput
  ) {
    deleteMessageThreadUser(input: $input, condition: $condition) {
      id
      userId
      messageThreadId
      user {
        id
        username
        status
        messageThreadUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      messageThread {
        id
        messageThreadUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          createdAt
          body
          imageUrl
          userId
          messageThreadId
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMessageThread = /* GraphQL */ `
  mutation CreateMessageThread(
    $input: CreateMessageThreadInput!
    $condition: ModelMessageThreadConditionInput
  ) {
    createMessageThread(input: $input, condition: $condition) {
      id
      messageThreadUsers {
        items {
          id
          userId
          messageThreadId
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          body
          imageUrl
          userId
          messageThreadId
          updatedAt
        }
        nextToken
      }
      lastMessageId
      lastMessage {
        id
        createdAt
        body
        imageUrl
        userId
        messageThreadId
        user {
          id
          username
          status
          createdAt
          updatedAt
        }
        messageThread {
          id
          lastMessageId
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMessageThread = /* GraphQL */ `
  mutation UpdateMessageThread(
    $input: UpdateMessageThreadInput!
    $condition: ModelMessageThreadConditionInput
  ) {
    updateMessageThread(input: $input, condition: $condition) {
      id
      messageThreadUsers {
        items {
          id
          userId
          messageThreadId
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          body
          imageUrl
          userId
          messageThreadId
          updatedAt
        }
        nextToken
      }
      lastMessageId
      lastMessage {
        id
        createdAt
        body
        imageUrl
        userId
        messageThreadId
        user {
          id
          username
          status
          createdAt
          updatedAt
        }
        messageThread {
          id
          lastMessageId
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessageThread = /* GraphQL */ `
  mutation DeleteMessageThread(
    $input: DeleteMessageThreadInput!
    $condition: ModelMessageThreadConditionInput
  ) {
    deleteMessageThread(input: $input, condition: $condition) {
      id
      messageThreadUsers {
        items {
          id
          userId
          messageThreadId
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          body
          imageUrl
          userId
          messageThreadId
          updatedAt
        }
        nextToken
      }
      lastMessageId
      lastMessage {
        id
        createdAt
        body
        imageUrl
        userId
        messageThreadId
        user {
          id
          username
          status
          createdAt
          updatedAt
        }
        messageThread {
          id
          lastMessageId
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      createdAt
      body
      imageUrl
      userId
      messageThreadId
      user {
        id
        username
        status
        messageThreadUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      messageThread {
        id
        messageThreadUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          createdAt
          body
          imageUrl
          userId
          messageThreadId
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      createdAt
      body
      imageUrl
      userId
      messageThreadId
      user {
        id
        username
        status
        messageThreadUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      messageThread {
        id
        messageThreadUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          createdAt
          body
          imageUrl
          userId
          messageThreadId
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      createdAt
      body
      imageUrl
      userId
      messageThreadId
      user {
        id
        username
        status
        messageThreadUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      messageThread {
        id
        messageThreadUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          createdAt
          body
          imageUrl
          userId
          messageThreadId
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
