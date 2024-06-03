import { Link, useNavigate } from 'react-router-dom';

type MobilePostsContainerProps = {
  title: string;
  image: JSX.Element;
  posts: Post[];
};

export const MobilePostsContainer = (props: MobilePostsContainerProps) => {
  const navigate = useNavigate();

  const handlePostNavigation = (threadId: number, threadName: string) => {
    const formattedThreadName = threadName.replace(' ', '-');
    navigate(`/thread/${threadId}/${formattedThreadName}`);
  };
  return (
    <div className="">
      {/* Title */}
      <div className="flex items-center mt-10">
        {props.image}

        <h1 className=" text-2xl ml-1 font-light whitespace-nowrap cursor-default">
          {props.title}
        </h1>
        <div className="border-b border-bordercol flex-1 h-full ml-3 mr-5 mt-auto mb-2"></div>
      </div>

      {/* Container*/}
      {props.posts.map((post, index) => {
        return (
          <div
            key={index}
            className="px-5 border-b border-bordercol pb-2 hover:bg-bordercol cursor-pointer  "
            onClick={() => handlePostNavigation(post.id, post.name)}
          >
            {/*Top*/}
            <div className="flex justify-between pt-6 pb-1 items-center">
              <h2 className=" text-lg font-light  ">{post.name}</h2>
              <div>
                <h3 className=" text-txtdark">{post.topic}</h3>
              </div>
            </div>
            {/*Middle */}
            <div>
              <p className="text-txtdark w-[28vw] w-full">
                {post.content.length < 50
                  ? post.content
                  : post.content.slice(0, 50) + '...'}
              </p>
            </div>
            {/*Bottom */}
            <div className="flex justify-between pt-3 items-center">
              <div className="flex items-center gap-1">
                <h3 className=" text-lg">{post.replies}</h3>
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
              </div>
              <div className="flex gap-3 font-light">
                <h3 className=" text-txtbright ">{post.author}</h3>{' '}
                <h3 className=" text-txtdark">{post.time.slice(0, 5)}</h3>
                <h3 className=" text-txtdark">{post.date}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
