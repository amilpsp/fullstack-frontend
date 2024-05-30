
import "./NewThread.css";

import BreadcrumbsComp from "../../Components/BreadcrumbsComp/BreadcrumbsComp";
import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../contexts/useAuth";

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

  const handlePostNewThread = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!user) {
      console.log("could not find user");
      return;
    }

    postData.author = user?.name;


    try {
      await axios.post('http://localhost:8080/posts/add', postData);
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
      <div className="flex flex-col align-stretch w-[50vw] gap-6">

        <BreadcrumbsComp />

        
        {user ? (
          <form
          id="newPostForm"
          className="flex flex-col w-[50vw] p-4 border rounded-md border-bordercol text-txtdark gap-3"
          onSubmit={(e) => handlePostNewThread(e)}
        >
          <input
            type="text"
            name="title"
            id="Title"
            placeholder="Title"
            onChange={handleChange}
            className="flex-grow text-xl rounded-lg w-[50%] pl-4 border border-solid border-bordercol bg-bordercol bg-clip-padding px-5 py-2 text-txtbright font-normal text-surface transition duration-300 ease-in-out focus:border-borderfocus focus:text-white focus:shadow-inset focus:outline-none motion-reduce:transition-none"
          />
          <textarea
            name="content"
            id="content"
            rows={6}
            placeholder="Write about something..."
            onChange={handleChange}
            className="flex-grow  rounded-lg pl-4 pt-4 border border-solid border-bordercol bg-bordercol bg-clip-padding px-5 py-2 text-txtbright font-normal text-surface transition duration-300 ease-in-out focus:border-borderfocus focus:text-white focus:shadow-inset focus:outline-none motion-reduce:transition-none"
          ></textarea>
          <section className="flex justify-between gap-2">
            <div className="flex gap-2">
              <span className="ml-1 self-center">select a topic:</span>
              <label
                className=" flex gap-2 border border-bordercol rounded-md
              p-2 hover:bg-bordercol hover:cursor-pointer text-txtbright "
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
                className=" flex gap-2 border border-bordercol rounded-md
              p-2 hover:bg-bordercol hover:cursor-pointer text-txtbright "
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
                className=" flex gap-2 border border-bordercol rounded-md
              p-2 hover:bg-bordercol hover:cursor-pointer text-txtbright "
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
              disabled={!postData.title || !postData.content || !postData.forum}/>
          
          
          
          ) : (
          <div className="text-center">
            <p>Log in to create a thread</p>
            <p>
              <b>ADD A LOCK GRAPHIC MAYBE WITH ARROW TO TOP RIGHT</b>
            </p>
          </div>
        )}
      </div>
    </>
  );
};
export default NewThread;
