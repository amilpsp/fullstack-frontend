import './ThreadPage.css';
import Reply from '../../Components/Reply/Reply';
import '/src/Components/Reply/Reply.tsx';
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
    name: 'Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet',
    date: 'January 1, 2000',
    time: '10:11',
    originalPoster: 'John Doe',
    topic: 'games',
    replies: 3,
    lastReply: {
      name: 'Jane Doe',
      date: 'January 2, 2001',
      time: '10:27'
    }
  };
  const mockReplies = [
    {
      id: 1,
      body: 'Trying to make some fake comments',
      author: 'me',
      date: '2024/05/21',
      time: '12:56'
    },
    {
      id: 2,
      body: "seccond fake comment, let's see",
      author: 'her',
      date: '2024/05/21',
      time: '12:56'
    },
    {
      id: 3,
      body: 'well ok it works',
      author: 'him',
      date: '2024/05/21',
      time: '12:56'
    }
  ];
  return (
    <div
      id="thread-page"
      className="flex flex-col align-stretch w-[50vw] gap-6"
    >
      {/* Breadcrumbs here */}
      <p className="m-1 text-center">/Thread</p>
      <section className="flex flex-col gap-4 ">
        <article
          id="post-body"
          className="border border-bordercol rounded-lg p-4"
        >
          <div className="flex flex-row justify-between">
            <h2 className="text-xl mb-4">{mockPost.name}</h2>
            <div className="text-xs text-txtdark">
              posted in{' '}
              <span className="text-txtbright ml-2">{mockPost.topic}</span>
            </div>
          </div>
          <p>{mockPost.content}</p>
        </article>
        {/* end of post body */}
        <div id="post-info" className="flex flex-row justify-end gap-6 mb-8">
          <span>{mockPost.originalPoster}</span>
          <span className="text-txtdark">{mockPost.date}</span>
          <span className="text-txtdark">{mockPost.time}</span>
        </div>
      </section>

      <form action="" className="flex gap-2">
        <textarea
          id="add-reply"
          name="add-reply"
          placeholder="Add a reply"
          className="textarea-field-sizing flex-grow w-full h-auto min-h-12 rounded-3xl pl-6 pt-3.5 border border-solid border-bordercol bg-bordercol bg-clip-padding px-5 py-2 text-txtbright font-normal text-surface transition duration-300 ease-in-out focus:border-borderfocus focus:text-white focus:shadow-inset focus:outline-none motion-reduce:transition-none"
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="border rounded-xl w-24 px-2 py-1 grow-0 max-h-12 border-bordercol hover:bg-bordercol cursor-pointer"
        />
      </form>

      <section className="flex flex-col gap-6 mb-6">
        <div>
          <div className="text-2xl flex gap-2">
            <svg
              width="24"
              height="30"
              viewBox="0 0 28 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="28" height="34" fill="url(#pattern0_2_78)" />
              <defs>
                <pattern
                  id="pattern0_2_78"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_2_78"
                    transform="matrix(0.0104167 0 0 0.00857843 0 0.0882353)"
                  />
                </pattern>
                <image
                  id="image0_2_78"
                  width="96"
                  height="96"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIklEQVR4nO2dWYgdRRiFS+OuKIKKOwoGN4ygKIKoEYM+qAiKoD5EfBF9UV/EZQgobgHz4oLbg6AghvvmgogLl4AMM5Oqc7pnrpJcojga0ASNmpjVYEmRBmOYMXe6q/uv6q4PDgSSydR/Tld3V3dVtVKJRCKRSCQSiUQiEQjW2kNIXmyMuYvkGIC3Sa4BsI7kLIAtJP9yKv48W/zdmuLfjrmfBXCR+7+k64kCAJcCeALAx4Wp1ocA/ArgIwCPG2OWSNcZFMaYJSSfIzn0ZfgIgawH8Gye55eoLmKtPTTLsltJft6U6f8jDWB5v98/TLUdVySAB935OgDj7QH63hjzQGuDALAMwEwARtuDnJ7chfzO1ly4syw7F8CX0sZy4fqC5Dkq8tvI+wFsDcBMW1LbATwcXW/QWp/gbiUDMND6EIAPJyYmjlcxYIw5j+TX0qbRv4Za6wtUyJBc6nMAxcBU1LZUhQiA6wD8KW0Sm7kuLFMhkWXZTSR3BGCObagn7Mqy7BYVAlrrq0julDaFzcsdcFeKmm+MOR3AxgDMsEL6aWZm5iwR87MsOxYAAjDBCkuPj48f3XgAJF8PoHgbiF5u1HxjzA0A/g6gcBuCCi9ubMR8NyIM9GmmFQ7hu8FgcFztAZB8XrpYhqunazVfa31aRwZbtowAbJucnDy1tgAAvCFdJAMXgFdrMV9rfZIbAUoXyMAFYHeWZad4D8DNKJAujvHoUe8v0d1VPoDCbCTa4DzzFgDJ6wMoysYkY8y1PgNYJV0QIxOAlT4DaOMbLltzANNezNdany1dDCNVnudnVg4gy7LbpQthpAJwW+UAAKyQLoSRCsCTPgJYLV0I49V7lQNwLxx8NmqE32dD/vkFau1CvJ6vQRtSACwbwNBHAJtTACwVAIBNlQPw/QBuhMBtiwLYpaqSAmCVEHb6CGBT6gEs2wN+9hHA+hQAywawrnIAJKdSACx7Cpry0QPSQIyle8BqHz1gzGcP6JIArKgcQLGcVLwYRij3ILNyAG7yqXQhjFR5np+vfJBeyLDULai3xX3u9Zr00cT49I7yBcmrAyjIxiQA93gLoNfrLQLwg3RRjEd7AZysfELysQAKs5HoE+Wb6enpE9PEXDZ3+zkXaXIuR7r70VofXksAbpqFWycbQBe3AesFVScknwqgSBuottcyM3p/3IrAtESJ8wWwSjUByZvTIj0eaP6OWlfHzBHCSwF0eRuKADyjmmQ4HB65b522fPGU16xbuK6aBsBi39NW2NU5oGVxG1Z0fID2gZKmWDm/OwAzbMPa3OiFd4Q3Z53ZM4j7liHdoUIiz/NrAPwmbQwbEIC3VMB7Qbd9L4m1/X7/KBXytpUkewEYZWvQL24zWhXJxq2PtOzivMct2VUx4cYKAD4NwDxbRe7RC4B7VawUd0mznV7vJY3W+hgAD8UWBIBXVJtwb4xI3kcyj8D8N6PbvHuh340h+WKI21+6jwF53XQjZHq93iK3Caz7iA/JzwJ49flaZ8yfi8FgcESe55cVn7Fyr0HfBzBB8hsAP5L8fb+9nLcA+NbXFEo3E7DVp506YTXz97qxi3QNUcPyR/020ef6bYHlzN9ojLlcuu1dDWDKbccp3e7WwIWZ/64bHEq3uVVwtFPOVgB3S7e1lfDg5jsWS7eztXB+891nb1e68YV0G1sN5z7qpwFcId22TsD/mr/HHfVuEpl0uzoD/z3qvzLGXCjdns5B8o/i+4/dfZAmCckzpNuQSCQSKg7+ARfvyukPfGIHAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
            {/* props.replyAmount */} <p>X replies</p>
            <div className="border-b border-bordercol flex-1 h-full ml-3 mr-5 mt-auto mb-2"></div>
          </div>
        </div>
        {mockReplies.map((reply) => {
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
