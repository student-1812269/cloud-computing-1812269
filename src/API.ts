/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  status?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string,
  username?: string,
  status?: string | null,
  messageThreadUser?: ModelMessageThreadUserConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelMessageThreadUserConnection = {
  __typename: "ModelMessageThreadUserConnection",
  items?:  Array<MessageThreadUser | null > | null,
  nextToken?: string | null,
};

export type MessageThreadUser = {
  __typename: "MessageThreadUser",
  id?: string,
  userId?: string,
  messageThreadId?: string,
  user?: User,
  messageThread?: MessageThread,
  createdAt?: string,
  updatedAt?: string,
};

export type MessageThread = {
  __typename: "MessageThread",
  id?: string,
  messageThreadUsers?: ModelMessageThreadUserConnection,
  messages?: ModelMessageConnection,
  lastMessageId?: string,
  lastMessage?: Message,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id?: string,
  createdAt?: string,
  body?: string,
  imageUrl?: string | null,
  userId?: string,
  messageThreadId?: string,
  user?: User,
  messageThread?: MessageThread,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  status?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateMessageThreadUserInput = {
  id?: string | null,
  userId: string,
  messageThreadId: string,
};

export type ModelMessageThreadUserConditionInput = {
  userId?: ModelIDInput | null,
  messageThreadId?: ModelIDInput | null,
  and?: Array< ModelMessageThreadUserConditionInput | null > | null,
  or?: Array< ModelMessageThreadUserConditionInput | null > | null,
  not?: ModelMessageThreadUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMessageThreadUserInput = {
  id: string,
  userId?: string | null,
  messageThreadId?: string | null,
};

export type DeleteMessageThreadUserInput = {
  id: string,
};

export type CreateMessageThreadInput = {
  id?: string | null,
  lastMessageId: string,
};

export type ModelMessageThreadConditionInput = {
  lastMessageId?: ModelIDInput | null,
  and?: Array< ModelMessageThreadConditionInput | null > | null,
  or?: Array< ModelMessageThreadConditionInput | null > | null,
  not?: ModelMessageThreadConditionInput | null,
};

export type UpdateMessageThreadInput = {
  id: string,
  lastMessageId?: string | null,
};

export type DeleteMessageThreadInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  createdAt?: string | null,
  body: string,
  imageUrl?: string | null,
  userId: string,
  messageThreadId: string,
};

export type ModelMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  body?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  messageThreadId?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  createdAt?: string | null,
  body?: string | null,
  imageUrl?: string | null,
  userId?: string | null,
  messageThreadId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelMessageThreadUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  messageThreadId?: ModelIDInput | null,
  and?: Array< ModelMessageThreadUserFilterInput | null > | null,
  or?: Array< ModelMessageThreadUserFilterInput | null > | null,
  not?: ModelMessageThreadUserFilterInput | null,
};

export type ModelMessageThreadFilterInput = {
  id?: ModelIDInput | null,
  lastMessageId?: ModelIDInput | null,
  and?: Array< ModelMessageThreadFilterInput | null > | null,
  or?: Array< ModelMessageThreadFilterInput | null > | null,
  not?: ModelMessageThreadFilterInput | null,
};

