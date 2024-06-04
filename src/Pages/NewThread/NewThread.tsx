import './NewThread.css';

import BreadcrumbsComp from '../../Components/BreadcrumbsComp/BreadcrumbsComp';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from '../../contexts/useAuth';
import { useNavigate } from 'react-router-dom';

interface PostData {
  author: string | null;
  forum: string | null;
  title: string | null;
  content: string | null;
}
const NewThread = () => {
  const [postData, setPostData] = useState<PostData>({
    author: null,
    forum: null,
    title: null,
    content: null,
  });

  const { user } = useAuth();
  const navigate = useNavigate();

  const handlePostNewThread = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!user) {
      console.log('could not find user');
      return;
    }

    postData.author = user?.username;

    try {
      const response = await axios.post(
        'http://localhost:8080/posts/add',
        postData
      );
      const formattedThreadName = postData.title?.replace(' ', '-');
      navigate(`/thread/${response.data.id}/${formattedThreadName}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPostData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div className="flex flex-col align-stretch w-[100vw] lg:w-[50vw] gap-6">
        <BreadcrumbsComp />

        {user ? (
          <form
            id="newPostForm"
            className="flex flex-col p-4 border rounded-md border-none lg:border-bordercol text-txtdark gap-3"
            onSubmit={(e) => handlePostNewThread(e)}
          >
            <input
              type="text"
              name="title"
              id="Title"
              placeholder="Title"
              onChange={handleChange}
              className="flex-grow text-xl rounded-lg xl:w-[50%] pl-4 border border-solid border-bordercol bg-bordercol bg-clip-padding px-5 py-2 text-txtbright font-normal text-surface transition duration-300 ease-in-out focus:border-borderfocus focus:text-white focus:shadow-inset focus:outline-none motion-reduce:transition-none"
            />
            <textarea
              name="content"
              id="content"
              rows={6}
              placeholder="Write about something..."
              onChange={handleChange}
              className="flex-grow rounded-lg pl-4 pt-4 border border-solid border-bordercol bg-bordercol bg-clip-padding px-5 py-2 text-txtbright font-normal text-surface transition duration-300 ease-in-out focus:border-borderfocus focus:text-white focus:shadow-inset focus:outline-none motion-reduce:transition-none"
            ></textarea>
            <section className="flex justify-between gap-2">
              <div className="flex flex-col md:flex-row md:gap-2">
                <span className="md:ml-1 mx-2 my-2">Select a topic:</span>
                <label
                  className="flex gap-2 md:border border-bordercol rounded-md
              p-1.5 md:p-2 hover:bg-bordercol hover:cursor-pointer text-txtbright "
                >
                  <input
                    type="radio"
                    name="forum"
                    value="games"
                    onChange={handleChange}
                  />
                  games
                </label>

                <label
                  className="flex gap-2 md:border border-bordercol rounded-md
                  p-1.5 md:p-2 hover:bg-bordercol hover:cursor-pointer text-txtbright "
                >
                  <input
                    type="radio"
                    name="forum"
                    value="movies"
                    onChange={handleChange}
                  />
                  movies
                </label>

                <label
                  className=" flex gap-2 md:border border-bordercol rounded-md
              p-1.5 md:p-2 hover:bg-bordercol hover:cursor-pointer text-txtbright "
                >
                  <input
                    type="radio"
                    name="forum"
                    value="animals"
                    onChange={handleChange}
                  />
                  animals
                </label>
              </div>
              <input
                type="submit"
                value="Submit"
                className="bg-odark border rounded-md border-bordercol text-txtbright hover:bg-bordercol w-24 cursor-pointer disabled:hover:bg-transparent disabled:hover:cursor-not-allowed disabled:opacity-45"
                disabled={
                  !postData.title || !postData.content || !postData.forum
                }
              />
            </section>
          </form>
        ) : (
          <div className="flex text-center justify-center text-txtbright fill-txtdark">
            <p className=" pr-2">Log in to create a thread</p>
            <svg
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
            >
              <path
                fill="current"
                d="M52,24h-4v-8c0-8.836-7.164-16-16-16S16,7.164,16,16v8h-4c-2.211,0-4,1.789-4,4v32c0,2.211,1.789,4,4,4h40
	c2.211,0,4-1.789,4-4V28C56,25.789,54.211,24,52,24z M32,48c-2.211,0-4-1.789-4-4s1.789-4,4-4s4,1.789,4,4S34.211,48,32,48z M40,24
	H24v-8c0-4.418,3.582-8,8-8s8,3.582,8,8V24z"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default NewThread;
