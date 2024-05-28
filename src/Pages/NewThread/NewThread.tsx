import './NewThread.css';
/* import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup"; */

import SmTopicButtons from '../../Components/SmTopicButtons/SmTopicButtons';
import BreadcrumbsComp from '../../Components/BreadcrumbsComp/BreadcrumbsComp';
const NewThread = () => {
  /* const [selectedTopic, setSelectedTopic] = React.useState(-1);
	const handleClick = () => {
		console.log("hello there");
		return "hello there";
	}; */
  return (
    <>
      <div className="flex flex-col align-stretch w-[50vw] gap-6">
        <BreadcrumbsComp />
        <form
          id="newPostForm"
          className="flex flex-col w-[50vw] p-4 border rounded-md border-bordercol text-txtdark gap-3"
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
      </div>
    </>
  );
};
export default NewThread;
