import './ThreadPage.css'
import Reply from "../../Components/Reply/Reply";
import "/src/Components/Reply/Reply.tsx";
/* import { TextField } from "@mui/material";  */
type Props = {
  threadTitle:string;
  forum:string;
  postContent:string;
  author:string;
  createdDate:string;
  createdTime:string;
  replyAmount:number;
}
const ThreadPage = (props: Props) => {
  return (
    <div
      id="thread-page"
      className="flex flex-col align-stretch w-[50vw] gap-6"
    >
      <div>BREADCRUMS GO HERE</div>
      <section className="flex flex-col gap-6 ">
        <article id="post-body" className="border rounded-lg p-4">
          <div className="flex flex-row justify-between">
            <h2 className="text-xl">{props.threadTitle}</h2>
            <div className="text-xs">
              posted on <span>{props.forum}</span>
            </div>
          </div>
          <p>
            {props.postContent}
          </p>
        </article>
        {/* end of post body */}
        <div id="post-info" className="flex flex-row justify-end gap-2">
          <span>{props.author}</span>
          <span>{props.createdDate}</span>
          <span>{props.createdTime}</span>
        </div>
      </section>

      <form action="" className='flex gap-2'>
        <textarea
          id='add-reply'
          name="add-reply"
          placeholder="Add a reply"
          className="flex-grow text-white bg-black border rounded-lg p-2"
          ></textarea>
        <input type="submit" value='submit' className='border rounded-xl w-fit px-2 py-1 grow-0' />
      </form>

      <section className="flex flex-col gap-4">
        <div>
          <span className="text-xl">{props.replyAmount} replies</span> <hr className="mb-4" />
        </div>
        <Reply replyBody='Hello there' replyAuthor='Kenobi' replyCreatedDate='today'replyCreatedTime='01:23' />
        <Reply replyBody='General Kenobiiii' replyAuthor='Grievous' replyCreatedDate='today'replyCreatedTime='01:23' />
        
      </section>
    </div>
  );
};

export default ThreadPage
