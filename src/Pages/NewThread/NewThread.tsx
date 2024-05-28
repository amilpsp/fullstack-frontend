import "./NewThread.css";
/* import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup"; */

import SmTopicButtons from "../../Components/SmTopicButtons/SmTopicButtons";
import BreadcrumbsComp from "../../Components/BreadcrumbsComp/BreadcrumbsComp";
import axios from "axios";
import React from "react";
const NewThread = () => {
  /* const [selectedTopic, setSelectedTopic] = React.useState(-1);
	const handleClick = () => {
		console.log("hello there");
		return "hello there";
	}; */

  const handlePostNewThread = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const postData = {
      author: "anubisto",
      forum: "animals",
      title: "4th post!",
      content: "hello there",
    };
    try {
      await axios.post("http://localhost:8080/posts/add", postData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col align-stretch w-[50vw] gap-6">
        <BreadcrumbsComp />
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
            className="bg-bgcol border rounded-md border-bordercol text-txtbright w-[50%] text-xl p-2"
          />
          <textarea
            name="content"
            id="content"
            rows={6}
            placeholder="Write about something..."
            className="bg-bgcol border rounded-md border-bordercol text-txtbright p-2"
          ></textarea>
          <section className="flex justify-between gap-2">
            <div className="flex gap-2">
              <span className="ml-1 self-center">select a topic:</span>
              <SmTopicButtons />
            </div>
            <input
              type="submit"
              value="Submit"
              className="bg-bgcol border rounded-md border-bordercol text-txtbright hover:bg-bordercol w-24 cursor-pointer"
            />
          </section>
        </form>
      </div>
    </>
  );
};
export default NewThread;
