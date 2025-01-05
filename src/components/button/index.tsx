import { Button } from '@mui/material';

type ButtonProps = {
  color:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'warning'
    | 'info'
    | 'danger';
  variant: 'contained' | 'outlined' | 'text';
  children: React.ReactNode;
  onClick?: () => void;
};

export function ButtonComponent({ color, children, variant }: ButtonProps) {
  return (
    <Button color={color} variant={variant}>
      {children}
    </Button>
  );
}
