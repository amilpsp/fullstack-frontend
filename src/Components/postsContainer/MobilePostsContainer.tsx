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
      <div className="flex items-center pl-3">
        {props.image}

        <h1 className=" text-xl ml-1 font-light whitespace-nowrap cursor-default">
          {props.title}
        </h1>
        <div className="border-b border-bordercol flex-1 h-full ml-3 mr-5 mt-auto mb-2"></div>
      </div>

      {/* Container*/}
      {props.posts.map((post, index) => {
        return (
          <div
            key={index}
            className="px-5 border-b border-bordercol py-4 hover:bg-bordercol cursor-pointer"
            onClick={() => handlePostNavigation(post.id, post.name)}
          >
            {/*Top*/}
            <div className="flex justify-between pb-1 items-center">
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
              <div className="flex items-center gap-2 fill-white stroke-white fill">
                <h3 className="text-lg">{post.replies}</h3>
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>comment 3</title>
                  <desc>Created with Sketch Beta.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Icon-Set-Filled"
                      transform="translate(-207.000000, -257.000000)"
                      fill="#ffffffc0"
                    >
                      <path
                        d="M231,273 C229.896,273 229,272.104 229,271 C229,269.896 229.896,269 231,269 C232.104,269 233,269.896 233,271 C233,272.104 232.104,273 231,273 L231,273 Z M223,273 C221.896,273 221,272.104 221,271 C221,269.896 221.896,269 223,269 C224.104,269 225,269.896 225,271 C225,272.104 224.104,273 223,273 L223,273 Z M215,273 C213.896,273 213,272.104 213,271 C213,269.896 213.896,269 215,269 C216.104,269 217,269.896 217,271 C217,272.104 216.104,273 215,273 L215,273 Z M223,257 C214.164,257 207,263.269 207,271 C207,275.419 209.345,279.354 213,281.919 L213,289 L220.009,284.747 C220.979,284.907 221.977,285 223,285 C231.836,285 239,278.732 239,271 C239,263.269 231.836,257 223,257 L223,257 Z"
                        id="comment-3"
                      ></path>
                    </g>
                  </g>
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
