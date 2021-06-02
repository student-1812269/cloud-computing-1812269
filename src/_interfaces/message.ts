import User from './user';

export default interface Message {
    id: string;
    user: User;
    body: string;
    imageUrl: string;
    createdAt: string;
}