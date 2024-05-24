import BreadcrumbsComp from '../../Components/BreadcrumbsComp/BreadcrumbsComp';
import SmTopicButtons from '../../Components/SmTopicButtons/SmTopicButtons';
import { PostsContainer } from '../../Components/postsContainer/PostsContainer';
import './SearchPage.css';

const SearchPage = () => {
  /* mockdata */
  const mockdata = [
    {
      id: 1,
      name: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet',
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
    },
    {
      id: 2,
      name: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet',
      date: 'January 5, 2003',
      time: '10:22',
      originalPoster: 'John Doe',
      topic: 'animals',
      replies: 20,
      lastReply: {
        name: 'Jane Doe',
        date: 'January 5, 2022',
        time: '12:29'
      }
    }
  ];
  /* mockdata end */
  const postsContainerInfo = {
    title: 'Results',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-7"
      >
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd"
        />
      </svg>
    ),
    posts: mockdata
  };
  return (
    <div className="flex flex-col w-[50vw]">
      <BreadcrumbsComp />
      <div className="text-center">
        <p className="m-4 text-txtdark">Search specific topics:</p>
        <SmTopicButtons />
        <p className="m-4 text-txtdark">
          Found X threads containing{' '}
          <span className="text-txtbright">"Placeholder"</span> in games
        </p>
      </div>
      <PostsContainer
        title={postsContainerInfo.title}
        image={postsContainerInfo.svg}
        posts={postsContainerInfo.posts}
      />
    </div>
  );
};

export default SearchPage;
