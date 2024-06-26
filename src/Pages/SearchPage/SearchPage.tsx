import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PostsContainer } from '../../Components/postsContainer/PostsContainer';
import './SearchPage.css';
import { MobilePostsContainer } from '../../Components/postsContainer/MobilePostsContainer';
/* import SearchBarMobile from '../../Components/SearchBarMobile/SearchBarMobile'; */

const BASE_URL = 'https://loqui-6bmx.onrender.com';

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

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const query = useQuery().get('query') || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>(`${BASE_URL}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (query) {
      const results = posts.filter(
        (post) =>
          post.name.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPosts(results);
    } else {
      setFilteredPosts(posts);
    }
  }, [query, posts]);

  /* const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/search?query=${query}`);
  }; */

  return (
    <div className="flex flex-col w-[100vw] lg:w-[50vw]">
      <div className="text-center mb-6 flex justify-center flex-col">
        {/* <p className="m-4 text-txtdark">Search specific topics:</p>
        <SmTopicButtons /> */}
        {/* <div className="flex justify-center">
          <SearchBarMobile onSearch={handleSearch} />
        </div> */}
        <p className="m-4 text-txtdark">
          Found {filteredPosts.length} threads containing{' '}
          <span className="text-txtbright">"{query}"</span>
        </p>
      </div>
      <div className="max-lg:hidden">
        <PostsContainer
          title="results"
          image={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          }
          posts={filteredPosts}
        />
      </div>

      <div className=" lg:hidden">
        <MobilePostsContainer
          title="results"
          image={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          }
          posts={filteredPosts}
        />
      </div>
    </div>
  );
};

export default SearchPage;
