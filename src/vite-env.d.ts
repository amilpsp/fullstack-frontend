/// <reference types="vite/client" />
interface Post {
  id: number;
  name: string;
  content: string;
  date: string;
  time: string;
  originalPoster: string;
  topic: string;
  replies: number;
  lastReply: {
    name: string;
    date: string;
    time: string;
  };
}

interface User {
  name: string;
}
