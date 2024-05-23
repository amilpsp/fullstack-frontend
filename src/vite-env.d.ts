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

interface ThreadPage {
	post: {
		id: number;
		name: string;
		content: string;
		date: string;
		time: string;
		originalPoster: string;
		forum: string;
		replyAmount: number;
	};
	comments: {
		id: number;
		content: string;
		date: string;
		time: string;
		commenter: string;
	};
}