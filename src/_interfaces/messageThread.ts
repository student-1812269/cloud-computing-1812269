import Message from './message';
import MessageThreadUser from './messageThreadUser';

export default interface MessageThread {
    id: string;
    messageThreadUsers: MessageThreadUser[];
    lastMessageId: string;
    lastMessage: Message;
}