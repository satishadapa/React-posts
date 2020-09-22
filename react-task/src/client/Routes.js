import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PostsPage from './Pages/PostsPage';

import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        path: '/posts/:id',
        ...PostsPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
