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

interface Comment {
	id: number;
	content: string;
	date: string;
	time: string;
	commenter: string;
}

interface ThreadPage {
	id: number;
	name: string;
	content: string;
	date: string;
	time: string;
	originalPoster: string;
	topic: string;
	replies: number;
	comments: Comment[];
}

interface NewThreadPage {
	name: string;
	content: string;
	originalPoster: string;
	topic: string;
	replies: number;
	comments: Comment[];
}

interface AccountPage {
	id: string;
	name: string;
	recentThreads: Post[];
}
