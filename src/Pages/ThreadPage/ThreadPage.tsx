
import './ThreadPage.css'
import Reply from "../../Components/Reply/Reply";
import "/src/Components/Reply/Reply.tsx";
/* import { TextField } from "@mui/material";  */
/* type Props = {
  threadTitle:string;
  forum:string;
  postContent:string;
  author:string;
  createdDate:string;
  createdTime:string;
  replyAmount:number;
} */

const ThreadPage = (/* props: Props */) => {
  const mockPost = {
      name: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet",
      date: "January 1, 2000",
      time: "10:11",
      originalPoster: "John Doe",
      topic: "games",
      replies: 3,
      lastReply: {
        name: "Jane Doe",
        date: "January 2, 2001",
        time: "10:27",
      },
    }
  const mockReplies=[
  {
    id:1,
    body:"Trying to make some fake comments",
    author:"me",
    date:"2024/05/21",
    time:"12:56"
  },
  {
    id:2,
    body:"seccond fake comment, let's see",
    author:"her",
    date:"2024/05/21",
    time:"12:56"
  },
  {
    id:3,
    body:"well ok it works",
    author:"him",
    date:"2024/05/21",
    time:"12:56"
  }
]
  return (
    <div
      id="thread-page"
      className="flex flex-col align-stretch w-[50vw] gap-6"
    >
      <div>BREADCRUMS GO HERE</div>
      <section className="flex flex-col gap-6 ">
        <article id="post-body" className="border rounded-lg p-4">
          <div className="flex flex-row justify-between">
            <h2 className="text-xl">{mockPost.name}</h2>
            <div className="text-xs">
              posted on <span>{mockPost.topic}</span>
            </div>
          </div>
          <p>
            {mockPost.content}
          </p>
        </article>
        {/* end of post body */}
        <div id="post-info" className="flex flex-row justify-end gap-2">
          <span>{mockPost.originalPoster}</span>
          <span>{mockPost.date}</span>
          <span>{mockPost.time}</span>
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
          <span className="text-xl">{/* props.replyAmount */} replies</span> <hr className="mb-4" />
        </div>
        {mockReplies.map((reply)=>{
          return (
						<Reply
							key={reply.id}
							replyAuthor={reply.author}
							replyBody={reply.body}
							replyCreatedDate={reply.date}
							replyCreatedTime={reply.time}
						></Reply>
					);
        })}
      </section>
    </div>
  );
};

export default ThreadPage;