export type ModelMessageThreadConnection = {
  __typename: "ModelMessageThreadConnection",
  items?:  Array<MessageThread | null > | null,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  body?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  messageThreadId?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    status?: string | null,
    messageThreadUser?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    status?: string | null,
    messageThreadUser?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    status?: string | null,
    messageThreadUser?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageThreadUserMutationVariables = {
  input?: CreateMessageThreadUserInput,
  condition?: ModelMessageThreadUserConditionInput | null,
};

export type CreateMessageThreadUserMutation = {
  createMessageThreadUser?:  {
    __typename: "MessageThreadUser",
    id: string,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageThreadUserMutationVariables = {
  input?: UpdateMessageThreadUserInput,
  condition?: ModelMessageThreadUserConditionInput | null,
};

export type UpdateMessageThreadUserMutation = {
  updateMessageThreadUser?:  {
    __typename: "MessageThreadUser",
    id: string,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageThreadUserMutationVariables = {
  input?: DeleteMessageThreadUserInput,
  condition?: ModelMessageThreadUserConditionInput | null,
};

export type DeleteMessageThreadUserMutation = {
  deleteMessageThreadUser?:  {
    __typename: "MessageThreadUser",
    id: string,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageThreadMutationVariables = {
  input?: CreateMessageThreadInput,
  condition?: ModelMessageThreadConditionInput | null,
};

export type CreateMessageThreadMutation = {
  createMessageThread?:  {
    __typename: "MessageThread",
    id: string,
    messageThreadUsers?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageId: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      body: string,
      imageUrl?: string | null,
      userId: string,
      messageThreadId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      messageThread?:  {
        __typename: "MessageThread",
        id: string,
        lastMessageId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageThreadMutationVariables = {
  input?: UpdateMessageThreadInput,
  condition?: ModelMessageThreadConditionInput | null,
};

export type UpdateMessageThreadMutation = {
  updateMessageThread?:  {
    __typename: "MessageThread",
    id: string,
    messageThreadUsers?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageId: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      body: string,
      imageUrl?: string | null,
      userId: string,
      messageThreadId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      messageThread?:  {
        __typename: "MessageThread",
        id: string,
        lastMessageId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageThreadMutationVariables = {
  input?: DeleteMessageThreadInput,
  condition?: ModelMessageThreadConditionInput | null,
};

export type DeleteMessageThreadMutation = {
  deleteMessageThread?:  {
    __typename: "MessageThread",
    id: string,
    messageThreadUsers?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageId: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      body: string,
      imageUrl?: string | null,
      userId: string,
      messageThreadId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      messageThread?:  {
        __typename: "MessageThread",
        id: string,
        lastMessageId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input?: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    body: string,
    imageUrl?: string | null,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input?: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    body: string,
    imageUrl?: string | null,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input?: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    body: string,
    imageUrl?: string | null,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    status?: string | null,
    messageThreadUser?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMessageThreadUserQueryVariables = {
  id?: string,
};

export type GetMessageThreadUserQuery = {
  getMessageThreadUser?:  {
    __typename: "MessageThreadUser",
    id: string,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessageThreadUsersQueryVariables = {
  filter?: ModelMessageThreadUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessageThreadUsersQuery = {
  listMessageThreadUsers?:  {
    __typename: "ModelMessageThreadUserConnection",
    items?:  Array< {
      __typename: "MessageThreadUser",
      id: string,
      userId: string,
      messageThreadId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      messageThread?:  {
        __typename: "MessageThread",
        id: string,
        lastMessageId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMessageThreadQueryVariables = {
  id?: string,
};

export type GetMessageThreadQuery = {
  getMessageThread?:  {
    __typename: "MessageThread",
    id: string,
    messageThreadUsers?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageId: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      body: string,
      imageUrl?: string | null,
      userId: string,
      messageThreadId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      messageThread?:  {
        __typename: "MessageThread",
        id: string,
        lastMessageId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessageThreadsQueryVariables = {
  filter?: ModelMessageThreadFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessageThreadsQuery = {
  listMessageThreads?:  {
    __typename: "ModelMessageThreadConnection",
    items?:  Array< {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id?: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    body: string,
    imageUrl?: string | null,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      body: string,
      imageUrl?: string | null,
      userId: string,
      messageThreadId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      messageThread?:  {
        __typename: "MessageThread",
        id: string,
        lastMessageId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type MessagesByMessageThreadQueryVariables = {
  messageThreadId?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByMessageThreadQuery = {
  messagesByMessageThread?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      body: string,
      imageUrl?: string | null,
      userId: string,
      messageThreadId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      messageThread?:  {
        __typename: "MessageThread",
        id: string,
        lastMessageId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    status?: string | null,
    messageThreadUser?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    status?: string | null,
    messageThreadUser?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    status?: string | null,
    messageThreadUser?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageThreadUserSubscription = {
  onCreateMessageThreadUser?:  {
    __typename: "MessageThreadUser",
    id: string,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageThreadUserSubscription = {
  onUpdateMessageThreadUser?:  {
    __typename: "MessageThreadUser",
    id: string,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageThreadUserSubscription = {
  onDeleteMessageThreadUser?:  {
    __typename: "MessageThreadUser",
    id: string,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageThreadSubscription = {
  onCreateMessageThread?:  {
    __typename: "MessageThread",
    id: string,
    messageThreadUsers?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageId: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      body: string,
      imageUrl?: string | null,
      userId: string,
      messageThreadId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      messageThread?:  {
        __typename: "MessageThread",
        id: string,
        lastMessageId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageThreadSubscription = {
  onUpdateMessageThread?:  {
    __typename: "MessageThread",
    id: string,
    messageThreadUsers?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageId: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      body: string,
      imageUrl?: string | null,
      userId: string,
      messageThreadId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      messageThread?:  {
        __typename: "MessageThread",
        id: string,
        lastMessageId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageThreadSubscription = {
  onDeleteMessageThread?:  {
    __typename: "MessageThread",
    id: string,
    messageThreadUsers?:  {
      __typename: "ModelMessageThreadUserConnection",
      items?:  Array< {
        __typename: "MessageThreadUser",
        id: string,
        userId: string,
        messageThreadId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageId: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      body: string,
      imageUrl?: string | null,
      userId: string,
      messageThreadId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      messageThread?:  {
        __typename: "MessageThread",
        id: string,
        lastMessageId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    body: string,
    imageUrl?: string | null,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    body: string,
    imageUrl?: string | null,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    body: string,
    imageUrl?: string | null,
    userId: string,
    messageThreadId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      status?: string | null,
      messageThreadUser?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageThread?:  {
      __typename: "MessageThread",
      id: string,
      messageThreadUsers?:  {
        __typename: "ModelMessageThreadUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageId: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        body: string,
        imageUrl?: string | null,
        userId: string,
        messageThreadId: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};
