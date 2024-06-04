import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostsContainer } from '../../Components/postsContainer/PostsContainer';
import { MobilePostsContainer } from '../../Components/postsContainer/MobilePostsContainer';

export const UserPage = () => {
  const { username } = useParams<{ username: string }>();
  const [posts, setPosts] = useState<Post[]>([]);

  const postsContainerInfo = {
    title: 'User threads',
    svg: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-2"
      >
        <g clip-path="url(#clip0_4_266)">
          <path
            d="M38 19.1H30.4L24.7 36.2L13.3 2L7.6 19.1H0"
            stroke="#CFCFCF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_266">
            <rect width="38" height="38" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    posts: posts,
  };

  const handleFetchUserThreads = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/users/${username}`
      );

      setPosts(response.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchUserThreads();
  }, [username]);

  useEffect(() => {
    handleFetchUserThreads();
  }, []);

  return (
    <>
      <span>
<<<<<<< HEAD
        <div className="flex flex-col w-[100vw] lg:w-[50vw] mt-6">
=======
        <div className="flex flex-col w-[100vw] lg:w-[50vw] ">
>>>>>>> 28234b84c880e135b9366ee6e99d5402d94ae03a
          <div className=" max-lg:hidden">
            <PostsContainer
              title={`${username}'s threads`}
              image={postsContainerInfo.svg}
              posts={postsContainerInfo.posts}
            />
          </div>

          <div className=" lg:hidden">
            <MobilePostsContainer
              title={`${username}'s threads`}
              image={postsContainerInfo.svg}
              posts={postsContainerInfo.posts}
            />
          </div>
        </div>
      </span>
    </>
  );
};
