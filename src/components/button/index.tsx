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
  startIcon?: React.ReactNode;
};

export function ButtonComponent({
  color,
  children,
  variant,
  startIcon,
}: ButtonProps) {
  return (
    <Button color={color} variant={variant} startIcon={startIcon}>
      {children}
    </Button>
  );
}
