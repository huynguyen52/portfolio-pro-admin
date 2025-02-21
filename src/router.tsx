import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './components';
import Dashboard from './pages/dashboard';
import WEB_ROUTES from './web-routes';
import Blogs from './pages/blogs';
import Skills from './pages/skill';

const router = createBrowserRouter([
  {
    path: WEB_ROUTES.ROOT.path,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={WEB_ROUTES.DASHBOARD.path} />,
      },
      {
        path: WEB_ROUTES.DASHBOARD.path,
        element: <Dashboard />,
      },
      {
        path: WEB_ROUTES.BLOGS.path,
        element: <Blogs />,
      },
      {
        path: WEB_ROUTES.SKILLS.path,
        element: <Skills />,
      },
    ],
  },
]);

export default router;
