const WEB_ROUTES: {
  [key: string]: {
    path: string;
    text?: string;
    isMenu?: boolean;
  };
} = {
  ROOT: {
    path: '/',
  },
  DASHBOARD: {
    path: '/dashboard',
    text: 'Dashboard',
    isMenu: true,
  },
  BLOGS: {
    path: '/blogs',
    text: 'Blogs',
    isMenu: true,
  },
  SKILLS: {
    path: '/skills',
    text: 'Skills',
    isMenu: true,
  },
};

export default WEB_ROUTES;
