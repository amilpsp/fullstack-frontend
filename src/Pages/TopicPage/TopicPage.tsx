import { useEffect, useState } from 'react';
import { PostsContainer } from '../../Components/postsContainer/PostsContainer';
import './TopicPage.css';
import axios from 'axios';
import BreadcrumbsComp from '../../Components/BreadcrumbsComp/BreadcrumbsComp';
import { useLocation, useParams } from 'react-router-dom';

const TopicPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { topicName } = useParams<{ topicName: string }>();
  const { pathname } = useLocation();
  /* const threadsContainerInfo = {
    svg: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth="0.72"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <defs>
            <style>
              .a
              fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;
            </style>
          </defs>
          <path
            className="a"
            d="M18.581,4.5c-4.0453,5.3622-6.3176,11.3134-8.5424,17.2811l24.6775-1.1829A77.861,77.861,0,0,0,25.34,4.9111"
          ></path>
          <path
            className="a"
            d="M10.0434,21.7772C3.7307,28.9326,5.419,32.5657,6.3423,36.5409c6.3477,3.2453,18.2725,7.0505,26.4562-3.3318m5.2086-8.694a10.7454,10.7454,0,0,0-3.2929-3.9208"
          ></path>
          <path className="a" d="M5.1507,37.7947l1.1916-1.2509"></path>
          <path
            className="a"
            d="M33.4322,43.5c.0288-3.1569-.9543-5.7014-3.65-7.206"
          ></path>
          <path
            className="a"
            d="M39.5651,31.5063l3.2842-.87L40.2328,40.7254l-3.116.3939Z"
          ></path>
          <path
            className="a"
            d="M16.812,31.9048c-.4961.5256-.6243,1.8253.0121,2.1684,2.4483,1.3179,6.0532.5491,9.073.3475,2.76-.1842,5.5041-1.8185,8.1779-1.417.3348.05.0036-.7431.2381-.9875.6178-.643,2.0975.0233,2.5728-.73.1623-.2571.1446-.8335-.1522-.8995a31.6383,31.6383,0,0,0-8.47.1472c-1.1391.1695-2.1859.7592-3.3221.9484-2.6767.4458-6.2661-1.55-8.1293.423Z"
          ></path>
          <path
            className="a"
            d="M38.01,24.518c.2345,1.007.4836,2.02-.0631,2.6525-1.5969,1.7009-9.3841,2.22-10.6331,1.4307l-1.9856-1.2538-.9933.5908c-.8485.5048-6.964-.1227-8.58-1.488L13.072,24.1826a21.6479,21.6479,0,0,0,3.4815-1.03s6.1213-.4853,8.5822,1.0118a3.4608,3.4608,0,0,1,.8407,1.2421l2.96.317,3.877-1.1964a8.39,8.39,0,0,1,5.196-.0091Z"
          ></path>
          <path
            className="a"
            d="M18.3574,27.5213s-.3651-1.7456.1791-2.0537c1.7009-.9613,3.36-1.19,4.8529-.2637C24.3653,25.81,23.3533,28,23.3533,28"
          ></path>
          <path
            className="a"
            d="M31.2162,28.8529a15.2294,15.2294,0,0,1,1.5385-2.7214,2.4577,2.4577,0,0,1,2.9032-.3888c.701.6241.4313,2.3326.4313,2.3326"
          ></path>
          <path
            className="a"
            d="M37.6115,27.4727c-.9633,1.3122-1.7825,2.5864-1.6231,2.7759"
          ></path>
        </g>
      </svg>
    ),
  }; */

  const topicIcons = {
    games: (
      <svg
        version="1.1"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 42 42"
        className="h-[1.5rem] mr-2 ml-2 fill-txtbright"
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
        className="h-[1.5rem] mr-2 ml-2 fill-txtbright"
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
        className="h-[1.5rem] mr-2 ml-2 fill-txtbright"
      >
        <style type="text/css"></style>
        <path
          d="M40.1,28.8V13.2h-3.5V1h-5.2v3.5H28v3.4H14V4.5h-3.5V1H5.3v12.2H1.9v15.6h3.4V34H2v3.4h3.4v-3.3h5.1v3.4H7.1V41
	h3.5v-3.5h20.6v3.4h3.5v-3.5h-3.4v-3.3h5.1v3.4h3.5V34h-3.4v-5.2H40.1z M15.8,21.8h-3.6v-3.5h3.6V21.8z M22.7,28.8v5.3h-3.6v-5.3
	h-1.7v-3.5h7v3.5H22.7z M29.7,21.8h-3.6v-3.5h3.6V21.8z"
        />
      </svg>
    )
  };

  const handlePostsFetch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/posts?topic=${topicName}`
      );

      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handlePostsFetch();
  }, []);

  useEffect(() => {
    handlePostsFetch();
  }, [pathname]);
  return (
    <div className="flex flex-col align-stretch w-[50vw] gap-6">
      <BreadcrumbsComp />
      {posts && topicName && (
        <PostsContainer
          title={topicName}
          image={topicIcons[topicName as keyof typeof topicIcons]}
          posts={posts}
        />
      )}
    </div>
  );
};
export default TopicPage;
