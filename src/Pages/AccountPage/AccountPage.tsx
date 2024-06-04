import './AccountPage.css';
import { PostsContainer } from '../../Components/postsContainer/PostsContainer';
import { useAuth } from '../../contexts/useAuth';
import BreadcrumbsComp from '../../Components/BreadcrumbsComp/BreadcrumbsComp';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AccountPage = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  const postsContainerInfo = {
    title: 'My threads',
    svg: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-2"
      >
        <g clipPath="url(#clip0_4_266)">
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
        `http://localhost:8080/users/${user?.username}`
      );

      setPosts(response.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user?.username) {
      handleFetchUserThreads();
    }
  }, [user]);

  useEffect(() => {
    if (user?.username) {
      handleFetchUserThreads();
    }
  }, []);

  return (
    <div className="flex flex-col align-stretch w-[100vw] lg:w-[50vw] gap-6">
      <BreadcrumbsComp />

      {user && (
        <div className="">
          <div className="mb-12">
            <h1 className="text-lg cursor-default">My account</h1>

            <div className="flex my-4">
              <p className="mt-1.5 cursor-default">
                Name: <b className="ml-4">{user.username}</b>
              </p>
              <button className="flex justify-center items-center text-txtbright hover:bg-bordercol border-bordercol border-[1px] rounded-lg w-20 h-8 p-4 text-sm ml-6">
                Change
              </button>
            </div>
            <p>
              <u className="cursor-pointer hover:text-white">Change password</u>
            </p>
          </div>
          <PostsContainer
            title={postsContainerInfo.title}
            image={postsContainerInfo.svg}
            posts={postsContainerInfo.posts}
          />
        </div>
      )}
      {!user && (
        <div className="flex text-center m-5 text-xl text-txtbright">
          <p>{'Login to see account info.'}</p>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
