import { useEffect, useState, useCallback } from 'react';
import { PostsContainer } from '../../Components/postsContainer/PostsContainer';
import './TopicPage.css';
import axios from 'axios';
import BreadcrumbsComp from '../../Components/BreadcrumbsComp/BreadcrumbsComp';
import { useLocation, useParams } from 'react-router-dom';

const TopicPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { topicName } = useParams<{ topicName: string }>();
  const { pathname } = useLocation();

  const topicIcons = {
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
    ),
  };

  const handlePostsFetch = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/posts${topicName ? `?topic=${topicName}` : ''}`
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [topicName]);

  useEffect(() => {
    handlePostsFetch();
  }, [handlePostsFetch, pathname]);

  return (
    <div className="flex flex-col align-stretch w-[50vw] gap-6">
      <BreadcrumbsComp />
      {posts && (
        <PostsContainer
          title={topicName || 'All threads'}
          image={
            topicIcons[topicName as keyof typeof topicIcons] || topicIcons.all
          }
          posts={posts}
        />
      )}
    </div>
  );
};
export default TopicPage;
