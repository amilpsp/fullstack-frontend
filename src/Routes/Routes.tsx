import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../Pages/HomePage/HomePage'
import AccountPage from '../Pages/AccountPage/AccountPage'
import SearchPage from '../Pages/SearchPage/SearchPage'
import ThreadPage from '../Pages/ThreadPage/ThreadPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'account', element: <AccountPage /> },
            { path: 'search', element: <SearchPage /> },
            { path: 'thread/:threadId', element: <ThreadPage /> }
        ]
    }
])
