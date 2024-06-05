/// <reference types="vite/client" />
interface Post {
  id: number;
  name: string;
  content: string;
  date: string;
  time: string;
  author: string;
  topic: string;
  replies: number;
  lastReply: {
    author: string;
    date: string;
    time: string;
  };
}

interface User {
	id?: number;
	username: string;
	password?: string;
	token?: string;
}
