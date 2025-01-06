import { Stack } from '@mui/material';
import { BreadcrumbsComponent } from '../bread-crumbs';
import { Fragment } from 'react';

type ToolbarProps = {
  actions: React.ReactNode[];
};

export function Toolbar({ actions }: ToolbarProps) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <BreadcrumbsComponent />
      <Stack direction="row">
        {actions.map((action, index) => (
          <Fragment key={index}>{action}</Fragment>
        ))}
      </Stack>
    </Stack>
  );
}
