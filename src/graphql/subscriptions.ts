/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateMessageThreadUser = /* GraphQL */ `
  subscription OnCreateMessageThreadUser {
    onCreateMessageThreadUser {
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
export const onUpdateMessageThreadUser = /* GraphQL */ `
  subscription OnUpdateMessageThreadUser {
    onUpdateMessageThreadUser {
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
export const onDeleteMessageThreadUser = /* GraphQL */ `
  subscription OnDeleteMessageThreadUser {
    onDeleteMessageThreadUser {
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
export const onCreateMessageThread = /* GraphQL */ `
  subscription OnCreateMessageThread {
    onCreateMessageThread {
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
export const onUpdateMessageThread = /* GraphQL */ `
  subscription OnUpdateMessageThread {
    onUpdateMessageThread {
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
export const onDeleteMessageThread = /* GraphQL */ `
  subscription OnDeleteMessageThread {
    onDeleteMessageThread {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
