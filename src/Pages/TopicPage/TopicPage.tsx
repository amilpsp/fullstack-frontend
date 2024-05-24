import { useEffect, useState } from 'react';
import { PostsContainer } from '../../Components/postsContainer/PostsContainer';
import './TopicPage.css';
import axios from 'axios';
import BreadcrumbsComp from '../../Components/BreadcrumbsComp/BreadcrumbsComp';

const mockdata = [];
const TopicPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const threadsContainerInfo = {
    title: 'Some Specific Topic',
    svg: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffffff"
        stroke="#ffffff"
        stroke-width="0.72"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
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
    posts: mockdata
  };
  const handlePostsFetch = async () => {
    try {
      const response = await axios.get('http://localhost:8080/posts');
      console.log(response.data[0]);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handlePostsFetch();
  }, []);
  return (
    <div className="flex flex-col align-stretch w-[50vw] gap-6">
      <BreadcrumbsComp />
      <PostsContainer
        title={threadsContainerInfo.title}
        image={threadsContainerInfo.svg}
        posts={posts}
      />
    </div>
  );
};
export default TopicPage;