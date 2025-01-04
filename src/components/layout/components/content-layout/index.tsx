import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';

type ContentLayoutProps = {
  drawerWidth: number;
};

export function ContentLayout({ drawerWidth }: ContentLayoutProps) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Outlet />
    </Box>
  );
}
