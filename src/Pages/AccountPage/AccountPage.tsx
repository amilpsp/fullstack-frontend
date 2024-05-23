import './AccountPage.css';
import { PostsContainer } from '../../Components/postsContainer/PostsContainer';

const AccountPage = () => {
  /* mockdata */
  const mockdata = [
    {
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
    title: 'My threads',
    svg: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-2"
      >
        <g clip-path="url(#clip0_4_266)">
          <path
            d="M38 19.1H30.4L24.7 36.2L13.3 2L7.6 19.1H0"
            stroke="#CFCFCF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_266">
            <rect width="38" height="38" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    posts: mockdata
  };

  return (
    <div>
      {/* Breadcrumbs here */}
      <p className="m-1 text-center">/Account</p>
      <div className="py-4">
        <h1 className="text-lg cursor-default">My account</h1>

        <div className="flex my-4">
          <p className="mt-1.5 cursor-default">
            Name: <b className="ml-4">John Doe</b>
          </p>
          <button className="flex justify-center items-center text-txtbright hover:bg-bordercol border-bordercol border-[1px] rounded-lg w-20 h-8 p-4 text-sm ml-6">
            Change
          </button>
        </div>
        <p>
          <u className="cursor-pointer hover:text-white">Change password</u>
        </p>

        <PostsContainer
          title={postsContainerInfo.title}
          image={postsContainerInfo.svg}
          posts={postsContainerInfo.posts}
        />
      </div>
    </div>
  );
};

export default AccountPage;
