import * as React from 'react';
import Popover, { PopoverOrigin } from '@mui/material/Popover';

type PopoverComponentProps = {
  popoverTrigger: React.ReactNode;
  children: React.ReactNode;
  anchorOrigin?: PopoverOrigin;
  onOpen?: () => void;
  onClose?: () => void;
};

const DEFAULT_ANCHOR_ORIGIN: PopoverOrigin = {
  vertical: 'bottom',
  horizontal: 'left',
};

export function PopoverComponent({
  popoverTrigger,
  children,
  onOpen,
  onClose,
  anchorOrigin = DEFAULT_ANCHOR_ORIGIN,
}: PopoverComponentProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    onOpen?.();
  };

  const handleClose = () => {
    setAnchorEl(null);
    onClose?.();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popover-component' : undefined;

  return (
    <div>
      <div aria-describedby={id} onClick={handleClick}>
        {popoverTrigger}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
      >
        {children}
      </Popover>
    </div>
  );
}
