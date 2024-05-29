import './NewThread.css';
/* import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup"; */

import SmTopicButtons from '../../Components/SmTopicButtons/SmTopicButtons';
import axios from 'axios';
import React from 'react';
import { useAuth } from '../../contexts/useAuth';
const NewThread = () => {
  const { user } = useAuth();

  const handlePostNewThread = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const postData = {
      author: 'creycreycrey',
      forum: 'games',
      title: '5th post!',
      content: 'hello there'
    };
    try {
      await axios.post('http://localhost:8080/posts/add', postData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col align-stretch w-[50vw] gap-6">
        {user ? (
          <form
            id="newPostForm"
            className="flex flex-col w-[50vw] p-4 border rounded-md border-bordercol text-txtdark gap-3"
            onSubmit={(e) => handlePostNewThread(e)}
          >
            <input
              type="text"
              name="Title"
              id="Title"
              placeholder="Title"
              className="flex-grow text-xl rounded-lg w-[50%] pl-4 border border-solid border-bordercol bg-bordercol bg-clip-padding px-5 py-2 text-txtbright font-normal text-surface transition duration-300 ease-in-out focus:border-borderfocus focus:text-white focus:shadow-inset focus:outline-none motion-reduce:transition-none"
            />
            <textarea
              name="content"
              id="content"
              rows={6}
              placeholder="Write about something..."
              className="flex-grow  rounded-lg pl-4 pt-4 border border-solid border-bordercol bg-bordercol bg-clip-padding px-5 py-2 text-txtbright font-normal text-surface transition duration-300 ease-in-out focus:border-borderfocus focus:text-white focus:shadow-inset focus:outline-none motion-reduce:transition-none"
            ></textarea>
            <section className="flex justify-between gap-2">
              <div className="flex gap-2">
                <span className="ml-1 self-center">select a topic:</span>
                <SmTopicButtons />
              </div>
              <input
                type="submit"
                value="Submit"
                className="bg-odark border rounded-md border-bordercol text-txtbright hover:bg-bordercol w-24 cursor-pointer"
              />
            </section>
          </form>
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
