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
          className="flex flex-col w-[50vw] p-4 border rounded-md border-bordercol text-txtbright gap-3 "
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
              <span className="">select a topic:</span>
              <SmTopicButtons />
            </div>
            <input
              type="submit"
              value="Submit"
              className="bg-bgcol border rounded-md border-bordercol text-txtbright p-2"
            />
          </section>
        </form>
      </div>
    </>
  );
};
export default NewThread;
