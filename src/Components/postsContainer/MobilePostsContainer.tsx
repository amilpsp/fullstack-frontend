import { useNavigate } from 'react-router-dom';

type MobilePostsContainerProps = {
  title: string;
  image: JSX.Element;
  posts: Post[];
};

export const MobilePostsContainer = (props: MobilePostsContainerProps) => {
  const navigate = useNavigate();
  const topicIcons: { [key: string]: React.ReactNode } = {
    all: (
      <svg
        version="1.1"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 42 42"
        className="h-[1rem] mr-2 ml-2 fill-txtbright"
      >
        <style type="text/css"></style>
        <polygon
          points="38.2,1 36,1 21,1 21,6 31,6 31,11 27.4,11 26,11 26,16 22.9,16 21,16 21,21.1 18,21.1 16,21.1 16,26.1
	13,26.1 10.9,26.1 10.9,31.1 7.6,31.1 5.9,31.1 5.9,36.1 0.9,36.1 0.9,41 10.9,41 10.9,38.5 10.9,36.1 16,36.1 16,33.6 16,31.1
	21,31.1 21,29 21,26.1 26,26.1 26,22.6 26,21.1 31,21.1 31,17.6 31,16 36,16 36,26.1 41.1,26.1 41.1,16 41.1,11 41.1,1 "
        />
      </svg>
    ),
    games: (
      <svg
        version="1.1"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 42 42"
        className="h-[1rem] mr-2 ml-2 fill-txtbright"
      >
        <style type="text/css"></style>
        <polygon
          points="41,4.8 37.2,4.8 37.2,2.9 35.3,2.9 35.3,1 29.6,1 29.6,2.9 25.8,2.9 25.8,4.8 25.8,6.7 23.9,6.7
	23.9,12.4 21,12.4 19.8,12.4 18.1,12.4 18.1,6.7 16.2,6.7 16.2,4.8 16.2,2.9 12.3,2.9 12.3,1 6.7,1 6.7,2.9 4.8,2.9 4.8,4.8 1,4.8
	1,27.6 5.7,27.6 5.7,31.4 9.5,31.4 9.5,36.2 16.2,36.2 16.2,41 21,41 23.4,41 25.8,41 25.8,36.2 32.4,36.2 32.4,31.5 36.2,31.5
	36.2,27.7 41,27.7 "
        />
      </svg>
    ),
    movies: (
      <svg
        version="1.1"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 42 42"
        className="h-[1rem] mr-2 ml-2 fill-txtbright"
      >
        <style type="text/css"></style>
        <polygon
          points="41,13 27,13 27,7 23,7 23,1 19,1 19,7 15,7 15,13 1,13 1,21 5,21 5,25 9,25 9,31 5,31 5,35.8 5,37
	5,41 13,41 13,37 19,37 19,33 23,33 23,37 29,37 29,41 37,41 37,37 37,35 37,31 33,31 33,25 37,25 37,21 41,21 "
        />
      </svg>
    ),
    animals: (
      <svg
        version="1.1"
        id="Layer_2_1_"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 42 42"
        className="h-[1rem] mr-2 ml-2 fill-txtbright"
      >
        <style type="text/css"></style>
        <path
          d="M40.1,28.8V13.2h-3.5V1h-5.2v3.5H28v3.4H14V4.5h-3.5V1H5.3v12.2H1.9v15.6h3.4V34H2v3.4h3.4v-3.3h5.1v3.4H7.1V41
	h3.5v-3.5h20.6v3.4h3.5v-3.5h-3.4v-3.3h5.1v3.4h3.5V34h-3.4v-5.2H40.1z M15.8,21.8h-3.6v-3.5h3.6V21.8z M22.7,28.8v5.3h-3.6v-5.3
	h-1.7v-3.5h7v3.5H22.7z M29.7,21.8h-3.6v-3.5h3.6V21.8z"
        />
      </svg>
    ),
  };

  const handlePostNavigation = (threadId: number, threadName: string) => {
    const formattedThreadName = threadName.replace(' ', '-');
    navigate(`/thread/${threadId}/${formattedThreadName}`);
  };
  return (
    <div className="">
      {/* Title */}
      <div className="flex items-center mt-10 pl-3">
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
              <div className="flex items-center">
                {topicIcons[post.topic]}
                <h3 className=" text-txtdark">{post.topic}</h3>
              </div>
            </div>
            {/*Middle */}
            <div>
              <p className="text-txtdark w-full">
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
