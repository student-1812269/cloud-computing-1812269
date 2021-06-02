import User from './user';
import MessageThread from './messageThread';

export default interface MessageThreadUser {
    id: string;
    userId: string;
    messageThreadId: string;
    user: User;
    MessageThread: MessageThread;
}