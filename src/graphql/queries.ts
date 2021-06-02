/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        status
        messageThreadUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessageThreadUser = /* GraphQL */ `
  query GetMessageThreadUser($id: ID!) {
    getMessageThreadUser(id: $id) {
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
export const listMessageThreadUsers = /* GraphQL */ `
  query ListMessageThreadUsers(
    $filter: ModelMessageThreadUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessageThreadUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessageThread = /* GraphQL */ `
  query GetMessageThread($id: ID!) {
    getMessageThread(id: $id) {
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
export const listMessageThreads = /* GraphQL */ `
  query ListMessageThreads(
    $filter: ModelMessageThreadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessageThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const messagesByMessageThread = /* GraphQL */ `
  query MessagesByMessageThread(
    $messageThreadId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByMessageThread(
      messageThreadId: $messageThreadId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
