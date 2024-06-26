import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../Pages/HomePage/HomePage';
import AccountPage from '../Pages/AccountPage/AccountPage';
import SearchPage from '../Pages/SearchPage/SearchPage';
import TopicPage from '../Pages/TopicPage/TopicPage';
import ThreadPage from '../Pages/ThreadPage/ThreadPage';
import NewThread from '../Pages/NewThread/NewThread';
import { UserPage } from '../Pages/UserPage/UserPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'account', element: <AccountPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'topic/all', element: <TopicPage /> },
      { path: 'topic/:topicName', element: <TopicPage /> },
      { path: 'thread/:threadId/:threadName', element: <ThreadPage /> },
      { path: 'newThread', element: <NewThread /> },
      { path: 'user/:username', element: <UserPage /> }
    ]
  }
]);
